// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpLeft,
  Factory,
  Flame,
  Plus,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/survey-scanning",
    languages: { en: "/services/survey-scanning", ar: "/ar/services/survey-scanning", "x-default": "/services/survey-scanning" },
  },
  title: "خدمات المساحة والمسح ثلاثي الأبعاد في المملكة العربية السعودية",
  description:
    "المسح الليزري ثلاثي الأبعاد، ومسح الوضع القائم، والتحويل من المسح إلى BIM، ونمذجة BIM، والهندسة العكسية في المملكة العربية السعودية — التقاط المحطات والمباني والمكونات القائمة مرة واحدة وتسليمها كمخططات أو نماذج BIM أو CAD.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// Hero photo. If a service tile below uses the same file, that tile loads
// eagerly (otherwise Next flags the shared file as a lazy LCP image).
const heroImage = "/assets/images/services/survey-scanning.png";

// First item is the large feature tile.
const ranges = [
  {
    name: "المسح الليزري ثلاثي الأبعاد",
    href: "/ar/services/survey-scanning/3d-laser-scanning",
    image: "/assets/images/services/3d-laser-scanning.jpg",
    alt: "ماسح ليزري ثلاثي الأبعاد يلتقط محطة صناعية في المملكة العربية السعودية",
    meta: "الالتقاط",
    desc: "ملايين النقاط المقاسة في كل موضع — تسجيل المساحة بالكامل، لا مجرد الأبعاد التي تذكّر أحدهم أخذها.",
  },
  {
    name: "مسح الوضع القائم (As-Built)",
    href: "/ar/services/survey-scanning/as-built-survey",
    image: "/assets/images/services/as-built-survey.jpg",
    alt: "مخططات مسح الوضع القائم المُنتجة من مسح ثلاثي الأبعاد",
    meta: "مخططات ثنائية الأبعاد",
    desc: "مساقط أفقية وقطاعات وواجهات لما هو موجود فعليًا — بما في ذلك التعديلات التي لم يوثقها أحد.",
  },
  {
    name: "التحويل من المسح إلى BIM",
    href: "/ar/services/survey-scanning/scan-to-bim",
    image: "/assets/images/services/scan-to-bim.jpg",
    alt: "سحابة نقاط محوّلة إلى نموذج BIM بارامتري",
    meta: "نموذج BIM من المسح",
    desc: "سحابة نقاط محوّلة إلى نموذج بارامتري، بمستوى تفصيل متفق عليه لكل عنصر.",
  },
  {
    name: "نمذجة BIM",
    href: "/ar/services/survey-scanning/bim-modelling",
    image: "/assets/images/services/bim-modelling.jpg",
    alt: "نموذج BIM منسّق يشمل التخصصات المعمارية والإنشائية وMEP",
    meta: "نماذج منسّقة",
    desc: "نماذج من المخططات أو مفهوم التصميم أو بيانات الموردين أو المسوحات — منسّقة لتظهر التعارضات في النموذج لا في الموقع.",
  },
  {
    name: "الهندسة العكسية",
    href: "/ar/services/survey-scanning/reverse-engineering",
    image: "/assets/images/services/reverse-engineering-scanning.jpg",
    alt: "مكوّن صناعي ممسوح أُعيد بناؤه كنموذج CAD قابل للتعديل",
    meta: "CAD قابل للتعديل",
    desc: "مسح المكونات المتقادمة أو غير الموثقة وإعادة بنائها كنماذج CAD قابلة للتعديل.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "مخططات الوضع القائم",
    href: "/ar/services/survey-scanning/as-built-survey",
  },
  {
    name: "نموذج BIM",
    href: "/ar/services/survey-scanning/scan-to-bim",
  },
  {
    name: "مجسمات CAD",
    href: "/ar/services/survey-scanning/reverse-engineering",
  },
];

const comparison = [
  [
    "الأنسب لـ",
    "التصاريح وسجلات الصيانة وأعمال التصميم ثنائية الأبعاد",
    "التصميم والتنسيق وإدارة المرافق",
    "قطع الغيار والتعديلات والتصنيع",
  ],
  [
    "ما تحصل عليه",
    "مجموعة مخططات ثنائية الأبعاد منسّقة وفق معيار CAD الخاص بكم",
    "نموذج BIM بارامتري مع فحص الانحراف مقابل السحابة",
    "CAD بارامتري قابل للتعديل ومخططات وتقرير انحراف",
  ],
  ["الصيغ المعتادة", "DWG، DXF، PDF", "RVT، IFC، NWC", "STEP، IGES، STL، DWG"],
  ["الخدمة", "مسح الوضع القائم (As-Built)", "التحويل من المسح إلى BIM أو نمذجة BIM", "الهندسة العكسية"],
];

