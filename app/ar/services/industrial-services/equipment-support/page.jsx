// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import Image from "next/image";
import { ArrowRight, ArrowUpLeft, Plus } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/ar/services/industrial-services/equipment-support",
    languages: { en: "/services/industrial-services/equipment-support", ar: "/ar/services/industrial-services/equipment-support", "x-default": "/services/industrial-services/equipment-support" },
  },
  "title": "خدمات دعم المعدات الصناعية في المملكة العربية السعودية",
  "description": "دعم ميداني للمعدات الصناعية في المملكة العربية السعودية — المساعدة في التركيب والخدمة والدعم الفني ضمن النطاق المعتمد لفالكون. فالكون تكنولوجيز."
};

export default function Page() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Service", "name": "Equipment Support", "description": "On-site support for industrial equipment \u2014 installation assistance, servicing and technical help within Falcon's approved scope.", "serviceType": "Industrial Services", "areaServed": "Saudi Arabia", "provider": {"@type": "Organization", "name": "Falcon Technologies"}}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What kind of equipment support do you provide?", "acceptedAnswer": {"@type": "Answer", "text": "Installation assistance, servicing support and on-site technical help, within Falcon's approved scope. Send the details and we confirm what we can support."}}, {"@type": "Question", "name": "Do you work with other contractors?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Support is coordinated with your team, consultants and other contractors on site."}}, {"@type": "Question", "name": "How is the scope defined?", "acceptedAnswer": {"@type": "Answer", "text": "The scope, responsibilities and limits are agreed in writing before work begins."}}]}]}).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="الخدمات الصناعية"
        title="دعم المعدات"
        description="دعم ميداني للمعدات الصناعية — المساعدة في التركيب والخدمة والدعم الفني ضمن النطاق المعتمد لفالكون."
        breadcrumb="دعم المعدات"
        image="/assets/images/services/equipment-support.png"
        imageAlt="دعم المعدات من فالكون تكنولوجيز في المملكة العربية السعودية"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <a
                href="/ar/services/industrial-services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
              >
                <ArrowRight size={13} />
                الخدمات الصناعية
              </a>
              <h2 className="mt-6 max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">
                دعم المعدات الصناعية
              </h2>
              <div className="mt-5 max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                كثيرًا ما تحتاج مشاريع المعدات وعملياتها إلى أيدٍ إضافية وخبرة. تقدم فالكون دعم المعدات للمساعدة في تركيب المعدات الصناعية وخدمتها والحفاظ على تشغيلها، بالعمل جنبًا إلى جنب مع فريقك ومقاوليك.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                يُقدم الدعم فقط ضمن النطاق الذي تمتلك فالكون التجهيزات الفنية والترخيص والتفويض لتنفيذه، ويُحدد معك قبل بدء العمل.
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
              <Image loading="eager" src="/assets/images/services/equipment-support.png" alt="دعم المعدات من فالكون تكنولوجيز في المملكة العربية السعودية" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
              <span className="absolute bottom-4 start-4 rounded-sm bg-ink/90 px-3 py-1.5 text-xs font-medium text-white">
                الخدمات الصناعية
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">ما نقدمه</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">دعم التركيب</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">المساعدة في تموضع المعدات وتوصيلها.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">دعم الخدمة</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">المساعدة في الخدمة الدورية والفحوصات.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">المساعدة الفنية</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">كوادر ذات خبرة في الموقع لتشخيص الأعطال.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">دعم المشاريع</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">دعم أعمال التركيب والإيقاف.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">نطاق واضح</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">الاتفاق على المسؤوليات والحدود قبل البدء.</p>
            </div>
            <div className="border border-neutral-200 bg-white p-7 dark:border-white/10 dark:bg-neutral-950">
              <span className="block h-0.5 w-8 bg-brand" />
              <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-white">السجلات</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/55">توثيق الأعمال المنفذة حسب الاتفاق.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">نطاق الدعم</h2>
              <dl className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-white/10 dark:border-white/10">
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">المساعدة في التركيب</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">دعم التموضع والتوصيل والتركيب</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">الخدمة</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">دعم الخدمة الدورية والفحص</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">الدعم الفني</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">مساعدة فنية وتشخيص الأعطال في الموقع</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">التنسيق</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">العمل مع فريقك والاستشاريين والمقاولين</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">ضبط النطاق</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">محدد مسبقًا ومقتصر على القدرات المعتمدة</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.8fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-800 dark:text-white/85">التوثيق</dt>
                <dd className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">سجلات العمل والتقارير حسب الاتفاق</dd>
              </div>
              </dl>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-[-0.02em] text-neutral-900 dark:text-white">مجالات الاستخدام</h2>
              <div className="mt-5 flex flex-wrap gap-2">
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">التصنيع</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">المباني التجارية والصناعية</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">النفط والغاز</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">الطاقة والمرافق</span>
              <span className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60">الإنشاءات والبنية التحتية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">كيف نقدم الدعم</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">01</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">فهم المتطلبات</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">المعدات والمهمة وظروف الموقع.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">02</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">الاتفاق على النطاق</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">تحديد الدعم ضمن القدرات المعتمدة.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">03</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">تقديم الدعم</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">تنفيذ العمل في الموقع.</p>
            </li>
            <li className="border-t border-neutral-200 pt-4 dark:border-white/10">
              <span className="text-sm font-semibold text-brand">04</span>
              <p className="mt-2 text-sm font-medium text-neutral-900 dark:text-white">التوثيق والتسليم</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-white/55">إصدار السجلات حسب الاتفاق.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-24">
          <h2 className="max-w-xl text-[26px] font-normal leading-[1.2] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[30px]">الأسئلة الشائعة</h2>
          <div className="mt-8 max-w-3xl border-t border-neutral-200 dark:border-white/10">
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                ما نوع دعم المعدات الذي تقدمونه؟
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">المساعدة في التركيب، ودعم الخدمة، والمساعدة الفنية في الموقع، ضمن النطاق المعتمد لفالكون. أرسل لنا التفاصيل وسنؤكد ما يمكننا دعمه.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                هل تعملون مع مقاولين آخرين؟
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">نعم. يُنسق الدعم مع فريقك والاستشاريين والمقاولين الآخرين في الموقع.</p>
            </details>
            <details className="group border-b border-neutral-200 py-5 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-neutral-900 dark:text-white [&::-webkit-details-marker]:hidden">
                كيف يُحدد النطاق؟
                <Plus size={16} className="shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-white/55">يُتفق كتابيًا على النطاق والمسؤوليات والحدود قبل بدء العمل.</p>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
