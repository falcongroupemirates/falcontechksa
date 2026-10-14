// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions/underground-tanks",
    languages: { en: "/services/tank-solutions/underground-tanks", ar: "/ar/services/tank-solutions/underground-tanks", "x-default": "/services/tank-solutions/underground-tanks" },
  },
  title: "الخزانات الأرضية في المملكة العربية السعودية — FRP والبولي إيثيلين والفولاذ",
  description:
    "خزانات أرضية لتخزين المياه والديزل والمواد الكيميائية من FRP/GRP والبولي إيثيلين والفولاذ، مُهندَسة لأحمال التربة والمياه الجوفية — فالكون تكنولوجيز، المملكة العربية السعودية.",
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
                name: "Underground Tanks",
                description:
                  "Underground water, diesel and chemical tanks engineered for soil loads, groundwater and safe installation.",
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
                    name: "How do you stop an underground tank floating when groundwater is high?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tanks are designed with anchoring and foundation details that resist buoyancy. Share ground and groundwater information and our engineers include the anchoring arrangement in the drawings.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which material is best for an underground tank?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "FRP/GRP is a common choice for corrosion resistance, polyethylene suits smaller volumes, and steel is used where specified, with protective coating. We recommend based on liquid, size and ground conditions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you provide installation guidance?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Installation instructions and foundation requirements are provided with the design, and standard details are also available through our Technical Library.",
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
        title="الخزانات الأرضية"
        description="خزانات أرضية للمياه والديزل والمواد الكيميائية مُهندَسة لأحمال التربة والمياه الجوفية والتركيب الآمن."
        breadcrumb="الخزانات الأرضية"
        image="/assets/images/tank-solutions/underground_tank_installation_cutaway.png"
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
                خزانات تخزين أرضية مُهندَسة للتربة التي تُدفن فيها
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  يجب أن يقاوم الخزان الأرضي ضغط التربة والمرور وطفو المياه الجوفية إلى جانب السائل المخزَّن. وتصمم فالكون الخزانات الأرضية من FRP/GRP والبولي إيثيلين والفولاذ مع تفاصيل التثبيت والأساسات والتركيب التي تحافظ على استقرارها طوال عمر خدمتها.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  نراجع معك العمق وظروف التربة والمياه الجوفية والأحمال الخارجية والوصول قبل التصنيع، ليتطابق ما يصل إلى الموقع مع خطة الحفر وطبقة الفرش والردم.
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
                src="/assets/images/tank-solutions/underground_tank_installation_cutaway.png"
                alt="الخزانات الأرضية من فالكون تكنولوجيز في المملكة العربية السعودية"
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
                تصميم مقاومة الطفو والتثبيت
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                ترتيبات تثبيت لمقاومة الرفع الناتج عن المياه الجوفية.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                مخططات الأساسات والتركيب
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تفاصيل طبقة الفرش والأساسات والتركيب تُورَّد مع الخزان.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات ديزل تحت الأرض
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تخزين وقود مدفون للمولدات والمواقع الصناعية.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                المياه ومياه الصرف تحت الأرض
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات مقاومة للتآكل لخدمة المياه والمياه المصرَّفة المدفونة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                خزانات خدمة المواد الكيميائية
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات أرضية يُختار راتنجها ومادتها وفق المادة الكيميائية.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                ترميم الخزانات القائمة
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                الفحص والترميم حيثما يكون الخزان المدفون قيد الخدمة بالفعل.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            أنواع الخزانات الأرضية
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            لكل نوع صفحة خاصة تتضمن التفاصيل المتعلقة به.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/ar/services/tank-solutions/underground-tanks/frp-underground-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/underground_frp_storage_tank_installation.png"
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
                  تخزين مدفون مقاوم للتآكل، وخيار شائع للخدمة تحت الأرض.
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
              href="/ar/services/tank-solutions/underground-tanks/pe-underground-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/engineered_underground_pe_tank_installation.png"
                  alt="خزان بولي إيثيلين أرضي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان بولي إيثيلين أرضي
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين مدفون للأحجام الأصغر حيث يناسب البولي إيثيلين الخدمة.
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
              href="/ar/services/tank-solutions/underground-tanks/steel-underground-tank"
              className="group relative block overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/silver_steel_tank_installation.png"
                  alt="خزان فولاذي أرضي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خزان فولاذي أرضي
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تخزين فولاذي مدفون، يكون عادةً مطليًا أو مبطنًا للحماية من التآكل.
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
                    المواد
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    FRP/GRP والبولي إيثيلين والفولاذ
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    السوائل المخزنة
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    المياه ومياه الصرف والديزل والمواد الكيميائية والسوائل الصناعية
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    مراجعة التصميم
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    عمق الدفن، وظروف التربة والمياه الجوفية، والأحمال الخارجية وأحمال المرور
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    تفاصيل الموقع
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    الأساسات، والتثبيت، وترتيبات الرفع، وتفاصيل التركيب
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الوصول
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    فتحات التفتيش والفوهات موضوعة للفحص والصيانة
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الأشكال
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    خزانات أسطوانية أفقية ومستطيلة ومخصصة
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
                  المياه والصرف الصحي
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  النفط والغاز
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الطاقة والمرافق
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الإنشاءات والبنية التحتية
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  التصنيع
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  المشاريع التجارية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            من مراجعة الموقع إلى التركيب
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                مراجعة الموقع والأحمال
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                العمق، والتربة، والمياه الجوفية، والمرور، والوصول.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                تصميم التثبيت والأساسات
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                مخططات تغطي التثبيت وطبقة الفرش والرفع.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التصنيع والفحص
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تصنيع الخزان وفحصه وفق التصميم المعتمد.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                دعم التركيب
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                توفير تعليمات التركيب ومتطلبات الأساسات.
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
          </dl>
          <p className="mt-4 max-w-3xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
            تكوينات مرجعية استرشادية من مشاريع وسياقات تصميم سابقة — وليست نطاق كتالوج ملزمًا أو توفرًا حاليًا. وتُؤكَّد السعة والأبعاد النهائية وفق المخطط المعتمد وملف ضمان الجودة لكل مشروع.
          </p>
          <p className="mt-4 max-w-3xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-400 dark:text-white/40">
            لا تحدد هذه المراجع نطاق السعات للمواد أو الخدمات الأرضية الأخرى.
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
                UL 1316
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات أرضية مقواة بالألياف للسوائل القابلة للاشتعال/الاحتراق — تأكد من الطراز المعتمد والخدمة.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                UL 58
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                خزانات فولاذية تحت الأرض للسوائل القابلة للاشتعال/الاحتراق.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
              <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                ASTM D1998 (ملاحظة الدفن)
              </dt>
              <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يقتصر نطاق D1998 على خزانات PE القائمة المصبوبة بالقولبة الدورانية — وليس اعتمادًا عامًا لدفن خزانات PE؛ استخدم أدلة الدفن الخاصة بطراز الشركة المصنعة.
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
                كيف تمنعون طفو الخزان الأرضي عند ارتفاع منسوب المياه الجوفية؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تُصمَّم الخزانات بتفاصيل تثبيت وأساسات تقاوم الطفو. شاركنا معلومات التربة والمياه الجوفية وسيُضمِّن مهندسونا ترتيبات التثبيت في المخططات.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                ما أفضل مادة للخزان الأرضي؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُعد FRP/GRP خيارًا شائعًا لمقاومته للتآكل، ويناسب البولي إيثيلين الأحجام الأصغر، ويُستخدم الفولاذ حيثما يُشترط مع طلاء واقٍ. ونقدم توصيتنا بناءً على السائل والحجم وظروف التربة.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل تقدمون إرشادات التركيب؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم. تُقدَّم تعليمات التركيب ومتطلبات الأساسات مع التصميم، كما تتوفر التفاصيل القياسية عبر المكتبة الفنية لدينا.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
