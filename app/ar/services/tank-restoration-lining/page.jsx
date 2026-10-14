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
  Wrench,
} from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import StandardsBar from "@/components/ar/services/StandardsBar";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-restoration-lining",
    languages: { en: "/services/tank-restoration-lining", ar: "/ar/services/tank-restoration-lining", "x-default": "/services/tank-restoration-lining" },
  },
  title: "خدمات ترميم الخزانات وتبطين FRP في المملكة العربية السعودية",
  description:
    "ترمّم فالكون تكنولوجيز الخزانات التالفة وتطبّق أنظمة تبطين FRP والتبطين المقاوم للمواد الكيميائية والعازل للماء التي تُطيل عمر الأصول في أنحاء المملكة العربية السعودية ودول الخليج.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; every block below renders from these lists.  */
/* Same layout as the Tank Solutions page; all styling is in this file. */
/* ------------------------------------------------------------------ */

// Hero photo. If a service tile below uses the same file, that tile loads
// eagerly (otherwise Next flags the shared file as a lazy LCP image).
const heroImage = "/assets/images/services/frp-tank-restoration.png";

// First item is the large feature tile.
const ranges = [
  {
    name: "ترميم الخزانات",
    href: "/ar/services/tank-restoration-lining/tank-restoration",
    image: "/assets/images/services/industrial-tank-restoration.png",
    alt: "خزان تخزين صناعي قيد الترميم",
    meta: "خزانات FRP والفولاذ والبولي إيثيلين",
    desc: "إصلاح الشقوق ومعالجة التسربات والانفصال الطبقي وإصلاح الفوهات وفتحات الدخول لإعادة الخزانات التالفة إلى الخدمة.",
  },
  {
    name: "إعادة تأهيل الخزانات",
    href: "/ar/services/tank-restoration-lining/tank-rehabilitation",
    image: "/assets/images/services/tank-rehabilitation.png",
    alt: "إعادة التأهيل الإنشائي لخزان تخزين قديم",
    meta: "الخزانات القديمة والخرسانية",
    desc: "تقوية إنشائية ومعالجة للشقوق في الخزانات القديمة والمنشآت الخرسانية.",
  },
  {
    name: "تبطين FRP / GRP",
    href: "/ar/services/tank-restoration-lining/frp-grp-lining",
    image: "/assets/images/services/frp-lining.png",
    alt: "تبطين FRP مطبّق داخل خزان تخزين",
    meta: "نظام التبطين",
    desc: "حاجز جديد من الألياف الزجاجية داخل جسم الخزان القائم.",
  },
  {
    name: "تبطين مقاوم للمواد الكيميائية",
    href: "/ar/services/tank-restoration-lining/chemical-resistant-lining",
    image: "/assets/images/services/chemical-resistant-lining.png",
    alt: "تبطين مقاوم للمواد الكيميائية داخل خزان عمليات",
    meta: "نظام التبطين",
    desc: "تبطين يُختار وفق المادة الكيميائية المخزّنة وتركيزها ودرجة حرارتها.",
  },
  {
    name: "تبطين عازل للماء",
    href: "/ar/services/tank-restoration-lining/waterproof-lining",
    image: "/assets/images/services/waterproof-lining.png",
    alt: "تبطين عازل للماء مطبّق على خزان مياه",
    meta: "خزانات وأحواض المياه",
    desc: "يوقف التسربات والرشح في خزانات وأحواض المياه.",
  },
  {
    name: "تبطين الخزانات الفولاذية",
    href: "/ar/services/tank-restoration-lining/steel-tank-lining",
    image: "/assets/images/services/steel-tank-lining.png",
    alt: "التبطين الداخلي لخزان تخزين فولاذي",
    meta: "الخزانات الفولاذية",
    desc: "تبطين داخلي يحمي أجسام الخزانات الفولاذية من التآكل.",
  },
  {
    name: "تبطين الخزانات الخرسانية",
    href: "/ar/services/tank-restoration-lining/concrete-tank-lining",
    image: "/assets/images/services/concrete-tank-lining.png",
    alt: "تبطين وعزل مائي لخزان خرساني",
    meta: "الخزانات الخرسانية",
    desc: "معالجة الشقوق والتبطين والعزل المائي للخزانات والأحواض الخرسانية.",
  },
  {
    name: "الحماية من التآكل",
    href: "/ar/services/tank-restoration-lining/corrosion-protection",
    image: "/assets/images/services/corrosion-protection.png",
    alt: "طلاء للحماية من التآكل على خزان فولاذي",
    meta: "الطلاءات والتبطينات",
    desc: "تجهيز الأسطح وطلاءات واقية تُطيل عمر الأصول.",
  },
];

