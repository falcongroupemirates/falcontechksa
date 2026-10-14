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
    canonical: "/ar/services/survey-scanning/3d-laser-scanning",
    languages: { en: "/services/survey-scanning/3d-laser-scanning", ar: "/ar/services/survey-scanning/3d-laser-scanning", "x-default": "/services/survey-scanning/3d-laser-scanning" },
  },
  title: "خدمات المسح الليزري ثلاثي الأبعاد في المملكة العربية السعودية",
  description: "المسح الليزري الأرضي ثلاثي الأبعاد للمحطات والمباني والخزانات والمكونات في المملكة العربية السعودية — سحابة نقاط مسجّلة للمساحة بالكامل، تُلتقط دون تدخل في المواقع العاملة.",
};

/* ------------------------------------------------------------------ */
/* Content — edit freely; the page renders from these values.          */
/* ------------------------------------------------------------------ */

const HUB = "/ar/services/survey-scanning";

const page = {
  "num": "01",
  "name": "المسح الليزري ثلاثي الأبعاد",
  "heading": "مسح ليزري ثلاثي الأبعاد يسجّل المساحة بالكامل",
  "tagline": "ملايين النقاط المقاسة في كل موضع — تسجيل المساحة بالكامل، لا مجرد الأبعاد التي تذكّر أحدهم أخذها.",
  "image": "/assets/images/services/3d-laser-scanning.jpg",
  "alt": "ماسح ليزري ثلاثي الأبعاد يلتقط محطة صناعية في المملكة العربية السعودية"
};

const intro = [
  "يقيس الماسح الليزري ملايين النقاط من كل موضع إعداد. ثم تُسجَّل المواضع في سحابة نقاط واحدة — سجل مقاس للمحطة أو المبنى أو المكوّن تمامًا كما هو اليوم.",
  "المسح لا يتطلب التلامس، لذا يعمل في المواقع العاملة بأقل قدر من التعطيل. ثم تُستخدم السحابة نفسها في جميع المخرجات اللاحقة: مخططات الوضع القائم، والتحويل من المسح إلى BIM، ونماذج BIM، ونماذج CAD بالهندسة العكسية."
];

const offerings = [
  [
    "تخطيط المسح",
    "تخطيط مواضع الإعداد والتغطية وفقًا للمخرجات المطلوبة، مع الاتفاق على الدقة المطلوبة قبل التوجه إلى الموقع."
  ],
  [
    "سحابة نقاط مسجّلة",
    "تسجيل جميع المواضع في سحابة واحدة منسّقة والتحقق منها، مع تقرير تسجيل قابل للتدقيق."
  ],
  [
    "الالتقاط في المواقع العاملة",
    "قياس دون تلامس يتكيّف مع العمليات، ضمن تصاريح الموقع ومتطلبات الصحة والسلامة والبيئة."
  ],
  [
    "المناطق صعبة الوصول",
    "قياس المناطق المرتفعة أو المزدحمة أو المقيدة من مسافة آمنة بدلًا من القياس اليدوي."
  ],
  [
    "الألوان والصور",
    "سحابات ملوّنة وصور بانورامية عندما يتطلب النطاق ذلك، لجولات افتراضية في الموقع عن بُعد."
  ],
  [
    "جاهزة للنمذجة",
    "سحابة مُعدّة للرسم والنمذجة، ليبدأ المُخرَج التالي من بيانات هندسية موثقة."
  ]
];

const steps = [
  [
    "النطاق وخطة المسح",
    "الاتفاق على المنطقة والغرض والدقة والمخرجات، وتخطيط مواضع الإعداد."
  ],
  [
    "الالتقاط في الموقع",
    "تنفيذ المسح وفق تصاريح الموقع، بأقل قدر من التعطيل للعمليات."
  ],
  [
    "التسجيل وضمان الجودة",
    "تسجيل المواضع في سحابة واحدة والتحقق منها وفق التفاوت المتفق عليه."
  ],
  [
    "التسليم",
    "إصدار سحابة النقاط والصور وتقرير التسجيل بالصيغ المتفق عليها."
  ]
];

const formats = [
  [
    "سحابة النقاط",
    "E57، RCP / RCS"
  ],
  [
    "مستخرجات CAD",
    "DWG"
  ],
  [
    "الصور",
    "مشاهد بانورامية، عند الطلب"
  ],
  [
    "سجل الجودة",
    "تقرير التسجيل"
  ]
];

const uses = [
  "محطات العمليات والأنابيب",
  "الخزانات والأوعية",
  "المباني والمنشآت",
  "الهياكل الفولاذية",
  "مشاريع التحديث والمواقع القائمة",
  "تخطيط فترات الإيقاف"
];

const faqs = [
  {
    "q": "هل يمكنكم المسح أثناء تشغيل المحطة؟",
    "a": "نعم، في الغالب. المسح الليزري لا يتطلب التلامس، لذا يمكن التقاط معظم المناطق أثناء تشغيل المنشأة، وفقًا لتصاريح الموقع وقواعد السلامة وإمكانية الوصول."
  },
  {
    "q": "ما مدى دقة المسح الليزري ثلاثي الأبعاد؟",
    "a": "تعتمد الدقة على الماسح والمدى والسطح والتسجيل. ويتم الاتفاق على الدقة التي يحتاجها المشروع في خطة المسح وتوثيقها في تقرير التسجيل — فنحن لا نعطي رقمًا واحدًا لكل المواقع."
  },
  {
    "q": "ما صيغ الملفات التي سأستلمها؟",
    "a": "تُسلَّم سحابات النقاط عادةً بصيغة E57 (صيغة مفتوحة) وRCP / RCS لبرامج Autodesk، مع مستخرجات DWG عند الحاجة. ويتم الاتفاق على الصيغ ضمن النطاق."
  },
  {
    "q": "ما الفرق بين سحابة النقاط والنموذج؟",
    "a": "سحابة النقاط هي السجل المقاس الخام — ملايين النقاط. أما النموذج أو المخطط فيُبنى منها: مخططات الوضع القائم أو نموذج BIM أو مجسمات CAD. ويمكن لمسح واحد أن ينتج عدة مخرجات منها."
  }
];

// The other four surveying services (shown at the bottom of the page).
const otherServices = [
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
  },
  {
    "num": "05",
    "name": "الهندسة العكسية",
    "href": "/ar/services/survey-scanning/reverse-engineering",
    "image": "/assets/images/services/reverse-engineering-scanning.jpg",
    "alt": "مكوّن صناعي ممسوح أُعيد بناؤه كنموذج CAD قابل للتعديل"
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

export default function Service3dLaserScanningPage() {
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
                <span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
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
                    <span className="me-2 text-brand">{s.num}</span>
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
