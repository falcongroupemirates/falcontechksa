/**
 * Falcon Blog CMS — website data layer (drop-in replacement for blogData.js)
 *
 * Server-side only. Reads published posts for THIS website from Supabase using
 * the public anon key; Row Level Security guarantees drafts and scheduled posts
 * are never returned. Responses are cached by Next.js and purged instantly by
 * /api/revalidate when the SEO team publishes from the CMS.
 *
 * Env (Vercel → Project → Settings → Environment Variables):
 *   BLOG_SUPABASE_URL          https://xxxx.supabase.co
 *   BLOG_SUPABASE_ANON_KEY     anon / publishable key (NOT the service role key)
 *   BLOG_SITE_KEY              group | cal | geo | ksa
 *   BLOG_REVALIDATE_SECRET     copied from CMS → Settings → Websites
 *   BLOG_DATE_FORMAT           DD-MM-YYYY (default) or MM-DD-YYYY — format of post.date
 *   BLOG_TIMEZONE              Asia/Dubai (default)
 */
import { cache } from "react";
import { createClient } from "@supabase/supabase-js";

export const BLOG_CACHE_TAG = "blog";
const SITE_KEY = process.env.BLOG_SITE_KEY;
const REVALIDATE_SECONDS = Number(process.env.BLOG_REVALIDATE_SECONDS || 3600);
const DATE_FORMAT = process.env.BLOG_DATE_FORMAT || "DD-MM-YYYY";
const TIMEZONE = process.env.BLOG_TIMEZONE || "Asia/Dubai";

let client;
function db() {
  if (!client) {
    const url = process.env.BLOG_SUPABASE_URL;
    const key = process.env.BLOG_SUPABASE_ANON_KEY;
    if (!url || !key || !SITE_KEY) {
      throw new Error("Blog CMS env vars missing: BLOG_SUPABASE_URL, BLOG_SUPABASE_ANON_KEY, BLOG_SITE_KEY");
    }
    client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        // Cache every blog request in the Next.js Data Cache, tagged for on-demand purge
        fetch: (input, init = {}) =>
          fetch(input, { ...init, next: { revalidate: REVALIDATE_SECONDS, tags: [BLOG_CACHE_TAG] } }),
      },
    });
  }
  return client;
}

const LIST_FIELDS = `
  id, legacy_id, slug, title, h1, excerpt, cover_image_url, cover_image_alt, author_name,
  published_at, updated_at, seo_title, meta_description, canonical_url, og_image_url, noindex,
  read_time_minutes,
  category:categories(name, slug),
  post_tags(tags(name, slug)),
  sites!inner(key)
`;

const FULL_FIELDS = `${LIST_FIELDS}, content_html`;

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function zonedParts(iso) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date(iso));
  return Object.fromEntries(parts.map((p) => [p.type, p.value]));
}

function legacyDate(iso) {
  if (!iso) return "";
  const p = zonedParts(iso);
  return DATE_FORMAT === "MM-DD-YYYY" ? `${p.month}-${p.day}-${p.year}` : `${p.day}-${p.month}-${p.year}`;
}

function legacyTime(iso) {
  if (!iso) return "";
  const p = zonedParts(iso);
  return `${p.hour}:${p.minute} ${p.dayPeriod?.toUpperCase()}`;
}

function displayDate(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-GB", { timeZone: TIMEZONE, day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso)
  );
}

/** Accepts an ISO string or the legacy DD-MM-YYYY / MM-DD-YYYY string. */
export function formatDateBadge(value) {
  if (!value) return { day: "", month: "" };
  let day, month, year;
  if (/^\d{4}-\d{2}-\d{2}T/.test(value)) {
    const p = zonedParts(value);
    [day, month, year] = [p.day, p.month, p.year];
  } else {
    const [a, b, y] = value.split("-");
    [day, month] = DATE_FORMAT === "MM-DD-YYYY" ? [b, a] : [a, b];
    year = y;
  }
  return { day, month: `${MONTHS[parseInt(month, 10) - 1]} ${year}` };
}

