// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpLeft,
  Flame,
  ShieldCheck,
  Wrench,
  ScanLine,
  Plus,
} from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import StandardsBar from "@/components/ar/services/StandardsBar";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions",
    languages: { en: "/services/tank-solutions", ar: "/ar/services/tank-solutions", "x-default": "/services/tank-solutions" },
  },
  title: "مصنع خزانات FRP والبولي إيثيلين والفولاذ في المملكة العربية السعودية",
  description:
    "تصمم فالكون تكنولوجيز وتصنع خزانات التخزين من FRP/GRP والبولي إيثيلين والفولاذ لتطبيقات المياه والديزل والوقود والمواد الكيميائية في جميع أنحاء المملكة العربية السعودية ودول الخليج.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* ------------------------------------------------------------------ */

const IMG = "/assets/images/tank-solutions";

// First item is the large feature tile.
const ranges = [
  {
    name: "خزانات FRP / GRP",
    href: "/ar/services/tank-solutions/frp-grp-tanks",
    image: `${IMG}/saudi_industrial_frp_tank_system.png`,
    alt: "نظام خزان تخزين من الألياف الزجاجية FRP GRP من تصنيع فالكون تكنولوجيز في المملكة العربية السعودية",
    meta: "6 أنواع من الخزانات",
    desc: "خزانات ألياف زجاجية تُصنع في خطوط إنتاج FRP الخاصة بفالكون — لمياه الشرب ومياه الصرف والمواد الكيميائية والديزل، بطريقتي التشكيل اليدوي ولف الألياف.",
  },
  {
    name: "خزانات البولي إيثيلين",
    href: "/ar/services/tank-solutions/polyethylene-tanks",
    image: `${IMG}/heavy-duty_polyethylene_tanks_in_gulf_facility.png`,
    alt: "خزانات تخزين من البولي إيثيلين LLDPE وHDPE مصنعة بالقولبة الدورانية في منشأة خليجية",
    meta: "4 أنواع من الخزانات",
    desc: "خزانات LLDPE / HDPE بدون لحامات مصنعة بالقولبة الدورانية لتخزين المياه والمواد الكيميائية بأحجام صغيرة إلى متوسطة.",
  },
  {
    name: "أنظمة الخزانات الفولاذية",
    href: "/ar/services/tank-solutions/steel-tank-systems",
    image: `${IMG}/industrial_steel_tank_systems_showcase.png`,
    alt: "أنظمة خزانات فولاذية مصنعة مع دعامات وقواعد (سكيد)",
    meta: "4 أنواع من الخزانات",
    desc: "خزانات فولاذية مصنعة وقواعد (سكيد) وأوعية عمليات للوقود والاستخدامات الصناعية.",
  },
  {
    name: "خزانات المياه",
    href: "/ar/services/tank-solutions/water-tanks",
    image: `${IMG}/modern_uae_water_storage_facility.png`,
    alt: "خزانات تخزين المياه لمياه الشرب ومياه العمليات ومياه الحريق",
    meta: "5 أنواع من الخزانات",
    desc: "تخزين مياه الشرب ومياه الخدمات ومياه العمليات ومياه الحريق ومياه الري.",
  },
  {
    name: "خزانات المواد الكيميائية",
    href: "/ar/services/tank-solutions/chemical-tanks",
    image: `${IMG}/chemical_tanks_category.png`,
    alt: "خزانات تخزين مقاومة للمواد الكيميائية",
    meta: "يُختار وفق المادة الكيميائية",
    desc: "تُختار البنية بناءً على المادة الكيميائية وتركيزها ودرجة حرارتها.",
  },
  {
    name: "خزانات الديزل والوقود",
    href: "/ar/services/tank-solutions/diesel-fuel-tanks",
    image: `${IMG}/fuel_storage_solutions_industrial_yard.png`,
    alt: "خزانات تخزين الديزل والوقود في ساحة صناعية",
    meta: "4 أنواع من الخزانات",
    desc: "خزانات الوقود اليومية للمولدات، وخزانات الديزل الأرضية، وتخزين الوقود بالجملة.",
  },
  {
    name: "الخزانات الأرضية",
    href: "/ar/services/tank-solutions/underground-tanks",
    image: `${IMG}/underground_tank_installation_cutaway.png`,
    alt: "مقطع توضيحي لتركيب خزان تخزين تحت الأرض",
    meta: "3 أنواع من الخزانات",
    desc: "خزانات FRP وبولي إيثيلين وفولاذ مصنفة للدفن، مصممة لتحمل التربة والمياه الجوفية.",
  },
];

