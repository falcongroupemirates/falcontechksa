"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpLeft, ClipboardCheck, Users2 } from "lucide-react";

const pathways = [
  {
    icon: Users2,
    title: "اختيار منتج",
    audience: "عميل عادي",
    description:
      "لست متأكدًا من الوثيقة التي تحتاجها؟ تصفّح المنتجات والخدمات أولًا — ستجد روابط نشرات البيانات والكتيّبات الخاصة بما تختاره في الصفحة نفسها.",
    cta: { label: "تصفّح الخدمات", href: "/ar/services" },
  },
  {
    icon: ClipboardCheck,
    title: "الوثائق الفنية ووثائق المشاريع",
    audience: "مهندس / استشاري / مقاول EPC",
    description:
      "راجع المخططات والمعايير وخطط الفحص والاختبار (ITP) وبيانات طريقة العمل وسجلات قدرات الخدمة أدناه، ثم قدّم طلب عرض سعر فني للحصول على الوثائق الخاصة بالمشروع أو الوثائق المضبوطة.",
    cta: { label: "تقديم طلب عرض سعر فني", href: "/ar/request-a-quote" },
  },
];

export default function AudiencePathways() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-8 xl:px-0 lg:py-24">
        {pathways.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-sm border border-neutral-200 p-7 dark:border-white/10 sm:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <Icon size={22} strokeWidth={1.4} className="text-brand dark:text-brand-light" />
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-white/50">
                {p.audience}
              </span>
              <h3 className="mt-2 text-xl font-normal tracking-[-0.02em] text-neutral-900 dark:text-white sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                {p.description}
              </p>
              <Link
                href={p.cta.href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-brand-light transition-colors hover:text-brand-dark"
              >
                {p.cta.label}
                <ArrowUpLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