/* ------------------------------------------------------------------ */
/* Mapping — keeps the shape of the old blogData.js objects             */
/* ------------------------------------------------------------------ */

function mapPost(p) {
  if (!p) return null;
  const tags = (p.post_tags || []).map((pt) => pt.tags).filter(Boolean);
  return {
    id: p.legacy_id ?? p.id,
    uuid: p.id,
    slug: p.slug,
    title: p.title,
    h1: p.h1 || p.title,
    seoTitle: p.seo_title || p.title,
    description: p.meta_description || p.excerpt || "",
    metaDescription: p.meta_description || p.excerpt || "",
    excerpt: p.excerpt || "",
    content: p.content_html ?? undefined,
    image: p.cover_image_url || null,
    imageAlt: p.cover_image_alt || p.title,
    ogImage: p.og_image_url || p.cover_image_url || null,
    author: p.author_name || "Admin",
    date: legacyDate(p.published_at),
    time: legacyTime(p.published_at),
    displayDate: displayDate(p.published_at), // "21 April 2026" — server-formatted, no hydration shift
    dateBadge: formatDateBadge(p.published_at), // { day: "21", month: "Apr 2026" }
    publishedAt: p.published_at,
    updatedAt: p.updated_at,
    category: p.category?.name || "Uncategorised",
    categorySlug: p.category?.slug || "uncategorised",
    tags: tags.map((t) => t.name),
    tagObjects: tags,
    readTime: `${p.read_time_minutes || 1} min read`,
    readTimeMinutes: p.read_time_minutes || 1,
    canonical: p.canonical_url || null,
    noindex: Boolean(p.noindex),
  };
}

/* ------------------------------------------------------------------ */
/* Queries                                                             */
/* ------------------------------------------------------------------ */

/** All published posts for this website, newest first (no body content). */
export const getAllPosts = cache(async () => {
  const { data, error } = await db()
    .from("posts")
    .select(LIST_FIELDS)
    .eq("sites.key", SITE_KEY)
    .eq("status", "published") // RLS also enforces published_at <= now()
    .order("published_at", { ascending: false })
    .limit(1000);

  if (error) {
    console.error("[blog] getAllPosts failed:", error.message);
    return [];
  }
  return data.map(mapPost);
});

/** Single post with content, or null. */
export const getBlogBySlug = cache(async (slug) => {
  if (!slug) return null;
  const { data, error } = await db()
    .from("posts")
    .select(FULL_FIELDS)
    .eq("sites.key", SITE_KEY)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[blog] getBlogBySlug failed:", error.message);
    return null;
  }
  return mapPost(data);
});

/** Destination slug if this slug was renamed in the CMS (for 308 redirects). */
export const getRedirect = cache(async (slug) => {
  const { data } = await db()
    .from("redirects")
    .select("to_slug, sites!inner(key)")
    .eq("sites.key", SITE_KEY)
    .eq("from_slug", slug)
    .maybeSingle();
  return data?.to_slug || null;
});

export async function getRecentBlogs(excludeSlug = null, limit = 3) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** `category` may be the category name or slug. */
export async function getRelatedBlogs(currentSlug, category, limit = 3) {
  const posts = await getAllPosts();
  const same = posts.filter(
    (p) => p.slug !== currentSlug && (p.category === category || p.categorySlug === category)
  );
  if (same.length >= limit) return same.slice(0, limit);
  // top up with recent posts so the "related" block is never empty
  const filler = posts.filter((p) => p.slug !== currentSlug && !same.includes(p));
  return [...same, ...filler].slice(0, limit);
}

export async function getCategories() {
  const posts = await getAllPosts();
  const map = new Map();
  posts.forEach((p) => {
    const entry = map.get(p.categorySlug) || { name: p.category, slug: p.categorySlug, count: 0 };
    entry.count += 1;
    map.set(p.categorySlug, entry);
  });
  return [...map.values()].sort((a, b) => b.count - a.count);
}