const materials = [
  {
    name: "FRP / GRP",
    href: "/ar/services/tank-solutions/frp-grp-tanks",
  },
  {
    name: "البولي إيثيلين",
    href: "/ar/services/tank-solutions/polyethylene-tanks",
  },
  {
    name: "الفولاذ",
    href: "/ar/services/tank-solutions/steel-tank-systems",
  },
];

// One row per question a buyer asks; one cell per material (same order as `materials`).
const comparison = [
  [
    "الأنسب لـ",
    "المياه ومياه الصرف والمواد الكيميائية والديزل",
    "المياه والمواد الكيميائية المتوافقة بأحجام صغيرة إلى متوسطة",
    "الوقود والاستخدامات الصناعية والعمليات الأكبر",
  ],
  [
    "التآكل",
    "لا يصدأ — يُختار الراتنج وفق السائل المخزن",
    "لا يصدأ — يُفحص التوافق لكل طراز",
    "يحتاج إلى طلاء أو تبطين يُحدد وفق الخدمة",
  ],
  [
    "تحديد الأحجام",
    "يُصنع وفق المشروع",
    "حسب الطراز، أحجام صغيرة إلى متوسطة",
    "يُصنع وفق المشروع",
  ],
  [
    "الأشكال",
    "رأسي وأفقي ومستطيل ومخصص",
    "رأسي وأفقي ومتعدد الطبقات",
    "رأسي وأفقي ومثبت على قاعدة (سكيد)",
  ],
  [
    "تحت الأرض",
    "تصاميم مصنفة للدفن",
    "فقط الطرازات الموثقة للدفن",
    "مع الحماية من التآكل والاعتماد عند الحاجة",
  ],
];

const process = [
  {
    title: "مراجعة المتطلبات",
    desc: "نبدأ بما تخزنه — السائل وتركيزه ودرجة حرارته وموقع التركيب.",
  },
  {
    title: "اختيار المواد",
    desc: "FRP/GRP أو البولي إيثيلين أو الفولاذ، بما يلائم التطبيق والعمر التشغيلي المتوقع.",
  },
  {
    title: "التصميم والمخططات",
    desc: "تأكيد المخططات العامة (GA) ومواقع الفوهات والدعامات ومتطلبات الأساس قبل التصنيع.",
  },
  {
    title: "التصنيع والفحص",
    desc: "يُصنع في ظروف مُحكمة مع فحوصات في كل مرحلة من مراحل الإنتاج.",
  },
  {
    title: "الاختبار والتسليم",
    desc: "اختبار هيدروستاتيكي أو بُعدي حسب الحاجة، يليه تسليم موثق.",
  },
];

const industries = [
  "النفط والغاز",
  "البتروكيماويات والكيماويات",
  "المياه والصرف الصحي",
  "الطاقة والمرافق",
  "التصنيع",
  "الإنشاءات والبنية التحتية",
];

const standards = [
  "ASTM D3299",
  "ASTM D4097",
  "ASTM D1998",
  "AS/NZS 4766",
  "متطلبات SASO",
];

const related = [
  { label: "العزل الحراري", icon: Flame, href: "/ar/services/thermal-insulation" },
  { label: "ترميم وتبطين الخزانات", icon: ShieldCheck, href: "/ar/services/tank-restoration-lining" },
  { label: "الخدمات الصناعية", icon: Wrench, href: "/ar/services/industrial-services" },
  { label: "المساحة والمسح ثلاثي الأبعاد", icon: ScanLine, href: "/ar/services/survey-scanning" },
];

