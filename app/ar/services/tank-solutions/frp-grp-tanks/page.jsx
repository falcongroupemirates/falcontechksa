// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions/frp-grp-tanks",
    languages: { en: "/services/tank-solutions/frp-grp-tanks", ar: "/ar/services/tank-solutions/frp-grp-tanks", "x-default": "/services/tank-solutions/frp-grp-tanks" },
  },
  title: "مصنع خزانات FRP / GRP في المملكة العربية السعودية",
  description:
    "تصنع فالكون تكنولوجيز خزانات الألياف الزجاجية FRP/GRP لتخزين مياه الشرب ومياه الصرف والمواد الكيميائية والديزل — رأسية وأفقية وأرضية ومخصصة — في جميع أنحاء المملكة العربية السعودية ودول الخليج.",
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
                name: "FRP / GRP Tanks",
                description:
                  "Fiberglass tanks engineered for water, wastewater, chemicals and diesel \u2014 built to your site, not a catalogue size.",
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
                    name: "What is the difference between FRP and GRP tanks?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "They describe the same family of material \u2014 a resin laminate reinforced with glass fiber. FRP (fiber-reinforced plastic) and GRP (glass-reinforced plastic) are used interchangeably.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can FRP tanks store chemicals?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. FRP is widely used for chemical storage because the resin system can be selected for the specific chemical, concentration and temperature. Share those details and our engineers confirm the suitable construction before fabrication.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can an FRP tank be installed underground?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Underground FRP tanks are supported by foundation, anchoring and installation details in the design package, with the design accounting for soil and external loads.",
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
        title="خزانات FRP / GRP"
        description="خزانات ألياف زجاجية مصممة للمياه ومياه الصرف والمواد الكيميائية والديزل — تُصنع وفق موقعك، لا وفق مقاسات الكتالوج."
        breadcrumb="خزانات FRP / GRP"
        image="/assets/images/tank-solutions/engineered_frp_tanks_in_saudi_facility.png"
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
                مصنع خزانات FRP / GRP للمملكة العربية السعودية ودول الخليج
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  البلاستيك المقوى بالألياف الزجاجية (FRP)، المعروف أيضًا بـ GRP، يقاوم التآكل، وخفيف الوزن نسبةً إلى متانته، ويتحمل حرارة ورطوبة المواقع في المملكة العربية السعودية. وتصمم فالكون خزانات FRP/GRP وتصنعها بناءً على السائل المخزن وتركيزه ودرجة حرارته وموقع التركيب، بدلًا من الانطلاق من جدول مقاسات ثابت.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  من مياه الشرب ومياه العمليات إلى مياه الصرف والمواد الكيميائية والديزل، يُصنع كل خزان بنظام راتنج وطبقات ملائم للخدمة، ثم يُفحص ويُوثق قبل مغادرته المصنع.
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
                src="/assets/images/tank-solutions/engineered_frp_tanks_in_saudi_facility.png"
                alt="خزانات FRP / GRP من فالكون تكنولوجيز في المملكة العربية السعودية"
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
                بنية مقاومة للتآكل
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                طبقات مقواة بالألياف الزجاجية لا تصدأ، وتتحمل السوائل العدوانية عند اختيار الراتنج المناسب.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                راتنج ملائم للخدمة
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُختار الراتنج والطبقات وفق السائل المخزن وتركيزه ودرجة حرارة التشغيل.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                مقاسات وأشكال مخصصة
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات أسطوانية ومستطيلة وخاصة الأغراض بمقاسات تناسب مساحتك ومنافذ الوصول.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                تجهيزات مصممة هندسيًا
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                اتجاه الفوهات وفتحات الدخول والدعامات ونقاط الرفع محددة في المخططات المعتمدة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                تصنيع مُحكم
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                فحص ضبط المواد وبناء الطبقات والسماكة والتقوية عند نقاط فحص محددة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                دعم الترميم
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                إذا تعرض خزان FRP لأي ضرر، يمكن لفالكون ترميمه وتقويته بدلًا من استبداله.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            أنواع خزانات FRP / GRP
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            لكل نوع صفحة خاصة تتضمن التفاصيل المتعلقة به.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/ar/services/tank-solutions/frp-grp-tanks/vertical-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/gulf_industrial_frp_storage_tank.png"
                  alt="خزان FRP رأسي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP رأسي
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  الاتجاه القياسي لمعظم تطبيقات تخزين المياه والعمليات والمواد الكيميائية حيث تكون المساحة محدودة.
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
              href="/ar/services/tank-solutions/frp-grp-tanks/horizontal-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/horizontal_frp_tank_in_gulf_facility.png"
                  alt="خزان FRP أفقي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP أفقي
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  ارتفاع أقل للمواقع ذات الارتفاع المحدود أو حيث يُركب الخزان على قاعدة (سكيد) أو مقطورة.
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
              href="/ar/services/tank-solutions/frp-grp-tanks/underground-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/saudi_underground_frp_tank_installation.png"
                  alt="خزان FRP أرضي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP أرضي
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين مدفون مصمم لمقاومة أحمال التربة وطفو المياه الجوفية.
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
              href="/ar/services/tank-solutions/frp-grp-tanks/cylindrical-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/saudi_industrial_frp_tank_system.png"
                  alt="خزان FRP أسطواني"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP أسطواني
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  الشكل الأكثر كفاءة إنشائيًا لخزانات FRP، ويُستخدم في التكوينات الرأسية والأفقية.
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
              href="/ar/services/tank-solutions/frp-grp-tanks/rectangular-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/modular_frp_tank_in_gulf_facility.png"
                  alt="خزان FRP مستطيل"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP مستطيل
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  مساحة مربعة أو مستطيلة للمواقع التي يكون فيها شكل قطعة الأرض أهم من الكفاءة الإنشائية.
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
              href="/ar/services/tank-solutions/frp-grp-tanks/custom-frp-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/industrial_frp_hopper_tank_in_saudi_plant.png"
                  alt="خزان FRP بشكل مخصص"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان FRP بشكل مخصص
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تصنيع مخصص لكل مشروع للخزانات التي لا تناسب شكلًا أو مساحة قياسية.
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
                    التصنيع
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    التشكيل اليدوي ولف الألياف والتصنيع المخصص لكل مشروع
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    السوائل المخزنة
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    مياه الشرب، مياه العمليات، مياه الصرف، المواد الكيميائية، الديزل والسوائل الصناعية
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الاتجاه
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    رأسي، أفقي، تحت الأرض وفوق الأرض
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الأشكال
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    خزانات أسطوانية ومستطيلة ومخصصة
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    التجهيزات
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    الفوهات وفتحات الدخول والدعامات والتثبيت وترتيبات الرفع حسب المخطط
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    التوثيق
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    المخططات العامة (GA) والتنفيذية، وسجلات الفحص، وتتبع المواد
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
                  محطات المياه والصرف الصحي
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  منشآت النفط والغاز
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  مصانع البتروكيماويات والكيماويات
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الطاقة والمرافق
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  المصانع
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الإنشاءات والبنية التحتية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            من الاستفسار حتى التسليم
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                مراجعة التطبيق
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                السائل المخزن وتركيزه ودرجة حرارته والسعة وموقع التركيب.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                اختيار الراتنج والطبقات
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                اختيار البنية المناسبة للخدمة، مع إصدار المخططات للاعتماد.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التصنيع والفحص
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                التشكيل اليدوي أو لف الألياف مع الفحص أثناء التصنيع والفحص النهائي.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                الاختبار والتسليم
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                اختبارات التسرب أو الاختبار الهيدروستاتيكي والفحوصات البعدية حسب الحاجة، ثم التسليم الموثق.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            أحجام مرجعية
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            تكوينات موثقة يمكن الرجوع إليها كنقطة انطلاق — تُؤكَّد لكل مشروع، وليست التزامًا بالتوفر.
          </p>

          <dl className="mt-8 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                ديزل تحت الأرض (FRP)
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                20,000 L — Ø2,500 mm × طول 4,350 mm؛ 30,000 L — Ø2,500 mm × طول 6,400 mm.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                أفقي فوق الأرض (FRP)
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                مرجع 100,000 L — Ø3.50 m × طول 11 m × ارتفاع 4.00 m.
              </dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
            تكوينات مرجعية استرشادية من مشاريع وسياقات تصميم سابقة — وليست نطاق كتالوج ملزمًا أو توفرًا حاليًا. وتُؤكَّد السعة والأبعاد النهائية وفق المخطط المعتمد وملف ضمان الجودة لكل مشروع.
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
                ASTM D3299-26
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات FRP مقاومة للتآكل مصنعة بلف الألياف، ضمن نطاقه وظروفه التصميمية.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                ASTM D4097-19
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات FRP المصنّعة بالقولبة التلامسية؛ وقد صنّفت ASTM إصدار 2019 كإصدار مسحوب في 2026 — يُرجى تأكيد الأساس المعتمد حاليًا للمشروع.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                AWWA D120-19(R25)
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات FRP من اللدائن المتصلدة بالحرارة لخدمات المياه — يُرجى تأكيد متطلبات المشتري والنطاق الدقيق.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                AWWA D121-24
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات FRP لوحية مثبتة بالمسامير فوق الأرض لتخزين المياه (وليس معيارًا شاملًا لكل خزانات FRP).
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
                ما الفرق بين خزانات FRP وخزانات GRP؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                كلاهما يصف عائلة المواد نفسها — طبقات من الراتنج المقوى بالألياف الزجاجية. ويُستخدم المصطلحان FRP (البلاستيك المقوى بالألياف) وGRP (البلاستيك المقوى بالزجاج) بالتبادل.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل يمكن تخزين المواد الكيميائية في خزانات FRP؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. تُستخدم خزانات FRP على نطاق واسع لتخزين المواد الكيميائية لأنه يمكن اختيار نظام الراتنج وفق المادة الكيميائية وتركيزها ودرجة حرارتها. شاركنا هذه التفاصيل وسيؤكد مهندسونا البنية المناسبة قبل التصنيع.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل يمكن تركيب خزان FRP تحت الأرض؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. تُدعم خزانات FRP الأرضية بتفاصيل الأساس والتثبيت والتركيب ضمن حزمة التصميم، مع مراعاة أحمال التربة والأحمال الخارجية في التصميم.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
