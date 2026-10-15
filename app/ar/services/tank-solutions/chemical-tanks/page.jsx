// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/tank-solutions/chemical-tanks",
    languages: { en: "/services/tank-solutions/chemical-tanks", ar: "/ar/services/tank-solutions/chemical-tanks", "x-default": "/services/tank-solutions/chemical-tanks" },
  },
  title: "خزانات تخزين المواد الكيميائية في المملكة العربية السعودية",
  description:
    "خزانات تخزين مقاومة للمواد الكيميائية من FRP أو PE/XLPE أو الفولاذ المبطَّن/السبائكي، مع اختيار طريقة التصنيع بناءً على المادة الكيميائية وتركيزها وظروف التشغيل الدقيقة. فالكون تكنولوجيز، المملكة العربية السعودية.",
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
                name: "Chemical Tanks",
                description:
                  "Chemical-resistant storage with construction selected from your exact chemical, concentration and operating conditions \u2014 not from the product name.",
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
                    name: "Which material is best for my chemical?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No single resin or polymer is universally chemical-resistant. The right construction \u2014 FRP with a selected resin, PE/XLPE, or lined/alloy steel \u2014 is chosen from your exact chemical, concentration, temperature and operating conditions, confirmed against supplier evidence.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do you need so much detail about the chemical?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Resistance depends on concentration, temperature, impurities, vapour exposure and cleaning \u2014 and on every wetted part, not just the shell. The nozzles, seals, gaskets and vents are assessed too, since any one can be the weak point.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you confirm suitability from the chemical name alone?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Suitability is service-specific and is only stated once the exact tank system and duty have written supplier or manufacturer confirmation. A chemical name or a past enquiry is not a compatibility approval.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you provide a compatibility record?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes \u2014 a compatibility schedule capturing the chemical, concentration, temperature, cycles, cleaning and containment is documented and drives the material selection.",
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
        title="خزانات المواد الكيميائية"
        description="تخزين مقاوم للمواد الكيميائية مع اختيار طريقة التصنيع بناءً على المادة الكيميائية وتركيزها وظروف التشغيل الدقيقة — لا بناءً على اسم المنتج."
        breadcrumb="خزانات المواد الكيميائية"
        image="/assets/images/tank-solutions/chemical_tanks_category.png"
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
                خزانات تخزين المواد الكيميائية، مطابقة للمادة الكيميائية
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  لا يوجد راتنج أو بوليمر واحد مقاوم لجميع المواد الكيميائية، لذا تعتمد فالكون فئة واحدة لخزانات المواد الكيميائية وتختار طريقة التصنيع بناءً على المادة الكيميائية وظروف التشغيل الدقيقة، بدلًا من الإيحاء بأن خزانًا واحدًا يناسب كل المواد الكيميائية.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  تشمل الأنظمة المرشحة FRP براتنج وحاجز تآكل مختارَين، أو PE / XLPE، أو الفولاذ المبطَّن والسبائكي. ويُقيَّم التوافق على مستوى النظام بأكمله — الهيكل وحيّز الأبخرة والفوهات وموانع التسرب والحشوات وفتحات التهوية وعملية التنظيف — لأن أيًّا منها قد يكون نقطة الضعف.
                </p>
              </div>
              <p className="mt-6 max-w-xl border-s-2 border-brand ps-4 text-xs leading-relaxed text-neutral-500 dark:text-white/50">
                ملاءمة المواد الكيميائية خاصة بكل خدمة، ويجب تأكيدها بأدلة مكتوبة من المورد أو الشركة المصنّعة لنظام الخزان والاستخدام المحددين قبل طلب أي خزان أو تركيبه. ولا تُعد سجلات الاستفسارات السابقة اعتمادات للتوافق.
              </p>
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
                src="/assets/images/tank-solutions/chemical_tanks_category.png"
                alt="خزانات المواد الكيميائية من فالكون تكنولوجيز في المملكة العربية السعودية"
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
                التوصية بالمادة
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُقترح FRP أو PE/XLPE أو الفولاذ المبطَّن/السبائكي بناءً على المادة الكيميائية وظروف التشغيل الدقيقة، لا كخيار افتراضي.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                توافق النظام بالكامل
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُفحص التوافق عبر الهيكل وحيّز الأبخرة والفوهات وموانع التسرب والحشوات وفتحات التهوية وعملية التنظيف.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                FRP مقاوم للمواد الكيميائية
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                راتنج وحاجز تآكل مختاران فوق طبقة إنشائية، مع تحديد عائلة الراتنج والحاجز والمعالجة.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                PE / XLPE حيثما كان مناسبًا
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُنظر فيه عندما تؤكد بيانات المادة الكيميائية ودرجة الحرارة والكثافة والإجهاد ملاءمته، مع مراعاة النفاذية والتشقق الإجهادي.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                فولاذ مبطَّن أو سبائكي
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تبطين داخلي معتمد أو سبيكة مقاومة للتآكل مع خطة فحص وإصلاح للحامات والتجهيزات.
              </p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">
                جدول التوافق
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                سجل موثق للمادة الكيميائية والتركيز ودرجة الحرارة والدورات والتنظيف يُبنى عليه اختيار المادة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            خيارات التصنيع
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
            طرق التصنيع المرشحة لهذه الفئة — ويُختار الأنسب لكل مشروع بناءً على ظروف الخدمة.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/modern_uae_frp_chemical_storage_tank.png"
                  alt="FRP مقاوم للمواد الكيميائية"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  FRP مقاوم للمواد الكيميائية
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  راتنج حراري التصلد وحاجز تآكل مختاران فوق طبقة إنشائية، مناسب لبعض استخدامات المواد الكيميائية — وتعتمد المقاومة على التركيز ودرجة الحرارة والشوائب والتعرض للأبخرة والتنظيف.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/industrial_hdpe_chemical_tank_in_uae.png"
                  alt="خيارات PE / XLPE"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  خيارات PE / XLPE
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  قد تكون LLDPE / HDPE / XLPE خيارات مرشحة فقط عندما تؤكد بيانات المادة الكيميائية ودرجة الحرارة والكثافة والإجهاد وطراز الخزان التوافق، مع مراعاة النفاذية والانتفاخ والتشقق الإجهادي.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900">
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/assets/images/tank-solutions/premium_corrosion-resistant_chemical_storage_tank.png"
                  alt="فولاذ مبطَّن أو سبائكي"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  فولاذ مبطَّن أو سبائكي
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                  فولاذ بتبطين داخلي معتمد أو سبيكة مقاومة للتآكل لاستخدامات محددة — ويتطلب التبطين واللحامات والوصلات والحواف والتجهيزات جميعها مواد متوافقة وخطة فحص/إصلاح.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                جدول التوافق — ما الذي نراجعه
              </h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    المادة الكيميائية
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    الاسم / رقم CAS، ونطاق التركيز والشوائب
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    درجة الحرارة
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    درجة حرارة التشغيل المستمرة والمتقطعة
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الضغط
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    الضغط / التفريغ ودورة التعرض
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    التشغيل
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    التقليب، ومعدل الملء/التفريغ، ومواد التنظيف الكيميائية
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    الاحتواء
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    معالجة التهوية، والعمر التصميمي، والاحتواء الثانوي
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                  <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">
                    النظام بالكامل
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    تقييم الهيكل وحيّز الأبخرة والفوهات وموانع التسرب والحشوات وفتحات التهوية معًا
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
                  مصانع البتروكيماويات والكيماويات
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  النفط والغاز
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  معالجة المياه والحقن الكيميائي
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  منشآت التصنيع والعمليات
                </span>
                <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">
                  الطاقة والمرافق
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
            كيف نحدد مواصفات خزان المواد الكيميائية
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                جمع بيانات الاستخدام
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                اسم المادة الكيميائية/رقم CAS، والتركيز، ودرجة الحرارة، والضغط، والدورات، والتنظيف، والاحتواء.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                تأكيد التوافق
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                مطابقة نظام الخزان والاستخدام المحددين مع أدلة المورد/الشركة المصنّعة — النظام بالكامل، لا الهيكل فقط.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                اختيار طريقة التصنيع
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                اختيار FRP أو PE/XLPE أو الفولاذ المبطَّن/السبائكي وفق الخدمة المؤكدة.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التصنيع والفحص
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تصنيع مع تتبع المواد وفحص وفق خطة ضمان الجودة المتفق عليها.
              </p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand dark:text-brand-light">05</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">
                التوثيق والتسليم
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                إصدار بيانات التوافق وسجلات ضمان الجودة وإرشادات الصيانة عند التسليم.
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
            تُؤكَّد السعة والملاءمة لكل مشروع. ويحدد الراتنج أو المادة والتركيز ودرجة الحرارة وجدول التوافق الكامل طريقة التصنيع قبل الالتزام بأي حجم.
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
                خزانات FRP المقاومة للتآكل المصنّعة بلف الألياف ضمن نطاقه — ولا يعتمد راتنجًا لكل مادة كيميائية.
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
                ما أفضل مادة للمادة الكيميائية لديّ؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                لا يوجد راتنج أو بوليمر واحد مقاوم لجميع المواد الكيميائية. ويُختار التصنيع المناسب — FRP براتنج مختار، أو PE/XLPE، أو الفولاذ المبطَّن/السبائكي — بناءً على المادة الكيميائية وتركيزها ودرجة حرارتها وظروف التشغيل الدقيقة، مع التأكيد بأدلة المورد.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                لماذا تحتاجون كل هذه التفاصيل عن المادة الكيميائية؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                تعتمد المقاومة على التركيز ودرجة الحرارة والشوائب والتعرض للأبخرة والتنظيف — وعلى كل جزء ملامس للسائل، لا الهيكل فقط. لذا تُقيَّم الفوهات وموانع التسرب والحشوات وفتحات التهوية أيضًا، إذ قد يكون أيٌّ منها نقطة الضعف.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل يمكنكم تأكيد الملاءمة من اسم المادة الكيميائية وحده؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                لا. الملاءمة خاصة بكل خدمة، ولا نذكرها إلا بعد الحصول على تأكيد مكتوب من المورد أو الشركة المصنّعة لنظام الخزان والاستخدام المحددين. ولا يُعد اسم المادة الكيميائية أو استفسار سابق اعتمادًا للتوافق.
              </p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل تقدمون سجلًا للتوافق؟
                <Plus
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                نعم — يُوثَّق جدول توافق يتضمن المادة الكيميائية والتركيز ودرجة الحرارة والدورات والتنظيف والاحتواء، ويُبنى عليه اختيار المادة.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
