"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "ضبط المواد",
    desc: "فحص المواد الخام عند الاستلام قبل وضع أي طبقة.",
  },
  {
    title: "بناء الطبقات والسماكة",
    desc: "ضبط التدعيم والسماكة في كل مرحلة من مراحل التصنيع.",
  },
  {
    title: "الفحص أثناء التنفيذ",
    desc: "فحص مستمر مع تقدّم العمل، وليس فقط عند التسليم النهائي.",
  },
  {
    title: "إمكانية التتبّع",
    desc: "سجلات دفعات المواد والعمليات محفوظة لكل وحدة منتَجة.",
  },
];

export default function ManufacturingSection() {
  return (
    <section className="w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-17.5 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:px-0 lg:py-23">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 dark:border-white/10"
        >
          <Image
            src="/assets/images/home/built.webp"
            alt="منشأة التصنيع لدى فالكون تكنولوجيز"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 start-0 end-0 flex items-center justify-between bg-ink/90 px-6 py-4 backdrop-blur-sm">
            <span className="text-sm text-white/70">
              يُفحص قبل الشحن
            </span>
            <span className="text-lg font-semibold text-white">100%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-md text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
            تصنيع تحت السيطرة، لا مجرد تصنيع
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            يمر كل خزان بهندسة تصنيع موثّقة — من استلام المواد حتى الفحص النهائي — قبل وصوله إلى الموقع.
          </p>

          <ul className="mt-8 space-y-5">
            {capabilities.map((c) => (
              <li key={c.title} className="flex gap-3">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-brand"
                />
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {c.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