// Comparison table: one column per option, one row per question.
const compareColumns = [
  {
    name: "الترميم",
    href: "/ar/services/tank-restoration-lining/tank-restoration",
  },
  {
    name: "التبطين",
    href: "/ar/services/tank-restoration-lining/frp-grp-lining",
  },
  {
    name: "الاستبدال",
    href: "/ar/services/tank-solutions",
  },
];

const comparison = [
  [
    "متى يكون مناسباً",
    "تلف موضعي — شقوق أو تسربات أو انفصال طبقي أو تلف في الفوهات أو فتحات الدخول",
    "المنشأ سليم، لكن السطح الداخلي متآكل أو يتسرب أو تعرّض لهجوم المنتج المخزّن",
    "المنشأ لم يعد سليماً، أو الخزان لم يعد مناسباً لظروف التشغيل",
  ],
  [
    "ما يتم تنفيذه",
    "إصلاح المناطق التالفة وتقويتها",
    "تطبيق حاجز جديد من FRP أو مقاوم للمواد الكيميائية أو عازل للماء من الداخل",
    "خزان جديد مُصمَّم ومُصنَّع خصيصاً للتطبيق",
  ],
  [
    "مدة التوقف",
    "عادةً الأقصر بين الخيارات الثلاثة",
    "تفريغ الخزان وتنظيفه وتجهيزه قبل التبطين",
    "إزالة الخزان القديم وتركيب الخزان الجديد",
  ],
  [
    "التكلفة",
    "عادةً أقل بكثير من الاستبدال",
    "عادةً أقل بكثير من الاستبدال",
    "الأعلى بين الخيارات الثلاثة",
  ],
  [
    "الفحوصات",
    "الفحص بعد الإصلاح",
    "اختبار الصلابة أو الثقوب أو التسرب حسب الاقتضاء",
    "الاختبار والتسليم الموثق",
  ],
];

