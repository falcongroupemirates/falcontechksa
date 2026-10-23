"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

/**
 * Blog card shared by the home "Insights & Updates" section, the /blog
 * listing and the related-articles row. `post` comes from lib/blog.js.
 */
export default function BlogCard({ post, index = 0, headingLevel = "h3", priority = false }) {
  const Heading = headingLevel;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {post.image && (
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-neutral-900 backdrop-blur">
              {post.category}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={19} strokeWidth={1.7} />
          </div>
        </div>

        {/* Content */}
        <div className="pt-5">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-white/50">
            <CalendarDays size={14} strokeWidth={1.5} />
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>

          <Heading className="mt-3 text-xl font-medium leading-[1.2] tracking-[-0.02em] text-neutral-900 transition-colors duration-300 group-hover:text-brand dark:text-white dark:group-hover:text-brand-light">
            {post.title}
          </Heading>

          {post.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/50">{post.excerpt}</p>
          )}

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
            Read Article
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
