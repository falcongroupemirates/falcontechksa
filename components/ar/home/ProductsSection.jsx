"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "خزانات FRP / GRP",
    href: "/ar/services/tank-solutions/frp-grp-tanks",
    image: "/assets/images/home/frp-grp-tanks.webp",
    alt: "خزان ألياف زجاجية FRP GRP",
  },
  {
    id: 2,
    title: "خزانات البولي إيثيلين",
    href: "/ar/services/tank-solutions/polyethylene-tanks",
    image: "/assets/images/home/polyethylene-tanks.webp",
    alt: "خزان بولي إيثيلين LLDPE HDPE",
  },
  {
    id: 3,
    title: "الخزانات الأرضية",
    href: "/ar/services/tank-solutions/underground-tanks",
    image: "/assets/images/home/underground-tanks.webp",
    alt: "خزان تخزين أرضي",
  },
  {
    id: 4,
    title: "أنظمة الخزانات الفولاذية",
    href: "/ar/services/tank-solutions/steel-tank-systems",
    image: "/assets/images/home/steel-tank-systems.webp",
    alt: "نظام خزان فولاذي مصنّع",
  },
  {
    id: 5,
    title: "خزانات المواد الكيميائية",
    href: "/ar/services/tank-solutions/chemical-tanks",
    image: "/assets/images/home/chemical-tanks.webp",
    alt: "خزان تخزين مواد كيميائية",
  },
  {
    id: 6,
    title: "خزانات الديزل والوقود",
    href: "/ar/services/tank-solutions/diesel-fuel-tanks",
    image: "/assets/images/home/diesel-fuel-tanks.webp",
    alt: "خزان تخزين الديزل والوقود",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductsSection() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-23">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
              مجموعة منتجاتنا
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              خزانات تخزين للمياه والوقود والمواد الكيميائية، مصمّمة هندسيًا حسب التطبيق بدلًا من اختيارها من جدول مقاسات ثابت.
            </p>
          </div>
          <Link
            href="/ar/services/tank-solutions"
            className="inline-block border-b border-brand text-sm font-semibold text-brand dark:text-brand-light transition-colors hover:border-brand-dark hover:text-brand-dark"
          >
            عرض كل حلول الخزانات
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={grid}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="relative aspect-square overflow-hidden bg-mist dark:bg-neutral-800">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-5 py-4 sm:px-6 sm:py-5">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white sm:text-base">
                    {p.title}
                  </h3>
                </div>

                <span className="absolute bottom-0 start-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
