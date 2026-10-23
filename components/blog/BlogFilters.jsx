// Server component: category chips + search as plain links / GET form (no client JS).
import Link from "next/link";
import { Search, X } from "lucide-react";

export default function BlogFilters({ categories = [], activeCategory = "", q = "" }) {
  const chip = (active) =>
    `inline-flex h-9 items-center rounded-full border px-4 text-[13px] font-medium transition-colors ${
      active
        ? "border-brand bg-brand text-white"
        : "border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 dark:border-white/15 dark:text-white/70 dark:hover:border-white dark:hover:text-white"
    }`;

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {categories.length > 1 ? (
        <nav aria-label="Blog categories" className="flex flex-wrap gap-2">
          <Link href="/blog" className={chip(!activeCategory && !q)} aria-current={!activeCategory && !q ? "page" : undefined}>
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/blog?category=${encodeURIComponent(c.slug)}`}
              className={chip(activeCategory === c.slug)}
              aria-current={activeCategory === c.slug ? "page" : undefined}
            >
              {c.name}
              <span className="ml-1.5 opacity-60">{c.count}</span>
            </Link>
          ))}
        </nav>
      ) : (
        <span />
      )}

      <form key={q} action="/blog" method="get" role="search" className="relative w-full lg:w-80">
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <input
          id="blog-search"
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search insights…"
          className="h-11 w-full rounded-full border border-neutral-300 bg-transparent pl-5 pr-12 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 dark:border-white/15 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
        >
          <Search size={16} strokeWidth={1.8} />
        </button>
      </form>

      {(q || activeCategory) && (
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-brand dark:text-white/50 dark:hover:text-brand-light lg:hidden"
        >
          <X size={14} /> Clear filters
        </Link>
      )}
    </div>
  );
}
