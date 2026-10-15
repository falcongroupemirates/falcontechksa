// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpLeft,
  Factory,
  Plus,
  ScanLine,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import StandardsBar from "@/components/ar/services/StandardsBar";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/thermal-insulation",
    languages: { en: "/services/thermal-insulation", ar: "/ar/services/thermal-insulation", "x-default": "/services/thermal-insulation" },
  },
  title: "خدمات العزل الحراري وعزل الأيروجيل في المملكة العربية السعودية",
  description:
    "تطبق فالكون تكنولوجيز العزل الحراري وعزل الأيروجيل على الخزانات والأنابيب والمباني وغرف المعدات في جميع أنحاء المملكة العربية السعودية، للحد من فقدان الحرارة واكتساب الحرارة الشمسية في البيئات الصناعية الصعبة.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// Hero photo. If a service tile below uses the same file, that tile loads
// eagerly (otherwise Next flags the shared file as a lazy LCP image).
const heroImage = "/assets/images/services/industrial-insulation.png";

// First item is the large feature tile.
const ranges = [
  {
    name: "عزل خزانات التخزين",
    href: "/ar/services/thermal-insulation/storage-tank-insulation",
    image: "/assets/images/services/storage-tank-insulation.png",
    alt: "عزل وكسوة عزل مطبقة على خزان تخزين صناعي",
    meta: "الخزانات الفولاذية وخزانات FRP/GRP",
    desc: "يقلل اكتساب الحرارة الشمسية وفقدان الحرارة في خزانات العمليات والمواد الكيميائية والوقود والمياه — بما في ذلك الخزانات العاملة حاليًا.",
  },
  {
    name: "عزل الأنابيب والمعدات",
    href: "/ar/services/thermal-insulation/pipe-equipment-insulation",
    image: "/assets/images/services/pipe-equipment-insulation.png",
    alt: "أنابيب ومعدات عمليات معزولة",
    meta: "الأنابيب والمجاري الهوائية والأوعية",
    desc: "خطوط العمليات الساخنة والباردة والمجاري الهوائية والصمامات والأوعية في جميع أنحاء الموقع.",
  },
  {
    name: "عزل المباني والأسطح",
    href: "/ar/services/thermal-insulation/building-roof-insulation",
    image: "/assets/images/services/building-roof-insulation.png",
    alt: "عزل أسطح مطبّق على مبنى صناعي",
    meta: "الأسطح والجدران الخارجية",
    desc: "أسطح المصانع والمستودعات والجدران الخارجية تبقى أبرد في حرارة الخليج.",
  },
  {
    name: "عزل غرف المعدات",
    href: "/ar/services/thermal-insulation/equipment-room-insulation",
    image: "/assets/images/services/equipment-room-insulation.png",
    alt: "غرفة معدات ومحطة معزولة",
    meta: "غرف المعدات والغرف الكهربائية",
    desc: "ظروف أكثر استقرارًا لغرف المعدات والغرف الكهربائية والحاويات.",
  },
  {
    name: "العزل الحراري بالأيروجيل",
    href: "/ar/services/thermal-insulation/aerogel-thermal-insulation",
    image: "/assets/images/services/aerogel-insulation.png",
    alt: "بطانية عزل من الأيروجيل مطبقة على المعدات",
    meta: "أنظمة رقيقة وخفيفة الوزن",
    desc: "موصلية حرارية منخفضة بسماكة رقيقة، للمساحات الضيقة والمنشآت القائمة.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "العزل التقليدي",
    href: null,
  },
  {
    name: "عزل الأيروجيل",
    href: "/ar/services/thermal-insulation/aerogel-thermal-insulation",
  },
];

const comparison = [
  [
    "الأنسب لـ",
    "الخزانات والأنابيب والأسطح والجدران حيث تتوفر مساحة للسماكة المطلوبة",
    "المساحات الضيقة والمنشآت القائمة والمعدات حيث تكون السماكة أو الوزن محدودين",
  ],
  [
    "السماكة",
    "طبقات أسمك للحصول على الأداء نفسه",
    "سماكة رقيقة لأداء محدد",
  ],
  ["الوزن", "يعتمد على المادة وكسوة العزل", "خفيف الوزن"],
  [
    "الأداء في مقاومة الحريق",
    "يعتمد على درجة المادة المختارة",
    "تتوفر أنظمة مثبطة للهب",
  ],
  [
    "الاختيار النهائي",
    "يتم تأكيد المادة والسماكة وكسوة العزل لكل مشروع",
    "يتم تأكيد درجة المنتج وفق البيانات الفنية المعتمدة",
  ],
];

