"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ScanLine,
  Building2,
  Boxes,
  Layers3,
  Cog,
  ArrowUpLeft,
} from "lucide-react";

const capabilities = [
  {
    slug: "3d-laser-scanning",
    icon: ScanLine,
    label: "المسح الليزري ثلاثي الأبعاد",
    line: "ملايين النقاط المقاسة في كل موضع — تسجيل المساحة بالكامل، لا مجرد الأبعاد التي تذكّر أحدهم أخذها.",
    points: [
      "تخطيط مسح بتغطية كاملة",
      "سحابة نقاط مسجّلة",
      "التقاط دون تدخّل في موقع قيد التشغيل",
      "تسليم بصيغ RCP وE57 وDWG",
    ],
    image: "/assets/images/services/3d-laser-scanning.jpg",
  },
  {
    slug: "as-built-survey",
    icon: Building2,
    label: "مسح الوضع القائم (As-Built)",
    line: "مساقط وقطاعات وواجهات للمباني والمنشآت كما هي اليوم — بما في ذلك كل تعديل لم يُوثَّق.",
    points: [
      "مجموعة مخططات ثنائية الأبعاد منسّقة",
      "توثيق التعديلات الميدانية",
      "معيار CAD وإطار العنوان الخاص بكم",
      "DWG، DXF، PDF",
    ],
    image: "/assets/images/services/as-built-survey.jpg",
  },
  {
    slug: "scan-to-bim",
    icon: Boxes,
    label: "التحويل من المسح إلى BIM",
    line: "تحويل سحابة النقاط إلى نموذج بارامتري ذكي بمستوى LOD يُتّفق عليه لكل عنصر على حدة، لا بمستوى موحّد للجميع.",
    points: [
      "مستوى LOD محدد لكل تخصص",
      "عناصر بارامترية حقيقية",
      "التحقق من الانحرافات مقارنةً بسحابة النقاط",
      "RVT، IFC، NWC",
    ],
    image: "/assets/images/services/scan-to-bim.jpg",
  },
  {
    slug: "bim-modelling",
    icon: Layers3,
    label: "نمذجة BIM",
    line: "نماذج تُبنى من المخططات أو نية التصميم أو بيانات الموردين أو بيانات المسح — ثم تُنسَّق لتظهر التعارضات في النموذج لا في الموقع.",
    points: [
      "معماري، إنشائي، MEP",
      "كشف التعارضات في النموذج المدمج",
      "وفقًا لخطة تنفيذ BIM (BEP) الخاصة بك",
      "جداول ومخططات مستخرجة من النموذج",
    ],
    image: "/assets/images/services/bim-modelling.jpg",
  },
  {
    slug: "reverse-engineering",
    icon: Cog,
    label: "الهندسة العكسية",
    line: "مسح المكونات المتقادمة أو غير الموثّقة وإعادة بنائها بصيغة CAD قابلة للتعديل — أسرع طريق للوصول إلى بديل قابل للتصنيع.",
    points: [
      "استعادة قطع الغيار المتقادمة",
      "مجسم بارامتري لا شبكة مضلعات",
      "هندسة جاهزة للتعديل",
      "STEP، IGES، STL، DWG",
    ],
    image: "/assets/images/services/reverse-engineering-scanning.jpg",
  },
];

export default function SurveyScanningSection() {
  const [active, setActive] = useState(capabilities[0].slug);

  const current =
    capabilities.find((c) => c.slug === active) ?? capabilities[0];

  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Blueprint ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 75% 10%, black 20%, transparent 78%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -start-32 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex h-7.5 items-center rounded-full border border-white/20 px-4.25"
          >
            <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-white">
              خدمات المساحة
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-5 max-w-2xl text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:text-[34px]"
          >
            خدمات المساحة والمسح ثلاثي الأبعاد
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-white/60"
          >
            تفشل أعمال التحديث بسبب الأبعاد الخاطئة. لذلك نمسح المحطات والمباني والمكونات القائمة، ثم نسلّم مخططات الوضع القائم أو نماذج BIM أو مجسمات CAD من نفس الواقع الملتقط.
          </motion.p>

          <Link
            href="/ar/services/survey-scanning"
            className="mt-6 inline-flex items-center gap-1.5 border-b border-brand pb-0.5 text-sm font-semibold text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            استكشف خدمات المساحة
            <ArrowUpLeft size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Capability list */}
          <ul className="border-t border-white/12">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isActive = cap.slug === active;

              return (
                <li key={cap.slug} className="border-b border-white/12">
                  <button
                    onMouseEnter={() => setActive(cap.slug)}
                    onFocus={() => setActive(cap.slug)}
                    onClick={() => setActive(cap.slug)}
                    aria-pressed={isActive}
                    className="flex w-full items-center gap-5 py-5 text-start"
                  >
                    <span
                      className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${
                        isActive ? "text-brand" : "text-white/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className={`shrink-0 transition-colors ${
                        isActive ? "text-brand" : "text-white/40"
                      }`}
                    />

                    <span
                      className={`flex-1 text-[17px] leading-snug transition-colors sm:text-[19px] ${
                        isActive ? "text-white" : "text-white/55"
                      }`}
                    >
                      {cap.label}
                    </span>

                    <ArrowUpLeft
                      size={15}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-brand opacity-100"
                          : "-translate-x-1 text-white/30 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-sm border border-white/12 bg-white/3"
            >
              <Link
                href={`/ar/services/survey-scanning/${current.slug}`}
                aria-label={`${current.label} — عرض تفاصيل الخدمة`}
                className="group relative block aspect-16/10 bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image
                  src={current.image}
                  alt={`${current.label} — فالكون تكنولوجيز السعودية`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent" /> */}
                <span className="absolute bottom-4 end-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                  <ArrowUpLeft size={18} aria-hidden="true" />
                </span>
              </Link>

              {/* <div className="p-7 sm:p-8">
                <p className="text-sm leading-relaxed text-white/60">
                  {current.line}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm leading-snug text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/ar/services/survey-scanning/${current.slug}`}
                  className="mt-7 inline-block border-b border-brand pb-0.5 text-sm font-semibold text-brand transition-colors hover:border-white hover:text-white"
                >
                  {current.label} in detail
                </Link>
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
