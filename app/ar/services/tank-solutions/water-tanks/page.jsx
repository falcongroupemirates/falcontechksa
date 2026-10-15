// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions/water-tanks",
    languages: { en: "/services/tank-solutions/water-tanks", ar: "/ar/services/tank-solutions/water-tanks", "x-default": "/services/tank-solutions/water-tanks" },
  },
  title: "خزانات تخزين المياه في المملكة العربية السعودية — مياه الشرب ومياه العمليات ومياه الحريق",
  description:
    "خزانات تخزين المياه لمياه الشرب والخدمات والعمليات والحريق والري من FRP/GRP أو البولي إيثيلين أو الفولاذ — تصميم وتوريد فالكون تكنولوجيز في المملكة العربية السعودية.",
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
                name: "Water Tanks",
                description:
                  "Storage tanks for drinking, utility, process, fire and irrigation water \u2014 in FRP/GRP, polyethylene or steel.",
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
                    name: "What material is best for a potable water tank?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "FRP/GRP and polyethylene are both widely used for potable water when the materials and construction suit potable contact. We confirm suitability and any required approvals against your project specification.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can water tanks be insulated?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Thermal insulation reduces solar heat gain and temperature swings, which is especially useful for aboveground and rooftop tanks in Saudi Arabia's climate. See our Thermal Insulation services.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you supply underground water tanks?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Underground water tanks are available in FRP/GRP, polyethylene and steel, with foundation and anchoring details provided as part of the design.",
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
        title="خزانات المياه"
        description="خزانات تخزين لمياه الشرب والخدمات والعمليات والحريق والري — من FRP/GRP أو البولي إيثيلين أو الفولاذ."
        breadcrumb="خزانات المياه"
        image="/assets/images/tank-solutions/modern_uae_water_storage_facility.png"
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
                خزانات تخزين المياه لكل التطبيقات
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  سواء كنت بحاجة إلى تخزين مياه الشرب لمبنى أو مياه العمليات والحريق لمصنع صناعي، فإن الخزان المناسب يعتمد على السعة والموقع وجودة المياه. توفر فالكون خزانات المياه من FRP/GRP والبولي إيثيلين والفولاذ وتساعدك على الاختيار بينها.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تأتي الخزانات مع الفوهات وفتحات التفتيش والدعامات وإرشادات التركيب التي يحتاجها موقعك، ويمكن تكوينها فوق الأرض أو على السطح أو داخل غرفة المعدات أو تحت الأرض.
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
                src="/assets/images/tank-solutions/modern_uae_water_storage_facility.png"
                alt="خزانات المياه من فالكون تكنولوجيز في المملكة العربية السعودية"
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
                تخزين مياه الشرب
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات للمباني والمنشآت، بمواد مؤكدة الملاءمة لمياه الشرب.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                مياه العمليات ومياه الخدمات
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تخزين لإمدادات العمليات الصناعية والتبريد ومياه الخدمات.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                تخزين مياه الحريق
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات مخصصة يتم تحديد سعتها وتجهيزها وفق متطلبات الحماية من الحريق.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات مياه الصرف
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات مقاومة للتآكل لمعالجة مياه الصرف والمياه العادمة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                مياه الري
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تخزين لإمدادات ري المسطحات الخضراء والري الزراعي.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات مياه معزولة
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                عزل يقلل اكتساب الحرارة الشمسية للخزانات المكشوفة في المناخ الحار.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            أنواع خزانات المياه
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            لكل نوع صفحة خاصة تتضمن التفاصيل المتعلقة به.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/ar/services/tank-solutions/water-tanks/potable-water-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/hygienic_potable_water_storage_system.png"
                  alt="خزان مياه الشرب"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان مياه الشرب
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين مصنوع من مواد مناسبة للتلامس مع مياه الشرب.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand dark:text-brand-light">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/water-tanks/utility-water-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/modern_uae_utility_water_tank.png"
                  alt="خزان مياه الخدمات"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان مياه الخدمات
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين لمياه الخدمات غير الصالحة للشرب والاستخدامات العامة.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand dark:text-brand-light">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/water-tanks/process-water-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/modular_grp_process_water_tank_installation.png"
                  alt="خزان مياه العمليات"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان مياه العمليات
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين بسعة وتجهيزات مناسبة لإمداد مياه العمليات الصناعية.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand dark:text-brand-light">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/water-tanks/fire-water-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/industrial_fire-water_tank_and_pump.png"
                  alt="خزان مياه الحريق"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان مياه الحريق
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين مخصص بسعة وتجهيزات مناسبة لأنظمة الحماية من الحريق.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand dark:text-brand-light">
                  عرض النوع
                  <ArrowUpLeft
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  />
                </span>
              </div>
            </a>
            <a
              href="/ar/services/tank-solutions/water-tanks/irrigation-water-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/saudi_irrigation_tank_and_pump_system.png"
                  alt="خزان مياه الري"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان مياه الري
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين لإمدادات ري المسطحات الخضراء والزراعة.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand dark:text-brand-light">
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
                    أنواع المياه
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    مياه الشرب والخدمات والعمليات والصرف والحريق والري
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    المواد
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    FRP/GRP أو البولي إيثيلين أو الفولاذ — حسب كل تطبيق
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    موقع التركيب
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    فوق الأرض، تحت الأرض، على السطح، داخل المبنى أو غرفة المعدات
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الأشكال
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    عمودية، أفقية، أسطوانية، مستطيلة ومخصصة
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الاستخدام لمياه الشرب
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    مواد مناسبة للتلامس مع مياه الشرب، يتم تأكيدها لكل مشروع
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    إضافات
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    عزل حراري للحد من اكتساب الحرارة الشمسية؛ وتبطين وترميم للخزانات القائمة
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
                  المباني التجارية والصناعية
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  محطات المياه والصرف الصحي
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  التصنيع
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الطاقة والمرافق
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الإنشاءات والبنية التحتية
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الري
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            من تحديد المتطلبات إلى التركيب
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                تأكيد السعة ونوع المياه
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                السعة وظروف التشغيل وأي متطلبات خاصة بمياه الشرب أو مياه الحريق.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                اختيار المادة والتصميم
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                FRP/GRP أو البولي إيثيلين أو الفولاذ، فوق الأرض أو على السطح أو تحت الأرض.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التصنيع والفحص
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                التصنيع والفحص وفق المخطط المعتمد.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                الدعم والتسليم
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                إرشادات التركيب وتسليم موثق.
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
            لا يوجد نطاق سعة واحد يغطي جميع خدمات المياه الخمس. يتم اختيار المادة والشكل الهندسي (FRP أو PE أو الفولاذ أو أي نظام معتمد آخر) لكل مشروع بناءً على الحجم المطلوب والموقع وكيمياء المياه وأحمال الموقع ومواصفات المشتري.
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
                NSF/ANSI/CAN 61
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                معايير التأثيرات الصحية للمواد الملامسة لمياه الشرب — يتم تأكيد الشهادة/الإدراج الخاص بكل منتج بشكل منفصل.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                AWWA D100-21
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات ملحومة من الفولاذ الكربوني لتخزين المياه.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                AWWA D120-19(R25) / D121-24
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات مياه FRP؛ ويختص D121 بخزانات FRP اللوحية المثبتة بالمسامير فوق الأرض.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                NFPA 22
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات المياه للحماية الخاصة من الحريق، حيثما يعتمدها المشروع.
              </dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-500 dark:text-white/50">
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
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-neutral-500 dark:text-white/50">
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
                ما أفضل مادة لخزان مياه الشرب؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تُستخدم خزانات الألياف الزجاجية FRP/GRP والبولي إيثيلين على نطاق واسع لمياه الشرب عندما تكون المواد وطريقة التصنيع مناسبة للتلامس مع مياه الشرب. ونحن نتحقق من الملاءمة وأي موافقات مطلوبة وفق مواصفات مشروعك.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل يمكن عزل خزانات المياه؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. يقلل العزل الحراري من اكتساب الحرارة الشمسية وتقلبات درجات الحرارة، وهو مفيد بشكل خاص للخزانات فوق الأرض وعلى الأسطح في مناخ المملكة العربية السعودية. اطلع على خدمات العزل الحراري لدينا.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل توفرون خزانات مياه أرضية؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. تتوفر خزانات المياه الأرضية من FRP/GRP والبولي إيثيلين والفولاذ، مع تقديم تفاصيل الأساسات والتثبيت ضمن التصميم.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