const faqs = [
  {
    q: "ما أحجام الخزانات التي تصنعها فالكون تكنولوجيز؟",
    a: "تصنع فالكون خزانات تبدأ من بضع مئات من اللترات وتصل إلى سعات صناعية كبيرة من FRP/GRP والبولي إيثيلين والفولاذ، بمقاسات تلائم موقعك وتطبيقك بدلًا من نطاق كتالوج ثابت.",
  },
  {
    q: "ما أفضل مادة خزانات لتخزين المواد الكيميائية؟",
    a: "تُعد FRP/GRP الخيار الأكثر شيوعًا لتخزين المواد الكيميائية لأنه يمكن مواءمة نظام الراتنج مع المادة الكيميائية وتركيزها ودرجة حرارة التشغيل. ويؤكد مهندسونا المواصفات الدقيقة قبل التصنيع.",
  },
  {
    q: "هل يمكن تركيب الخزانات تحت الأرض؟",
    a: "نعم. توفر فالكون خزانات أرضية من FRP/GRP والبولي إيثيلين والفولاذ، مع إرشادات الأساس والتركيب ضمن حزمة التصميم. ولا تُستخدم تحت الأرض إلا التصاميم المصنفة للدفن.",
  },
  {
    q: "هل توفرون خزانات لتخزين الديزل والوقود؟",
    a: "نعم — تصنع فالكون خزانات الديزل والوقود فوق الأرض وتحت الأرض من الفولاذ أو FRP/GRP، بما في ذلك خزانات الوقود اليومية للمولدات وتخزين الوقود الصناعي.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "تصنيع الخزانات",
      name: "حلول الخزانات",
      description:
        "تصنيع خزانات FRP/GRP والبولي إيثيلين والفولاذ لتخزين المياه والديزل والوقود والمواد الكيميائية.",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "فئات الخزانات",
        itemListElement: ranges.map((r) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: r.name, description: r.desc },
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

export default function TankSolutionsPage() {
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
        title="حلول الخزانات"
        description="خزانات FRP/GRP والبولي إيثيلين والفولاذ مصممة وفق ما تخزنه، لا وفق مقاسات كتالوج ثابتة."
        breadcrumb="حلول الخزانات"
        image={`${IMG}/engineered_frp_tanks_in_saudi_facility.png`}
        imageAlt="خزانات تخزين FRP مصممة هندسيًا في منشأة صناعية سعودية"
      />

      {/* ============ TANK RANGES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              خزانات FRP والبولي إيثيلين والفولاذ، مصنعة لتطبيقك
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              بصفتها مصنعًا لخزانات FRP يخدم المملكة العربية السعودية ودول الخليج، تراجع فالكون السائل المخزن وتركيزه ودرجة حرارته وموقع التركيب قبل التوصية بالمادة والتكوين — بدلًا من الانطلاق من جدول مقاسات.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature tile — FRP/GRP, the flagship range */}
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
                  عرض فئة FRP / GRP
                  <ArrowUpLeft
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </Link>

            {/* The other six ranges */}
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

            {/* Help tile — fills the last row with something useful */}
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-2 lg:col-span-2">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  لست متأكدًا من الخزان الذي تحتاجه؟
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  أخبرنا بما تخزنه والكمية التقريبية ومكان تركيب الخزان. وسيوصي مهندسونا بالمادة والتكوين قبل البدء بأي تصنيع.
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

      {/* ============ MATERIAL COMPARISON ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            FRP أم بولي إيثيلين أم فولاذ؟
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            نقطة انطلاق وليست مواصفات نهائية. تُؤكد المادة النهائية وفق السائل المخزن ودرجة الحرارة والموقع.
          </p>

          {/* Phones: one stacked block per material */}
          <div className="mt-10 space-y-8 md:hidden">
            {materials.map((m, mi) => (
              <div key={m.name} className="border-t-2 border-ink pt-4 dark:border-white/40">
                <Link
                  href={m.href}
                  className="inline-flex items-center gap-1.5 text-xl font-normal tracking-tight text-neutral-900 dark:text-white"
                >
                  {m.name}
                  <ArrowUpLeft size={16} className="text-neutral-400" />
                </Link>
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
                    <span className="sr-only">الخاصية</span>
                  </th>
                  {materials.map((m) => (
                    <th key={m.name} scope="col" className="py-4 pe-6 align-bottom">
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
            من المتطلبات حتى التسليم
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((p, i) => (
              <li key={p.title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                  {p.desc}
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
              القطاعات التي تعتمد على خزانات فالكون
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
              {standards.map((s) => (
                <span key={s} className="rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              تُطبق حسب المنتج والمعيار الحاكم ومواصفات المشروع. والإشارة إلى معيار ما لا تعني ادعاء الحصول على شهادة — راجع كل فئة خزانات للتفاصيل.
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