const process = [
  {
    title: "تقييم الحالة",
    desc: "يحدد الفحص البصري والبُعدي مدى التلف قبل بدء أي عمل.",
  },
  {
    title: "اختيار طريقة الإصلاح",
    desc: "تُختار طريقة الترميم أو إعادة التأهيل أو التبطين بما يتلاءم مع سطح الأساس وظروف التشغيل.",
  },
  {
    title: "تجهيز الأسطح",
    desc: "يُنظَّف سطح الأساس ويُجهَّز قبل الإصلاح أو تطبيق التبطين.",
  },
  {
    title: "الإصلاح أو التبطين",
    desc: "يُطبَّق إصلاح الشقوق أو التقوية أو التبطين وفق بيان طريقة العمل المعتمد.",
  },
  {
    title: "الفحص والاختبار",
    desc: "اختبار صلابة باركول أو الثقوب أو التسرب حسب الاقتضاء، يليه التسليم.",
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

const tags = ["ASTM D3299", "ASTM D4097", "ASTM D1998", "AS/NZS 4766", "متطلبات SASO"];

const related = [
  { label: "حلول الخزانات", icon: Factory, href: "/ar/services/tank-solutions" },
  { label: "العزل الحراري", icon: Flame, href: "/ar/services/thermal-insulation" },
  { label: "الخدمات الصناعية", icon: Wrench, href: "/ar/services/industrial-services" },
  { label: "المساحة والمسح ثلاثي الأبعاد", icon: ScanLine, href: "/ar/services/survey-scanning" },
];

const faqs = [
  {
    q: "هل ترميم الخزان أقل تكلفة من استبداله؟",
    a: "في معظم الحالات تكون تكلفة الترميم والتبطين أقل بكثير من الاستبدال، شريطة أن تسمح الحالة الإنشائية بذلك. ويؤكد الفحص الميداني ما إذا كان الترميم هو الخيار الصحيح لخزانكم.",
  },
  {
    q: "ما أسباب تسربات الخزانات وتشققها؟",
    a: "من الأسباب الشائعة الانفصال الطبقي الناتج عن التقادم، والهجوم الكيميائي، والإجهاد الإنشائي، وتلف موانع التسرب في الفوهات أو فتحات الدخول. ويحدد فحصنا السبب الجذري قبل التوصية بطريقة الإصلاح.",
  },
  {
    q: "كيف يُختار نظام التبطين المناسب؟",
    a: "يعتمد اختيار التبطين على المنتج المخزّن ومادة سطح الأساس ودرجة حرارة التشغيل وعمر الخدمة المطلوب — فلكلٍّ من تبطين FRP والتبطين المقاوم للمواد الكيميائية والعازل للماء وتبطين الفولاذ ظروف تناسبه.",
  },
  {
    q: "هل يمكن إعادة تأهيل الخزانات الخرسانية؟",
    a: "نعم — تعيد فالكون تأهيل الخزانات الخرسانية من خلال معالجة الشقوق وتبطين FRP والعزل المائي والتبطين المقاوم للمواد الكيميائية، لتعود إلى الخدمة دون الحاجة إلى إعادة بناء كاملة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "ترميم وتبطين الخزانات",
      name: "ترميم وتبطين الخزانات",
      description:
        "ترميم خزانات FRP وإعادة تأهيل الخرسانة وأنظمة التبطين المقاوم للمواد الكيميائية.",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات الترميم والتبطين",
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

export default function TankRestorationLiningPage() {
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
        title="ترميم وتبطين الخزانات"
        description="معالجة الشقوق والتقوية الإنشائية وأنظمة التبطين التي تُطيل عمر خدمة الأصول القائمة."
        breadcrumb="ترميم وتبطين الخزانات"
        image={heroImage}
        imageAlt="ترميم خزان تخزين FRP وإعادة تبطينه في المملكة العربية السعودية"
      />

      {/* ============ SERVICES — image-led index ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              رمّموا خزاناتكم القائمة وأعيدوا تبطينها بدلاً من استبدالها
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
              تفحص فالكون الخزان أولاً وتحدد سبب التلف، ثم ترمّمه أو تعيد تأهيله أو تعيد تبطينه بما يتلاءم مع المنتج المخزّن وسطح الأساس — FRP أو فولاذ أو خرسانة.
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
            <div className="flex flex-col justify-between rounded-sm bg-mist p-6 dark:bg-neutral-900 sm:p-8 md:col-span-1 lg:col-span-1">
              <div>
                <h3 className="text-2xl font-normal tracking-tight text-ink dark:text-white">
                  الترميم أم الاستبدال؟
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-steel dark:text-white/60">
                  أرسلوا الصور ومادة الخزان وما يُخزَّن فيه. وسننصحكم ما إذا كان الترميم أو التبطين أو الاستبدال هو الخيار الأنسب، ثم نؤكد ذلك في الموقع.
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
            الترميم أم إعادة التبطين أم الاستبدال؟
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
            الفحص هو الفيصل. وهذه مقارنة عامة بين الخيارات الثلاثة.
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
            من الفحص إلى التسليم
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
              القطاعات التي نرمّم خزاناتها
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
              تُطبَّق حسب الاقتضاء وفق سطح الأساس ونظام التبطين ومواصفات المشروع. والإشارة إلى معيار ما لا تُعد ادعاءً بالحصول على شهادة.
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
