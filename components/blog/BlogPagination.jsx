// Server component: crawlable ?page= links that keep the active filters.
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function href(page, { category, q }) {
  const sp = new URLSearchParams();
  if (q) sp.set("q", q);
  if (category) sp.set("category", category);
  if (page > 1) sp.set("page", String(page));
  const qs = sp.toString();
  return `/blog${qs ? `?${qs}` : ""}`;
}

export default function BlogPagination({ page, totalPages, filters = {} }) {
  if (totalPages <= 1) return null;

  const base =
    "flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors";
  const idle =
    "border-neutral-300 text-neutral-800 hover:border-neutral-900 dark:border-white/15 dark:text-white/80 dark:hover:border-white";
  const off = "pointer-events-none border-neutral-200 text-neutral-300 dark:border-white/10 dark:text-white/20";

  return (
    <nav aria-label="Blog pagination" className="mt-16 flex flex-wrap items-center justify-center gap-2">
      <Link
        href={href(page - 1, filters)}
        aria-label="Previous page"
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : undefined}
        className={`${base} ${page === 1 ? off : idle}`}
      >
        <ArrowLeft size={16} strokeWidth={1.7} />
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          href={href(n, filters)}
          aria-current={n === page ? "page" : undefined}
          className={`${base} ${n === page ? "border-brand bg-brand text-white" : idle}`}
        >
          {n}
        </Link>
      ))}

      <Link
        href={href(page + 1, filters)}
        aria-label="Next page"
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : undefined}
        className={`${base} ${page === totalPages ? off : idle}`}
      >
        <ArrowRight size={16} strokeWidth={1.7} />
      </Link>
    </nav>
  );
}
