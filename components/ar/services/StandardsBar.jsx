"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { motion } from "framer-motion";

const standards = [
  "ASTM D3299",
  "ASTM D4097",
  "ASTM D1998",
  "AS/NZS 4766",
  "معايير ISO المعمول بها",
  "متطلبات SASO",
];

export default function StandardsBar() {
  return (
    <section className="w-full overflow-hidden bg-neutral-900 py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-8 xl:px-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40"
        >
          مصمَّمة وفقًا للمعايير والمواصفات المعمول بها
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {standards.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-sm font-medium tracking-wide text-white/70"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/35">
          تُجرى الاختبارات والفحوصات بما يتناسب مع المنتج والمعدات والمعيار الحاكم ومتطلبات الشركة المصنّعة ومواصفات المشروع. ولا نعرض إلا الشهادات وتفويضات الخدمة التي تحملها فالكون فعليًا.
        </p>
      </div>
    </section>
  );
}
