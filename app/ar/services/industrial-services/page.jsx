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
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/industrial-services",
    languages: { en: "/services/industrial-services", ar: "/ar/services/industrial-services", "x-default": "/services/industrial-services" },
  },
  title: "الخدمات الصناعية وتركيب المبردات في المملكة العربية السعودية",
  description:
    "تقدم فالكون تكنولوجيز خدمات فحص الخزانات والطلاء الصناعي والصيانة الميكانيكية ودعم المعدات وتركيب وصيانة المبردات في جميع أنحاء المملكة العربية السعودية، بما في ذلك الدمام.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// Hero photo. If a service tile below uses the same file, that tile loads
// eagerly (otherwise Next flags the shared file as a lazy LCP image).
const heroImage = "/assets/images/services/tank-inspection.png";

// First item is the large feature tile.
const ranges = [
  {
    name: "تركيب وصيانة المبردات",
    href: "/ar/services/industrial-services/chiller-installation-maintenance",
    image: "/assets/images/services/chiller-installation.png",
    alt: "مبرد صناعي أثناء تركيبه وتشغيله التجريبي في الموقع",
    meta: "3 أنواع من الخدمات",
    desc: "التركيب الجديد والتشغيل التجريبي، والصيانة الوقائية، وتشخيص الأعطال والإصلاح — مع تقرير خدمة بعد كل زيارة.",
  },
  {
    name: "فحص الخزانات",
    href: "/ar/services/industrial-services/tank-inspection",
    image: "/assets/images/services/tank-inspection.png",
    alt: "فني يفحص خزان تخزين صناعي",
    meta: "الفحص البصري والأبعاد والسماكة",
    desc: "فحوصات للحالة تبيّن ما يحتاجه الخزان قبل الإصلاح أو التبطين أو تغيير الاستخدام.",
  },
  {
    name: "الطلاء الصناعي",
    href: "/ar/services/industrial-services/industrial-coating",
    image: "/assets/images/services/industrial-coating.png",
    alt: "تطبيق طلاء صناعي واقٍ",
    meta: "الطلاء والعزل المائي",
    desc: "طلاءات واقية للخزانات والهياكل الفولاذية والمصانع.",
  },
  {
    name: "الصيانة الميكانيكية",
    href: "/ar/services/industrial-services/mechanical-maintenance",
    image: "/assets/images/services/mechanical-maintenance.png",
    alt: "صيانة ميكانيكية لمعدات صناعية",
    meta: "مرافق الموقع والمعدات",
    desc: "صيانة ميكانيكية تحافظ على تشغيل مرافق الموقع والمعدات.",
  },
  {
    name: "دعم المعدات",
    href: "/ar/services/industrial-services/equipment-support",
    image: "/assets/images/services/equipment-support.png",
    alt: "مهندس يدعم معدات صناعية في الموقع",
    meta: "معدات المصانع",
    desc: "دعم معدات المصانع، من التركيب إلى الخدمة المستمرة.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "فحص الخزانات",
    href: "/ar/services/industrial-services/tank-inspection",
  },
  {
    name: "الطلاء والصيانة",
    href: "/ar/services/industrial-services/mechanical-maintenance",
  },
  {
    name: "خدمات المبردات",
    href: "/ar/services/industrial-services/chiller-installation-maintenance",
  },
];

const comparison = [
  [
    "اتصل بنا عندما",
    "تحتاج إلى معرفة حالة الخزان قبل الإصلاح أو التبطين أو تغيير الاستخدام",
    "تحتاج الهياكل الفولاذية أو الخزانات أو المعدات إلى حماية أو إبقاء في الخدمة",
    "تقوم بتركيب مبرد جديد، أو يحتاج مبرد قائم إلى خدمة أو إصلاح",
  ],
  [
    "ما نقوم به",
    "الفحص البصري وفحص الأبعاد والسماكة",
    "الطلاء الصناعي والعزل المائي والصيانة الميكانيكية ودعم المعدات",
    "التركيب والتشغيل التجريبي والصيانة الوقائية وتشخيص الأعطال",
  ],
  [
    "وفق",
    "الإجراءات المعتمدة ومواصفات المشروع",
    "بيانات طريقة العمل المعتمدة ومواصفات المشروع",
    "أدلة الخدمة وإجراءات الشركة المصنعة",
  ],
  [
    "ما تحصل عليه",
    "تقرير فحص",
    "تسليم موثق",
    "تقرير خدمة بعد كل زيارة",
  ],
];

