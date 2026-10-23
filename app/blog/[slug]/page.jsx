import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, UserRound } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import BlogCard from "@/components/blog/BlogCard";
import {
  buildArticleJsonLd,
  buildPostMetadata,
  getAllSlugs,
  getBlogBySlug,
  getRedirect,
  getRelatedBlogs,
} from "@/lib/blog";
import { SITE } from "@/lib/blog-config";

// New posts render on first request, then are cached until the CMS revalidates them.
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found | Falcon Technologies", robots: { index: false } };
  return buildPostMetadata(post, SITE);
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    const to = await getRedirect(slug);
    if (to) permanentRedirect(`/blog/${to}`);
    notFound();
  }

  const related = await getRelatedBlogs(post.slug, post.category, 3);
  const jsonLd = buildArticleJsonLd(post, SITE);

  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.h1}
        breadcrumb="Blog"
        image={post.image || "/assets/images/home/hero-slide-1.png"}
        imageAlt={post.imageAlt}
      />

      <section className="relative w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-neutral-200 pb-6 text-sm text-neutral-500 dark:border-white/10 dark:text-white/50">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} strokeWidth={1.5} />
              <time dateTime={post.publishedAt}>{post.displayDate}</time>
            </span>
            <span className="flex items-center gap-2">
              <UserRound size={15} strokeWidth={1.5} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} strokeWidth={1.5} />
              {post.readTime}
            </span>
          </div>

          {post.excerpt && (
            <p className="mt-8 text-lg leading-relaxed text-neutral-700 dark:text-white/75">{post.excerpt}</p>
          )}

          {/* Article HTML from the Blog CMS (sanitised on save) — styled by .blog-content in globals.css */}
          <article className="blog-content mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          {post.tagObjects.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-neutral-200 pt-8 dark:border-white/10">
              {post.tagObjects.map((tag) => (
                <span
                  key={tag.slug}
                  className="inline-flex h-8 items-center rounded-full border border-neutral-300 px-4 text-[13px] text-neutral-700 dark:border-white/15 dark:text-white/70"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <Link
            href="/blog"
            className="group mt-10 inline-flex items-center gap-2 border-b border-neutral-900 pb-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white dark:hover:text-brand-light"
          >
            <ArrowLeft size={16} strokeWidth={1.7} className="transition-transform group-hover:-translate-x-0.5" />
            All insights
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="w-full border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
            <h2 className="text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[38px]">
              Related insights
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