const process = [
  {
    title: "النطاق وخطة المسح",
    desc: "الاتفاق على المنطقة والغرض والدقة والمخرجات قبل التوجه إلى الموقع.",
  },
  {
    title: "الالتقاط في الموقع",
    desc: "تنفيذ المسح وفق تصاريحكم، بأقل قدر من التعطيل للعمليات.",
  },
  {
    title: "التسجيل وضمان الجودة",
    desc: "تسجيل المواضع في سحابة نقاط واحدة والتحقق منها وفق التفاوت المتفق عليه.",
  },
  {
    title: "الرسم أو النمذجة",
    desc: "مخططات أو نماذج BIM أو CAD تُبنى مباشرةً من البيانات الهندسية المقاسة.",
  },
  {
    title: "التسليم والدعم",
    desc: "إصدار الملفات بالصيغ المتفق عليها، مع الاحتفاظ بالسحابة للاستفسارات اللاحقة.",
  },
];

const industries = [
  "محطات العمليات والأنابيب",
  "الخزانات والأوعية والمعدات",
  "المباني والمنشآت",
  "تعديلات المحطات وتحديثها",
  "تخطيط فترات الإيقاف والصيانة الشاملة",
  "قطع الغيار المتقادمة",
];

const tags = ["E57", "RCP / RCS", "DWG", "DXF", "PDF", "RVT", "IFC", "NWC / NWD", "STEP", "IGES", "STL"];

const related = [
  { label: "حلول الخزانات", icon: Factory, href: "/ar/services/tank-solutions" },
  { label: "العزل الحراري", icon: Flame, href: "/ar/services/thermal-insulation" },
  { label: "ترميم وتبطين الخزانات", icon: ShieldCheck, href: "/ar/services/tank-restoration-lining" },
  { label: "الخدمات الصناعية", icon: Wrench, href: "/ar/services/industrial-services" },
];