const process = [
  {
    title: "مراجعة النطاق",
    desc: "تُراجع أولًا العلامة التجارية للمعدات وموديلها وسعتها وحالة تشغيلها وسجل خدمتها.",
  },
  {
    title: "خطة الخدمة",
    desc: "يُؤكد نطاق التركيب أو الصيانة أو الفحص وفق متطلبات الشركة المصنعة.",
  },
  {
    title: "التنفيذ",
    desc: "يُنفذ العمل ضمن النطاق المعتمد والمصرح به لفالكون.",
  },
  {
    title: "الفحص والاختبار",
    desc: "تُفحص معايير التشغيل والأداء مقارنة بالمتطلبات.",
  },
  {
    title: "التقرير والتسليم",
    desc: "يُصدر تقرير خدمة أو فحص، مع توفر دعم ما بعد الخدمة.",
  },
];

const industries = [
  "التصنيع",
  "المباني التجارية والصناعية",
  "النفط والغاز",
  "الطاقة والمرافق",
  "الإنشاءات والبنية التحتية",
  "الأغذية والمشروبات",
];

const tags = [
  "أدلة خدمة الشركة المصنعة",
  "إجراءات الخدمة المعتمدة",
  "مواصفات المشروع",
  "المتطلبات التنظيمية ذات الصلة",
];

const related = [
  { label: "حلول الخزانات", icon: Factory, href: "/ar/services/tank-solutions" },
  { label: "العزل الحراري", icon: Flame, href: "/ar/services/thermal-insulation" },
  { label: "ترميم وتبطين الخزانات", icon: ShieldCheck, href: "/ar/services/tank-restoration-lining" },
  { label: "المساحة والمسح ثلاثي الأبعاد", icon: ScanLine, href: "/ar/services/survey-scanning" },
];

const faqs = [
  {
    q: "هل تقدمون صيانة المبردات في الدمام والمنطقة الشرقية؟",
    a: "نعم — تقدم فالكون خدمات تركيب المبردات وتشغيلها التجريبي وصيانتها الوقائية في جميع أنحاء المنطقة الشرقية، بما في ذلك الدمام، ضمن نطاقنا المعتمد والمصرح به.",
  },
  {
    q: "ماذا تشمل زيارة الصيانة الوقائية؟",
    a: "تشمل الزيارة المعتادة فحص حالة التشغيل والمعايير الرئيسية، وفحص الزيت والفلاتر والمواد الاستهلاكية، وفحص التسربات، وتقرير خدمة موثق — ويختلف النطاق حسب موديل المبرد ومتطلبات الشركة المصنعة.",
  },
  {
    q: "هل يمكنكم فحص الخزانات دون إخراجها من الخدمة؟",
    a: "يمكن تنفيذ كثير من طرق الفحص — البصري وفحص الأبعاد والسماكة — بأقل قدر من التعطيل. وحيثما يلزم إيقاف الخزان، نخطط النطاق لتقليل فترة التوقف.",
  },
  {
    q: "هل تقومون بخدمة المعدات المصرح لكم بالعمل عليها فقط؟",
    a: "نعم — لا تعلن فالكون إلا عن الخدمات الصناعية وخدمات المبردات التي تمتلك التجهيزات الفنية والترخيص والتفويض لتنفيذها، ولا تنفذ سواها، وتعمل وفق إجراءات الشركة المصنعة حيثما ينطبق.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "الخدمات الصناعية",
      name: "الخدمات الصناعية",
      description:
        "فحص الخزانات، والطلاء الصناعي، والصيانة الميكانيكية، ودعم المعدات، وتركيب وصيانة المبردات.",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "الخدمات الصناعية",
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

export default function IndustrialServicesPage() {
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
        title="الخدمات الصناعية"
        description="الفحص والصيانة الميكانيكية وتركيب وصيانة المبردات، يقدمها فريق واحد مسؤول."
        breadcrumb="الخدمات الصناعية"
        image={heroImage}
        imageAlt="فحص خزان تخزين صناعي من قبل فريق موقع فالكون تكنولوجيز"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              خدمات الفحص والصيانة والمبردات من فريق موقع واحد
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              تراجع فالكون أولًا المعدات وحالتها وسجل خدمتها، ثم تخطط لأعمال الفحص أو الطلاء أو الصيانة أو المبردات ضمن نطاقها المعتمد والمصرح به — مع تقرير في نهاية كل عمل.
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
                  لست متأكدًا مما تحتاجه معداتك؟
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  أرسل لنا العلامة التجارية والموديل والمشكلة التي تلاحظها. نؤكد النطاق قبل أن يحضر أي شخص إلى الموقع.
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
            ما الخدمة التي تحتاجها؟
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            دليل سريع. نؤكد النطاق بعد مراجعة المعدات وسجل خدمتها.
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
            من مراجعة النطاق إلى التقرير
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand dark:text-brand-light">
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
              القطاعات التي ندعمها
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
              تُنفذ الأعمال وفق
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              لا تنفذ فالكون إلا الخدمات التي تمتلك التجهيزات الفنية والترخيص والتفويض لتنفيذها، وتعمل وفق إجراءات الشركة المصنعة حيثما ينطبق.
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