const process = [
  {
    title: "مراجعة الموقع والسطح الأساسي",
    desc: "نقيّم سطح الخزان أو الأنبوب أو السقف أو المعدات وفق الأداء المستهدف لديك.",
  },
  {
    title: "اختيار النظام",
    desc: "اختيار العزل التقليدي أو عزل الأيروجيل وفق متطلبات السماكة والوزن وتصنيف مقاومة الحريق.",
  },
  {
    title: "تجهيز الأسطح",
    desc: "يتم تنظيف السطح الأساسي وتحضيره قبل التطبيق.",
  },
  {
    title: "التطبيق",
    desc: "يتم تطبيق العزل وفق بيان طريقة العمل المعتمد وإرشادات الشركة المصنعة.",
  },
  {
    title: "الفحص والتسليم",
    desc: "يتم فحص السماكة والتشطيب وتوثيقهما قبل التسليم.",
  },
];

const industries = [
  "النفط والغاز",
  "البتروكيماويات والكيماويات",
  "الطاقة والمرافق",
  "التصنيع",
  "المباني التجارية والصناعية",
  "الإنشاءات والبنية التحتية",
];

const tags = [
  "متطلبات SASO",
  "معايير ISO المعمول بها",
  "مواصفات العميل والمشروع",
];

const related = [
  { label: "حلول الخزانات", icon: Factory, href: "/ar/services/tank-solutions" },
  { label: "ترميم وتبطين الخزانات", icon: ShieldCheck, href: "/ar/services/tank-restoration-lining" },
  { label: "الخدمات الصناعية", icon: Wrench, href: "/ar/services/industrial-services" },
  { label: "المساحة والمسح ثلاثي الأبعاد", icon: ScanLine, href: "/ar/services/survey-scanning" },
];

const faqs = [
  {
    q: "ما هو عزل الأيروجيل وما الذي يميزه؟",
    a: "الأيروجيل مادة عزل عالية المسامية تحقق موصلية حرارية منخفضة بسماكة رقيقة ووزن خفيف نسبيًا — وهو مفيد حيث تكون المساحة أو الوزن محدودين، مثل خزائن المعدات أو المنشآت القائمة.",
  },
  {
    q: "هل يمكن تطبيق العزل على خزانات قيد التشغيل؟",
    a: "نعم في معظم الحالات. يمكن تركيب عزل خزانات التخزين لاحقًا لتقليل اكتساب الحرارة الشمسية وتقلب درجة حرارة المنتج دون إيقاف الخزان عن التشغيل بالكامل، وذلك بعد تقييم الموقع.",
  },
  {
    q: "هل يعتمد أداء العزل على السطح الذي يُطبق عليه؟",
    a: "نعم. يعتمد الأداء الحراري الفعلي على درجة المنتج وحالة السطح الأساسي والسماكة والظروف المحيطة وتحضير السطح — ويتم دائمًا تأكيد الأرقام النهائية وفق البيانات الفنية المعتمدة للمشروع المحدد.",
  },
  {
    q: "هل تعزلون المباني إلى جانب الخزانات؟",
    a: "نعم — تعزل فالكون أسطح المصانع والمستودعات والجدران الخارجية وغرف المعدات، إضافة إلى الخزانات والأنابيب ومعدات العمليات.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "العزل الحراري",
      name: "العزل الحراري",
      description:
        "العزل الحراري وعزل الأيروجيل لخزانات التخزين والأنابيب والمعدات والمباني.",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات العزل",
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

export default function ThermalInsulationPage() {
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
        title="العزل الحراري"
        description="أنظمة عزل، بما فيها الأيروجيل، تقلل فقدان الحرارة واكتساب الحرارة الشمسية وتقلبات درجات الحرارة."
        breadcrumb="العزل الحراري"
        image={heroImage}
        imageAlt="عزل حراري صناعي مطبق على الخزانات وشبكات الأنابيب في المملكة العربية السعودية"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              عزل للخزانات وشبكات الأنابيب والمباني وغرف المعدات
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              تتسبب حرارة الخليج في اكتساب الخزانات والأسطح والمعدات للحرارة الشمسية. وتراجع فالكون السطح ودرجة حرارة تشغيله والمساحة المتاحة، ثم تطبق العزل التقليدي أو عزل الأيروجيل بما يناسبه — بدلًا من نظام واحد لكل الأعمال.
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
                  لست متأكدًا من نوع العزل الذي تحتاجه؟
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  أخبرنا بنوع السطح ودرجة حرارة تشغيله والمساحة المتاحة. وسيوصي مهندسونا بالنظام المناسب قبل البدء بأي تطبيق.
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
            العزل التقليدي أم عزل الأيروجيل؟
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            نقطة انطلاق وليست مواصفات نهائية. يتم تأكيد النظام وفق السطح ودرجة الحرارة والمساحة في موقعك.
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
            من مراجعة الموقع إلى التسليم
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
              القطاعات التي نقدم لها خدمات العزل
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
              المعايير المرجعية
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              يُطبق حسب ما ينطبق على المنتج ومواصفات المشروع. ويتم تأكيد الأداء الحراري النهائي وفق البيانات الفنية المعتمدة لكل مشروع.
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

      <StandardsBar />
      <CTASection />
    </div>
  );
}
