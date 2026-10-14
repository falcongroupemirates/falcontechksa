// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions/steel-tank-systems",
    languages: { en: "/services/tank-solutions/steel-tank-systems", ar: "/ar/services/tank-solutions/steel-tank-systems", "x-default": "/services/tank-solutions/steel-tank-systems" },
  },
  title: "خزانات التخزين الفولاذية وخزانات الديزل وأنظمة السكيد في المملكة العربية السعودية",
  description:
    "تُصنِّع فالكون تكنولوجيز خزانات التخزين الفولاذية وخزانات الديزل والدعامات والقواعد (السكيد) لتخزين السوائل الصناعية والوقود في جميع أنحاء المملكة العربية السعودية ودول الخليج.",
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Steel Tank Systems",
                description:
                  "Fabricated steel tanks, supports and skids for diesel, fuel and industrial storage.",
                serviceType: "Tank Solutions",
                areaServed: "Saudi Arabia",
                provider: {
                  "@type": "Organization",
                  name: "Falcon Technologies",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "When should I choose steel over FRP or polyethylene?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Steel is often chosen for larger fuel storage, high mechanical loads or where a site specification calls for it. For water, wastewater and many chemicals, FRP or polyethylene can be more corrosion-resistant. We recommend based on your application.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you fabricate skid-mounted tanks?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Supports, skids and custom steel fabrication are part of our steel tank systems scope.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is corrosion handled on steel tanks?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Steel tanks can be protected with industrial coating or internal lining, and existing steel tanks can be lined or restored \u2014 see our Tank Restoration & Lining services.",
                    },
                  },
                ],
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="حلول الخزانات"
        title="أنظمة الخزانات الفولاذية"
        description="خزانات فولاذية مُصنَّعة ودعامات وقواعد (سكيد) لتخزين الديزل والوقود والسوائل الصناعية."
        breadcrumb="أنظمة الخزانات الفولاذية"
        image="/assets/images/tank-solutions/industrial_steel_tank_systems_showcase.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/ar/services/tank-solutions"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowRight size={13} />
                حلول الخزانات
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                أنظمة خزانات فولاذية مُصنَّعة للتخزين الصناعي
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  حيثما تتطلب المتانة أو السعة الأكبر أو خدمة الوقود ذلك، تُصنِّع فالكون خزانات فولاذية مع الدعامات والقواعد (السكيد) والتجهيزات التي يحتاجها التركيب لديك — من خزانات ديزل المولدات إلى خزانات العمليات والتخزين الصناعية.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  نُصنِّع الفولاذ حيثما يكون مناسبًا من الناحية الفنية؛ وحيثما تخدم مادة أخرى التطبيق بشكل أفضل، نوضح ذلك. ويمكن إضافة طلاء أو تبطين واقٍ لإطالة عمر الخدمة في البيئات العدوانية.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="/ar/request-a-quote"
                  className="inline-flex h-12 items-center rounded-sm bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  اطلب عرض سعر
                </a>
                <a
                  href="/ar/technical-library"
                  className="inline-block border-b border-neutral-300 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white/75"
                >
                  تصفح المكتبة الفنية
                </a>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900">
              <Image loading="eager"
                src="/assets/images/tank-solutions/industrial_steel_tank_systems_showcase.png"
                alt="أنظمة الخزانات الفولاذية من فالكون تكنولوجيز في المملكة العربية السعودية"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 start-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                حلول الخزانات
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            ما نقدمه
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                تصنيع حسب الطلب
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات تُصنَّع وفق أبعادك وتوزيع الفوهات وقيود الوصول لديك.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات الديزل والوقود
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تخزين وقود المولدات والوقود الصناعي مُصنَّع وفق مواصفات المشروع.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                القواعد (السكيد) والدعامات
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                ترتيبات مثبتة على قواعد (سكيد) ومدعومة تُصنَّع مع الخزان.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات العمليات الصناعية
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                أوعية تخزين ومعالجة للمصانع الصناعية حيث يناسب الفولاذ الخدمة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خيارات الحماية من التآكل
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                الطلاء الصناعي والتبطين الداخلي لإطالة عمر الخزان الفولاذي.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                الفحص والاختبار
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                فحوصات بصرية وبُعدية وفحص السماكة واختبار التسرب حيثما ينطبق.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            أنواع أنظمة الخزانات الفولاذية
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            لكل نوع صفحة خاصة تتضمن التفاصيل المتعلقة به.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/ar/services/tank-solutions/steel-tank-systems/fabricated-storage-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/engineered_atmospheric_storage_tank.png"
                  alt="خزان تخزين مُصنَّع"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان تخزين مُصنَّع
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  خزانات تخزين فولاذية مُصنَّعة حسب الطلب وفق مخططات المشروع.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/steel-tank-systems/diesel-fuel-steel-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/aboveground_diesel_tank_in_gulf_facility.png"
                  alt="خزان فولاذي للديزل / الوقود"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان فولاذي للديزل / الوقود
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  إنشاء فولاذي لتخزين ديزل المولدات والوقود الصناعي.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/steel-tank-systems/skid-mounted-tank-system"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/skid-mounted_square_steel_tank_package.png"
                  alt="نظام خزان مثبت على قاعدة (سكيد)"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  نظام خزان مثبت على قاعدة (سكيد)
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  خزان وهيكله الفولاذي الداعم يُصنَّعان ويُسلَّمان كوحدة واحدة قابلة للنقل.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/steel-tank-systems/industrial-process-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image loading="eager"
                  src="/assets/images/tank-solutions/industrial_steel_tank_systems_showcase.png"
                  alt="خزان عمليات صناعية"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان عمليات صناعية
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  أوعية فولاذية مُصنَّعة لخدمة العمليات داخل المصنع، وليس للتخزين السائب فقط.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                لمحة فنية
              </h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    مجموعة المنتجات
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    خزانات مُصنَّعة وخزانات ديزل وخزانات صناعية
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الهيكل الداعم
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    دعامات وقواعد (سكيد) وتصنيع فولاذي حسب الطلب
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الخدمة
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    الديزل والوقود والمياه والسوائل الصناعية حيثما يكون مناسبًا
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    التكوينات
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    فوق الأرض وتحت الأرض حيثما يكون مناسبًا
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الحماية من التآكل
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    خيارات الطلاء والتبطين — انظر ترميم وتبطين الخزانات
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    التوثيق
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    مخططات الترتيب العام / مخططات الورشة، والفحص والاختبار وفق مواصفات المشروع
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">
                مجالات الاستخدام
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الطاقة والمرافق
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  النفط والغاز
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  البتروكيماويات والكيماويات
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  التصنيع
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الإنشاءات والبنية التحتية
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  المباني التجارية والصناعية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            من مراجعة الاستخدام إلى التوريد
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                مراجعة الخدمة والموقع
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                السائل المخزَّن، والسعة، والموقع، وأي مواصفات للعميل.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                الهندسة والرسم
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                إصدار مخططات الترتيب العام ومخططات الورشة للاعتماد.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التصنيع والفحص
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تصنيع مُحكَم مع فحوصات عند نقاط فحص محددة.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                الاختبار والتوريد
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                الاختبار حسب الاقتضاء، ثم التسليم الموثَّق.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            تحديد الأحجام
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            لا تُنشر قائمة سعات ثابتة للخزانات الفولاذية. يُصنَّع كل خزان وفق المشروع — حيث يتم أولًا تأكيد قدرات الورشة وأساس الكود وضمان الجودة وأدلة الإدراج، ثم الحجم الاسمي/التشغيلي والأبعاد والكثافة النوعية (SG) ودرجة الحرارة والدعامات/الأساسات وأحمال الموقع لكل طراز.
          </p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            المعايير والامتثال
          </h2>
          <dl className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                API 650 (الإصدار 13)
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات تخزين النفط الملحومة ضمن النطاق — تحقق من ظروف التصميم ومواصفات المشتري والملاحق الحالية.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                AWWA D100-21
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات ملحومة من الفولاذ الكربوني لتخزين المياه (وليس كودًا لخزانات الديزل أو العمليات).
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                UL 142
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات فولاذية مدرجة فوق الأرض للسوائل القابلة للاشتعال/الاحتراق — يُدَّعى ذلك فقط للطراز المدرج بعينه.
              </dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
            الإشارة إلى معيار ما ليست دليلًا على اعتماد من طرف ثالث. لا تذكر فالكون عبارة “مصمم ومصنّع وفق” معيار ما إلا عندما يدعمها ملف تصميم وضمان جودة مضبوط؛ وتتطلب الملاءمة للمواد الكيميائية ومياه الشرب والتركيب تحت الأرض أدلة منفصلة خاصة بالمنتج. أما الاعتمادات في المملكة العربية السعودية ودول الخليج (SASO/SABER، والدفاع المدني، والبيئة، والبلديات، وشركات المرافق، والمالك) فهي خاصة بكل مشروع ومنتج.
          </p>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            الملحقات والتجهيزات
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              فتحة الوصول / فتحة الدخول
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              المدخل / المخرج
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              الفائض
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              فتحة التهوية
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              التصريف
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              مقياس / مرسل المستوى
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              سلم ومنصة ودرابزين
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              عُرى الرفع
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              مثبتات / مراسي
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              حواجز داخلية
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              نقطة أخذ العينات
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              منافذ الأجهزة
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              مضخة / فلتر / قاعدة (سكيد)
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              مراقبة التسرب
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              التأريض / الأجهزة
            </span>
            <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
              مراقبة الفراغ البيني (الجدار المزدوج)
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-neutral-400 dark:text-white/40">
            يُحدَّد مقاس الفوهة ومادتها وتدعيمها واتجاهها في جدول الفوهات لكل خزان. وتُركَّب الملحقات وفق متطلبات الخدمة.
          </p>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            الأسئلة الشائعة
          </h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                متى يجب أن أختار الفولاذ بدلًا من FRP أو البولي إيثيلين؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                غالبًا ما يُختار الفولاذ لتخزين الوقود بكميات أكبر، أو للأحمال الميكانيكية العالية، أو حيثما تتطلبه مواصفات الموقع. أما للمياه ومياه الصرف وكثير من المواد الكيميائية، فقد يكون FRP أو البولي إيثيلين أكثر مقاومة للتآكل. ونقدم توصيتنا بناءً على تطبيقك.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل يمكنكم تصنيع خزانات مثبتة على قواعد (سكيد)؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. الدعامات والقواعد (السكيد) والتصنيع الفولاذي حسب الطلب جزء من نطاق أنظمة الخزانات الفولاذية لدينا.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                كيف يتم التعامل مع التآكل في الخزانات الفولاذية؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يمكن حماية الخزانات الفولاذية بالطلاء الصناعي أو التبطين الداخلي، كما يمكن تبطين الخزانات الفولاذية القائمة أو ترميمها — انظر خدمات ترميم وتبطين الخزانات لدينا.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
