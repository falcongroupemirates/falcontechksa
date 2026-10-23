import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogPagination from "@/components/blog/BlogPagination";
import Link from "next/link";
import { getCategories, getFilteredPosts } from "@/lib/blog";

const POSTS_PER_PAGE = 9;
const TITLE = "Insights & Updates | Falcon Technologies – Tanks, Insulation & Industrial Solutions";
const DESCRIPTION =
  "Engineering insights, project knowledge and practical guidance from Falcon Technologies on storage tanks, fabrication, thermal insulation, restoration, lining and industrial services in Saudi Arabia.";

function readParams(sp) {
  const one = (v) => (Array.isArray(v) ? v[0] : v) || "";
  return {
    page: Math.max(1, parseInt(one(sp.page), 10) || 1),
    category: one(sp.category),
    q: one(sp.q).trim(),
  };
}

export async function generateMetadata({ searchParams }) {
  const { page, category, q } = readParams(await searchParams);
  const filtered = Boolean(category || q);
  return {
    title: page > 1 ? `${TITLE} – Page ${page}` : TITLE,
    description: DESCRIPTION,
    alternates: { canonical: page > 1 && !filtered ? `/blog?page=${page}` : "/blog" },
    // Search / filter result pages shouldn't compete with the main listing
    robots: filtered ? { index: false, follow: true } : undefined,
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/blog", type: "website", siteName: "Falcon Technologies" },
  };
}

export default async function BlogPage({ searchParams }) {
  const params = readParams(await searchParams);
  const [{ posts, page, totalPages, total }, categories] = await Promise.all([
    getFilteredPosts({ ...params, perPage: POSTS_PER_PAGE }),
    getCategories(),
  ]);

  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Insights & Updates"
        title="Knowledge That Moves Industry Forward"
        description="Engineering insights, project knowledge and practical guidance from our team across storage, fabrication, insulation, restoration and industrial services."
        breadcrumb="Blog"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="relative w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
          <BlogFilters categories={categories} activeCategory={params.category} q={params.q} />

          {(params.q || params.category) && (
            <p className="mt-6 text-sm text-neutral-500 dark:text-white/50">
              {total} article{total === 1 ? "" : "s"}
              {params.q ? ` for “${params.q}”` : ""} ·{" "}
              <Link href="/blog" className="font-medium text-neutral-900 underline-offset-4 hover:text-brand hover:underline dark:text-white dark:hover:text-brand-light">
                Clear filters
              </Link>
            </p>
          )}

          {posts.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} headingLevel="h2" priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="mt-12 border border-neutral-200 px-6 py-16 text-center dark:border-white/10">
              <h2 className="text-2xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
                {params.q || params.category ? "No articles found" : "Articles are on the way"}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500 dark:text-white/50">
                {params.q || params.category
                  ? "Try another search term or browse all insights."
                  : "Our engineering team is preparing the first insights. Check back soon."}
              </p>
              {(params.q || params.category) && (
                <Link
                  href="/blog"
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-brand px-6 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  View all insights
                </Link>
              )}
            </div>
          )}

          <BlogPagination page={page} totalPages={totalPages} filters={params} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
