// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";

// Title only — app/services/layout.jsx appends "| Falcon Technologies".
export const metadata = {
  alternates: {
    canonical: "/ar/services/survey-scanning/reverse-engineering",
    languages: { en: "/services/survey-scanning/reverse-engineering", ar: "/ar/services/survey-scanning/reverse-engineering", "x-default": "/services/survey-scanning/reverse-engineering" },
  },
  title: "الهندسة العكسية والمسح ثلاثي الأبعاد إلى CAD في المملكة العربية السعودية",
  description: "الهندسة العكسية في المملكة العربية السعودية — مسح المكونات المتقادمة أو غير الموثقة بتقنية ثلاثية الأبعاد وإعادة بنائها كنماذج CAD بارامترية قابلة للتعديل، وهو أسرع طريق للحصول على بديل قابل للتصنيع.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/ar/services/survey-scanning";

const page = {
  "num": "05",
  "name": "الهندسة العكسية",
  "heading": "امسح القطعة واحصل على نموذج CAD قابل للتعديل",
  "tagline": "مسح المكونات المتقادمة أو غير الموثقة وإعادة بنائها كنماذج CAD قابلة للتعديل — أسرع طريق للحصول على قطعة بديلة.",
  "image": "/assets/images/services/reverse-engineering-scanning.jpg",
  "alt": "مكوّن صناعي ممسوح أُعيد بناؤه كنموذج CAD قابل للتعديل"
};

const intro = [
  "عندما يكون المكوّن متقادمًا أو غير موثق أو لم يعد المورد الأصلي موجودًا، تتيح الهندسة العكسية استعادته. إذ يتم مسح القطعة بتقنية ثلاثية الأبعاد وإعادة بنائها كنموذج CAD بارامتري قابل للتعديل.",
  "تحصل على مجسم بارامتري، لا مجرد شبكة مضلعات — بيانات هندسية يمكنك تعديلها وتحديد أبعادها وإرسالها للتصنيع، مع تقرير انحراف يقارن النموذج بالمسح."
];

const offerings = [
  [
    "استعادة قطع الغيار المتقادمة",
    "بيانات هندسية بديلة لقطع لم يعد بالإمكان شراؤها أو لا تتوفر لها مخططات."
  ],
  [
    "مجسم بارامتري لا شبكة مضلعات",
    "نموذج CAD قابل للتعديل بخصائص وأبعاد يمكنك العمل عليها."
  ],
  [
    "جاهز للتعديل",
    "بيانات هندسية يمكن تحسينها أو تكييفها، لا مجرد نسخها."
  ],
  [
    "تقرير الانحراف",
    "مقارنة نموذج CAD بالمسح لتعرف مدى تطابقه."
  ],
  [
    "مخططات التصنيع",
    "مخططات ثنائية الأبعاد بالأبعاد تُنتج من النموذج حسب النطاق."
  ],
  [
    "معالجة القطع البالية",
    "عندما تكون القطعة بالية، يتم الاتفاق معك على طريقة استعادة مفهوم تصميمها الأصلي."
  ]
];

const steps = [
  [
    "مراجعة القطعة",
    "الاتفاق على الغرض والحالة والخصائص الحرجة والمُخرَج."
  ],
  [
    "مسح القطعة",
    "التقاط المكوّن في الموقع أو في منشأتنا."
  ],
  [
    "إعادة البناء بصيغة CAD",
    "إنشاء نموذج بارامتري من بيانات المسح."
  ],
  [
    "المقارنة والتسليم",
    "مطابقة النموذج مع المسح، ثم إصدار ملفات CAD والمخططات والتقرير."
  ]
];

const formats = [
  [
    "مجسم CAD صلب",
    "STEP، IGES"
  ],
  [
    "شبكة مضلعات (Mesh)",
    "STL"
  ],
  [
    "المخططات",
    "DWG، PDF"
  ],
  [
    "سجل الجودة",
    "تقرير الانحرافات مقارنةً بالمسح"
  ]
];

const uses = [
  "قطع الغيار المتقادمة",
  "المضخات والدفاعات والصمامات",
  "الفلنجات والدعامات والتجهيزات",
  "المعدات القديمة التي لا تتوفر لها مخططات",
  "تحسين القطع وإعادة تصميمها",
  "مواءمة الجديد مع القائم"
];

const faqs = [
  {
    "q": "ما الفرق بين شبكة المضلعات (Mesh) والنموذج البارامتري؟",
    "a": "شبكة المضلعات (مثل STL) سطح مكوّن من مثلثات — مناسبة للعرض المرئي أو الطباعة ثلاثية الأبعاد لكن يصعب تعديلها. أما النموذج البارامتري فيُبنى من خصائص وأبعاد، لذا يمكن تعديله واستخدامه في مخططات التصنيع."
  },
  {
    "q": "هل يمكنكم إعادة إنتاج قطعة متآكلة أو تالفة؟",
    "a": "نعم. عندما تكون القطعة متآكلة، نتفق معكم على كيفية استعادة نية التصميم الأصلية بدلاً من نسخ التآكل."
  },
  {
    "q": "ما الصيغ التي سأستلمها؟",
    "a": "عادةً STEP وIGES للمجسم الصلب في CAD، وSTL لشبكة المضلعات، وDWG / PDF للمخططات. ويمكن الاتفاق على الصيغ الأصلية ضمن نطاق العمل."
  },
  {
    "q": "هل تقومون بتصنيع القطعة البديلة؟",
    "a": "المُخرجات هي نموذج CAD والمخططات وتقرير الانحرافات. ويمكن ترتيب التصنيع بشكل منفصل حسب متطلبات مشروعكم."
  }
];

// The other four surveying services (shown at the bottom of the page).
const otherServices = [
  {
    "num": "01",
    "name": "المسح الليزري ثلاثي الأبعاد",
    "href": "/ar/services/survey-scanning/3d-laser-scanning",
    "image": "/assets/images/services/3d-laser-scanning.jpg",
    "alt": "ماسح ليزري ثلاثي الأبعاد يلتقط محطة صناعية في المملكة العربية السعودية"
  },
  {
    "num": "02",
    "name": "مسح الوضع القائم (As-Built)",
    "href": "/ar/services/survey-scanning/as-built-survey",
    "image": "/assets/images/services/as-built-survey.jpg",
    "alt": "مخططات مسح الوضع القائم المُنتجة من مسح ثلاثي الأبعاد لمنشأة قائمة"
  },
  {
    "num": "03",
    "name": "التحويل من المسح إلى BIM",
    "href": "/ar/services/survey-scanning/scan-to-bim",
    "image": "/assets/images/services/scan-to-bim.jpg",
    "alt": "سحابة نقاط محوّلة إلى نموذج BIM بارامتري"
  },
  {
    "num": "04",
    "name": "نمذجة BIM",
    "href": "/ar/services/survey-scanning/bim-modelling",
    "image": "/assets/images/services/bim-modelling.jpg",
    "alt": "نموذج BIM منسّق يشمل التخصصات المعمارية والإنشائية وMEP"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: page.name,
      description: page.tagline,
      serviceType: "المساحة والمسح ثلاثي الأبعاد",
      areaServed: "المملكة العربية السعودية",
      provider: { "@type": "Organization", name: "فالكون تكنولوجيز" },
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

export default function ReverseEngineeringPage() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="المساحة والمسح ثلاثي الأبعاد"
        title={page.name}
        description={page.tagline}
        breadcrumb={page.name}
        image={page.image}
        imageAlt={page.alt}
      />

      {/* ============ OVERVIEW ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:px-0 lg:py-24">
          <div>
            <Link
              href={HUB}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
            >
              <ArrowRight size={14} />
              جميع خدمات المساحة
            </Link>

            <h2 className="mt-6 max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              {page.heading}
            </h2>

            <div className="mt-6 max-w-xl space-y-4">
              {intro.map((p) => (
                <p key={p} className="text-base leading-relaxed text-neutral-600 dark:text-white/60">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/ar/request-a-quote"
                className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                اطلب عرض سعر
              </Link>
              <Link
                href="/ar/contact-us"
                className="border-b border-neutral-300 pb-0.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/80"
              >
                تحدث إلى مهندس مساحة
              </Link>
            </div>
          </div>

          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-ink">
              <Image
                src={page.image}
                alt={page.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10">
              {formats.map(([label, value]) => (
                <div key={label} className="bg-white p-4 dark:bg-neutral-950">
                  <dt className="text-sm text-neutral-500 dark:text-white/45">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU GET ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            ما تحصل عليه
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(([title, desc]) => (
              <div key={title} className="bg-white p-7 dark:bg-neutral-950">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS (a real sequence, so numbered) ============ */}
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            كيف تعمل الخدمة
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(([title, desc], i) => (
              <li key={title} className="border-t-2 border-ink pt-5 dark:border-white/30">
                <span className="text-sm font-semibold text-brand dark:text-brand-light">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-base font-medium text-neutral-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ WHERE IT'S USED ============ */}
      <section className="w-full bg-ink">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-16 lg:px-8 xl:px-0">
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
            مجالات الاستخدام
          </h2>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-2">
            {uses.map((u) => (
              <li key={u} className="border-b border-white/15 py-4 text-base text-white/85">
                {u}
              </li>
            ))}
          </ul>
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
                  <Plus size={18} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTHER SURVEYING SERVICES ============ */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-white">
            خدمات مساحة أخرى
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-sm border border-neutral-200 bg-white transition-colors hover:border-brand dark:border-white/10 dark:bg-neutral-950"
              >
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    <span className="me-2 text-brand dark:text-brand-light">{s.num}</span>
                    {s.name}
                  </span>
                  <ArrowUpLeft size={16} className="shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-brand dark:text-white/25" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
