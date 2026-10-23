"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

// `posts` = latest articles from the Blog CMS, fetched on the server in app/page.js
export default function BlogSection({ posts = [] }) {
  // Hidden until the first article is published
  if (posts.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-8 items-center rounded-full border border-neutral-300 px-5 dark:border-white/15"
            >
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                Insights & Updates
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-5 text-[38px] font-normal leading-[1.08] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[46px]"
            >
              Knowledge That Moves
              <span className="block">Industry Forward</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55 sm:text-base"
            >
              Explore engineering insights, project knowledge and practical
              guidance from our team across storage, fabrication, insulation,
              restoration and industrial services.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border-b border-neutral-900 pb-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white"
            >
              View All Insights
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-14">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