/** Tag names (same as the old helper). */
export async function getAllTags() {
  const posts = await getAllPosts();
  return [...new Set(posts.flatMap((p) => p.tags))];
}

/** Tags with slugs and counts. */
export async function getTags() {
  const posts = await getAllPosts();
  const map = new Map();
  posts.forEach((p) =>
    p.tagObjects.forEach((t) => {
      const entry = map.get(t.slug) || { ...t, count: 0 };
      entry.count += 1;
      map.set(t.slug, entry);
    })
  );
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export async function getPostsByCategory(categorySlug) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.categorySlug === categorySlug || p.category === categorySlug);
}

export async function getPostsByTag(tagSlug) {
  const posts = await getAllPosts();
  return posts.filter((p) => p.tagObjects.some((t) => t.slug === tagSlug || t.name === tagSlug));
}

/**
 * Server-side listing: filter by category / tag / search text, then paginate.
 * Use with the page's searchParams, e.g. /blog?category=calibration&page=2
 * `category` and `tag` accept a slug or a display name.
 */
export async function getFilteredPosts({ category, tag, q, page = 1, perPage = 9 } = {}) {
  let posts = await getAllPosts();
  if (category && category !== "All") {
    const c = String(category).toLowerCase();
    posts = posts.filter((p) => p.categorySlug === c || p.category.toLowerCase() === c);
  }
  if (tag) {
    const t = String(tag).toLowerCase();
    posts = posts.filter((p) => p.tagObjects.some((x) => x.slug === t || x.name.toLowerCase() === t));
  }
  if (q) {
    const term = String(q).trim().toLowerCase();
    posts = posts.filter(
      (p) => p.title.toLowerCase().includes(term) || p.h1.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term)
    );
  }
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  return {
    posts: posts.slice((current - 1) * perPage, current * perPage),
    page: current,
    totalPages,
    total: posts.length,
  };
}

/** Paginated listing helper (no filters). */
export async function getPaginatedPosts(page = 1, perPage = 9) {
  return getFilteredPosts({ page, perPage });
}

/** Older / newer neighbours for prev–next links. */
export async function getAdjacentPosts(slug) {
  const posts = await getAllPosts(); // newest first
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return { prevPost: null, nextPost: null };
  return { prevPost: posts[i + 1] || null, nextPost: posts[i - 1] || null };
}

/** For generateStaticParams. */
export async function getAllSlugs() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

/* ------------------------------------------------------------------ */
/* SEO helpers                                                         */
/* ------------------------------------------------------------------ */

/**
 * Next.js Metadata for an article page.
 * @param {object} post   result of getBlogBySlug
 * @param {object} opts   { siteUrl: "https://www.falconcal.com", blogPath: "/blog", siteName }
 */
export function buildPostMetadata(post, { siteUrl, blogPath = "/blog", siteName } = {}) {
  const url = post.canonical || `${siteUrl}${blogPath}/${post.slug}`;
  const images = post.ogImage ? [{ url: post.ogImage, alt: post.imageAlt }] : undefined;
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    robots: post.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      url,
      title: post.seoTitle,
      description: post.metaDescription,
      siteName,
      images,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  };
}

/** schema.org BlogPosting JSON-LD object. Render with <script type="application/ld+json">. */
export function buildArticleJsonLd(post, { siteUrl, blogPath = "/blog", publisherName, publisherLogo } = {}) {
  const url = `${siteUrl}${blogPath}/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: publisherName
      ? {
          "@type": "Organization",
          name: publisherName,
          logo: publisherLogo ? { "@type": "ImageObject", url: publisherLogo } : undefined,
        }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
}

/** Sitemap entries for app/sitemap.js */
export async function getBlogSitemapEntries(siteUrl, blogPath = "/blog") {
  const posts = await getAllPosts();
  return posts
    .filter((p) => !p.noindex)
    .map((p) => ({
      url: `${siteUrl}${blogPath}/${p.slug}`,
      lastModified: p.updatedAt || p.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
}