const faqs = [
  {
    q: "ما خدمة المساحة التي أحتاجها؟",
    a: "أخبرونا بالغرض من المعلومات. إذا كنتم بحاجة إلى مخططات، فمسح الوضع القائم؛ وإذا احتجتم نموذجًا للتصميم أو التنسيق، فالتحويل من المسح إلى BIM أو نمذجة BIM؛ وإذا احتجتم قطعة بديلة، فالهندسة العكسية. وجميعها تبدأ بمسح ليزري ثلاثي الأبعاد للأصل القائم.",
  },
  {
    q: "هل يمكن استخدام مسح واحد لأكثر من مُخرَج؟",
    a: "نعم. يتم الاحتفاظ بسحابة النقاط المسجّلة، لذا يمكن إنتاج المخططات أو نموذج BIM أو CAD من الالتقاط نفسه — غالبًا دون العودة إلى الموقع، بشرط أن يكون المسح الأصلي قد غطى المنطقة.",
  },
  {
    q: "هل يمكنكم المسح أثناء تشغيل المنشأة؟",
    a: "نعم، في الغالب. المسح الليزري لا يتطلب التلامس، لذا يمكن التقاط معظم المناطق أثناء تشغيل الموقع، وفقًا لتصاريحكم وقواعد السلامة وإمكانية الوصول.",
  },
  {
    q: "ما مدى دقة النتائج؟",
    a: "يتم الاتفاق على الدقة التي يحتاجها المشروع في خطة المسح، وتأكيدها في تقرير التسجيل، وفي حالة النماذج عبر فحص الانحراف مقابل السحابة. فنحن لا نعطي رقمًا واحدًا لكل المواقع.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "المساحة والمسح ثلاثي الأبعاد",
      name: "خدمات المساحة والمسح ثلاثي الأبعاد",
      description:
        "المسح الليزري ثلاثي الأبعاد، ومسح الوضع القائم، والتحويل من المسح إلى BIM، ونمذجة BIM، والهندسة العكسية.",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات المساحة",
        itemListElement: ranges.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: r.name, description: r.desc },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function SurveyScanningPage() {
  const [feature, ...rest] = ranges;

  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="الخدمات"
        title="خدمات المساحة والمسح ثلاثي الأبعاد"
        description="تفشل أعمال التحديث بسبب الأبعاد الخاطئة. لذلك نمسح المحطات والمباني والمكونات القائمة، ثم نسلّم مخططات الوضع القائم أو نماذج BIM أو مجسمات CAD من نفس الواقع الملتقط."
        breadcrumb="المساحة والمسح ثلاثي الأبعاد"
        image={heroImage}
        imageAlt="المساحة والمسح الليزري ثلاثي الأبعاد لمنشأة صناعية قائمة"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              التقاط واحد، وتسليم كمخططات أو BIM أو CAD
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              يبدأ كل مشروع بمسح ليزري ثلاثي الأبعاد لما هو موجود فعليًا. ومن سحابة النقاط المسجّلة الواحدة ننتج المُخرَج الذي يحتاجه العمل — ويمكن إضافة مُخرَج آخر لاحقًا دون العودة إلى الموقع، بشرط أن يكون المسح قد غطى المنطقة.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature tile */}
            <Link
              href={feature.href}
              className="group relative flex min-h-96 flex-col justify-end overflow-hidden rounded-sm bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:col-span-2 lg:row-span-2"
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative p-6 sm:p-10">
                <p className="text-sm text-white/70">{feature.meta}</p>
                <h3 className="mt-2 text-3xl font-normal tracking-tight text-white sm:text-4xl">
                  {feature.name}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80">
                  {feature.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 border-b border-white/60 pb-0.5 text-sm font-semibold text-white transition-colors group-hover:border-brand group-hover:text-white">
                  عرض {feature.name}
                  <ArrowUpLeft
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </Link>

            {/* Other services */}
            {rest.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-sm bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  loading={r.image === heroImage ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-transparent" />
                <div className="relative p-6">
                  <p className="text-sm text-white/70">{r.meta}</p>
                  <h3 className="mt-1 flex items-center justify-between gap-3 text-xl font-normal tracking-tight text-white">
                    {r.name}
                    <ArrowUpLeft
                      size={18}
                      className="shrink-0 text-white/70 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-white"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {r.desc}
                  </p>
                </div>
              </Link>
            ))}

            {/* Help tile — fills the last row */}
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  لست متأكدًا من المُخرَج الذي تحتاجه؟
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  أخبرنا بالغرض من المعلومات والحجم التقريبي للمنطقة، وسنحدد نطاق المسح والمُخرَج معًا.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/ar/request-a-quote"
                  className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  اطلب عرض سعر
                </Link>
                <Link
                  href="/ar/contact-us"
                  className="border-b border-ink/30 pb-0.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-white"
                >
                  تحدث إلى مهندس
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            مخططات أم نموذج BIM أم CAD؟
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            الثلاثة تأتي من المسح نفسه. اختر حسب الغرض من المعلومات؛ ويتم الاتفاق على الصيغ النهائية ضمن النطاق.
          </p>

          {/* Phones: one stacked block per option */}
          <div className="mt-10 space-y-8 md:hidden">
            {compareColumns.map((m, mi) => (
              <div key={m.name} className="border-t-2 border-ink pt-4 dark:border-white/40">
                {m.href ? (
                  <Link
                    href={m.href}
                    className="inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 dark:text-white"
                  >
                    {m.name}
                    <ArrowUpLeft size={16} className="text-neutral-400" />
                  </Link>
                ) : (
                  <p className="text-xl font-normal tracking-tight text-neutral-900 dark:text-white">
                    {m.name}
                  </p>
                )}
                <dl className="mt-3 divide-y divide-neutral-200 dark:divide-white/10">
                  {comparison.map(([label, ...cells]) => (
                    <div key={label} className="py-3">
                      <dt className="text-sm font-semibold text-neutral-800 dark:text-white/85">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                        {cells[mi]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Tablet and up: side-by-side table */}
          <div className="mt-10 hidden md:block">
            <table className="w-full border-collapse text-start">
              <thead>
                <tr className="border-b-2 border-ink dark:border-white/40">
                  <th scope="col" className="w-1/4 py-4 pe-6 text-sm font-medium text-steel dark:text-white/50">
                    <span className="sr-only">السؤال</span>
                  </th>
                  {compareColumns.map((m) => (
                    <th key={m.name} scope="col" className="py-4 pe-6 align-bottom">
                      {m.href ? (
                        <Link
                          href={m.href}
                          className="group inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 transition-colors hover:text-brand dark:text-white"
                        >
                          {m.name}
                          <ArrowUpLeft
                            size={16}
                            className="text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-brand"
                          />
                        </Link>
                      ) : (
                        <span className="text-xl font-normal tracking-tight text-neutral-900 dark:text-white">
                          {m.name}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-neutral-200 dark:border-white/10">
                    <th scope="row" className="py-5 pe-6 align-top text-sm font-semibold text-neutral-800 dark:text-white/85">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={i} className="py-5 pe-6 align-top text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ PROCESS (a real sequence, so numbered) ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            من الموقع إلى المُخرَج
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ INDUSTRIES + STANDARDS ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <div>
            <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
              مجالات الاستخدام
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              {industries.map((a) => (
                <li key={a} className="bg-white px-5 py-4 text-sm font-medium text-neutral-800 dark:bg-neutral-950 dark:text-white/75">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
              صيغ الملفات المعتادة
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              يتم الاتفاق على الصيغ النهائية ضمن النطاق بما يناسب برامجكم ومعاييركم.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            الأسئلة الشائعة
          </h2>
          <div className="border-t border-neutral-200 dark:border-white/10 lg:col-span-2">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-neutral-200 py-5 dark:border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
            خدمات ذات صلة
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between gap-3 border border-neutral-200 bg-white p-6 transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} strokeWidth={1.4} className="text-steel dark:text-white/40" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-white/80">
                      {r.label}
                    </span>
                  </span>
                  <ArrowUpLeft
                    size={16}
                    className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-brand dark:text-white/25"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
