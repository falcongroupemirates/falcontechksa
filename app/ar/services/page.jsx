// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import StandardsBar from "@/components/ar/services/StandardsBar";
import IndustriesGrid from "@/components/ar/services/IndustriesGrid";
import CTASection from "@/components/ar/home/CTASection";

/*
  /services — full service catalogue.
  Self-contained: every style lives in this file.
  - Add a service: add { label, href, image, alt, desc } to a division's `items`.
  - Add a division: add an object to `divisions`.
  Each division ends with an "overview" tile, so the grid stays even:
  total tiles divisible by 4 → 4 columns, otherwise 3 columns.
*/

export const metadata = {
  alternates: {
    canonical: "/ar/services",
    languages: { en: "/services", ar: "/ar/services", "x-default": "/services" },
  },
  title:
    "الخدمات الصناعية في المملكة العربية السعودية — الخزانات والعزل والتبطين والمسح ثلاثي الأبعاد",
  description:
    "مجموعة خدمات فالكون تكنولوجيز الكاملة في المملكة العربية السعودية: خزانات FRP والبولي إيثيلين والفولاذ، والعزل الحراري وعزل الأيروجيل، وترميم وتبطين الخزانات، والصيانة الصناعية، وخدمات المبردات، والمساحة والمسح الليزري ثلاثي الأبعاد.",
};

const TS = "/assets/images/tank-solutions";
const SV = "/assets/images/services";

const divisions = [
  {
    id: "tank-solutions",
    image: `${TS}/saudi_industrial_frp_tank_system.png`,
    alt: "نظام خزانات FRP في موقع صناعي سعودي",
    name: "حلول الخزانات",
    href: "/ar/services/tank-solutions",
    desc: "خزانات الألياف الزجاجية FRP/GRP وخزانات البولي إيثيلين والفولاذ، مصممة وفقًا للمادة المخزنة ودرجة حرارتها وظروف الموقع — للمياه والديزل والوقود والمواد الكيميائية، فوق الأرض أو تحت الأرض.",
    items: [
      {
        label: "خزانات FRP / GRP",
        href: "/ar/services/tank-solutions/frp-grp-tanks",
        image: `${TS}/engineered_frp_tanks_in_saudi_facility.png`,
        alt: "خزانات تخزين FRP/GRP مصممة هندسيًا في منشأة صناعية سعودية",
        desc: "خزانات من الألياف الزجاجية مصنوعة من رقائق FRP الخاصة بفالكون.",
      },
      {
        label: "خزانات البولي إيثيلين",
        href: "/ar/services/tank-solutions/polyethylene-tanks",
        image: `${TS}/heavy-duty_polyethylene_tanks_in_gulf_facility.png`,
        alt: "خزانات تخزين من البولي إيثيلين للخدمة الشاقة في منشأة خليجية",
        desc: "خزانات بدون فواصل مصنوعة بالقولبة الدورانية، رأسية أو أفقية أو مدفونة.",
      },
      {
        label: "أنظمة الخزانات الفولاذية",
        href: "/ar/services/tank-solutions/steel-tank-systems",
        image: `${TS}/industrial_steel_tank_systems_showcase.png`,
        alt: "أنظمة خزانات فولاذية صناعية مُصنّعة",
        desc: "خزانات فولاذية مُصنّعة ومثبتة على قواعد (سكيد) وخزانات للعمليات.",
      },
      {
        label: "خزانات المياه",
        href: "/ar/services/tank-solutions/water-tanks",
        image: `${TS}/modern_uae_water_storage_facility.png`,
        alt: "خزانات تخزين المياه في منشأة تخزين حديثة",
        desc: "مياه الشرب ومياه العمليات ومياه الخدمات ومياه الحريق والري.",
      },
      {
        label: "خزانات المواد الكيميائية",
        href: "/ar/services/tank-solutions/chemical-tanks",
        image: `${TS}/chemical_tanks_category.png`,
        alt: "خزانات تخزين المواد الكيميائية في مصنع صناعي",
        desc: "اختيار المادة والراتنج حسب نوع المادة الكيميائية ودرجة الحرارة.",
      },
      {
        label: "خزانات الديزل والوقود",
        href: "/ar/services/tank-solutions/diesel-fuel-tanks",
        image: `${TS}/fuel_storage_solutions_industrial_yard.png`,
        alt: "خزانات تخزين الديزل والوقود في ساحة صناعية",
        desc: "خزانات يومية للمولدات وتخزين الوقود بكميات كبيرة.",
      },
      {
        label: "الخزانات الأرضية",
        href: "/ar/services/tank-solutions/underground-tanks",
        image: `${TS}/underground_tank_installation_cutaway.png`,
        alt: "مقطع توضيحي لتركيب خزان تخزين تحت الأرض",
        desc: "خزانات FRP والبولي إيثيلين والفولاذ المصنفة للدفن.",
      },
    ],
  },
  {
    id: "thermal-insulation",
    image: `${SV}/industrial-insulation.png`,
    alt: "عزل حراري صناعي على الخزانات وشبكات الأنابيب",
    name: "العزل الحراري",
    href: "/ar/services/thermal-insulation",
    desc: "أنظمة عزل، بما فيها الأيروجيل، تقلل فقدان الحرارة والاكتساب الشمسي وتقلبات درجات الحرارة في الخزانات وشبكات الأنابيب والمباني وغرف المعدات.",
    items: [
      {
        label: "عزل خزانات التخزين",
        href: "/ar/services/thermal-insulation/storage-tank-insulation",
        image: `${SV}/storage-tank-insulation.png`,
        alt: "عزل وكسوة على خزان تخزين صناعي",
        desc: "يحافظ على درجة حرارة السوائل المخزنة في حرارة الخليج.",
      },
      {
        label: "عزل الأنابيب والمعدات",
        href: "/ar/services/thermal-insulation/pipe-equipment-insulation",
        image: `${SV}/pipe-equipment-insulation.png`,
        alt: "أنابيب ومعدات عمليات معزولة",
        desc: "الخطوط الساخنة والباردة والصمامات والأوعية.",
      },
      {
        label: "عزل المباني والأسطح",
        href: "/ar/services/thermal-insulation/building-roof-insulation",
        image: `${SV}/building-roof-insulation.png`,
        alt: "عزل أسطح مطبّق على مبنى صناعي",
        desc: "تقليل الاكتساب الشمسي عبر الأسطح والجدران.",
      },
      {
        label: "عزل غرف المعدات",
        href: "/ar/services/thermal-insulation/equipment-room-insulation",
        image: `${SV}/equipment-room-insulation.png`,
        alt: "غرفة معدات ومحطة معزولة",
        desc: "ظروف مستقرة لغرف المحطات والغرف الكهربائية.",
      },
      {
        label: "العزل الحراري بالأيروجيل",
        href: "/ar/services/thermal-insulation/aerogel-thermal-insulation",
        image: `${SV}/aerogel-insulation.png`,
        alt: "تركيب بطانية عزل من الأيروجيل",
        desc: "أداء عالٍ حيث تكون المساحة محدودة.",
      },
    ],
  },
  {
    id: "tank-restoration-lining",
    image: `${SV}/frp-tank-restoration.png`,
    alt: "خزان FRP أثناء ترميمه وإعادة تبطينه",
    name: "ترميم وتبطين الخزانات",
    href: "/ar/services/tank-restoration-lining",
    desc: "إصلاح التشققات والتدعيم الإنشائي وأنظمة التبطين التي تعيد الخزانات الفولاذية والخرسانية وخزانات FRP القائمة إلى الخدمة بدلًا من استبدالها.",
    items: [
      {
        label: "ترميم الخزانات",
        href: "/ar/services/tank-restoration-lining/tank-restoration",
        image: `${SV}/industrial-tank-restoration.png`,
        alt: "خزان تخزين صناعي قيد الترميم",
        desc: "إعادة خزانات FRP والفولاذ وPE إلى الخدمة.",
      },
      {
        label: "إعادة تأهيل الخزانات",
        href: "/ar/services/tank-restoration-lining/tank-rehabilitation",
        image: `${SV}/tank-rehabilitation.png`,
        alt: "إعادة التأهيل الإنشائي لخزان متقادم",
        desc: "إصلاح إنشائي للأصول المتقادمة.",
      },
      {
        label: "تبطين FRP / GRP",
        href: "/ar/services/tank-restoration-lining/frp-grp-lining",
        image: `${SV}/frp-lining.png`,
        alt: "تبطين FRP مطبّق داخل خزان تخزين",
        desc: "حاجز جديد من الألياف الزجاجية داخل الهيكل القائم.",
      },
      {
        label: "تبطين مقاوم للمواد الكيميائية",
        href: "/ar/services/tank-restoration-lining/chemical-resistant-lining",
        image: `${SV}/chemical-resistant-lining.png`,
        alt: "تبطين مقاوم للمواد الكيميائية في خزان عمليات",
        desc: "أنظمة يتم اختيارها حسب المادة الكيميائية المخزنة.",
      },
      {
        label: "تبطين عازل للماء",
        href: "/ar/services/tank-restoration-lining/waterproof-lining",
        image: `${SV}/waterproof-lining.png`,
        alt: "تبطين عازل للماء مطبّق على خزان مياه",
        desc: "يوقف التسربات في خزانات المياه والأحواض.",
      },
      {
        label: "تبطين الخزانات الفولاذية",
        href: "/ar/services/tank-restoration-lining/steel-tank-lining",
        image: `${SV}/steel-tank-lining.png`,
        alt: "تبطين داخلي لخزان تخزين فولاذي",
        desc: "يحمي الهياكل الفولاذية من التآكل الداخلي.",
      },
      {
        label: "تبطين الخزانات الخرسانية",
        href: "/ar/services/tank-restoration-lining/concrete-tank-lining",
        image: `${SV}/concrete-tank-lining.png`,
        alt: "تبطين وعزل مائي لخزان خرساني",
        desc: "معالجة التشققات وتبطين الخزانات الخرسانية.",
      },
      {
        label: "الحماية من التآكل",
        href: "/ar/services/tank-restoration-lining/corrosion-protection",
        image: `${SV}/corrosion-protection.png`,
        alt: "طلاء للحماية من التآكل على خزان فولاذي",
        desc: "طلاءات تبطئ تآكل الفولاذ المكشوف.",
      },
    ],
  },
  {
    id: "industrial-services",
    image: `${SV}/mechanical-maintenance.png`,
    alt: "فريق موقع صناعي ينفذ أعمال الصيانة",
    name: "الخدمات الصناعية",
    href: "/ar/services/industrial-services",
    desc: "الفحص والطلاء والصيانة الميكانيكية وتركيب وصيانة المبردات، ينفذها فريق موقع واحد مسؤول.",
    items: [
      {
        label: "فحص الخزانات",
        href: "/ar/services/industrial-services/tank-inspection",
        image: `${SV}/tank-inspection.png`,
        alt: "فني يفحص خزان تخزين صناعي",
        desc: "فحوصات الحالة قبل الإصلاح أو إعادة الاعتماد.",
      },
      {
        label: "الطلاء الصناعي",
        href: "/ar/services/industrial-services/industrial-coating",
        image: `${SV}/industrial-coating.png`,
        alt: "تطبيق طلاء صناعي واقٍ",
        desc: "طلاءات واقية للخزانات والفولاذ والمحطات.",
      },
      {
        label: "الصيانة الميكانيكية",
        href: "/ar/services/industrial-services/mechanical-maintenance",
        image: `${SV}/mechanical-maintenance.png`,
        alt: "صيانة ميكانيكية لمعدات صناعية",
        desc: "صيانة مخططة وصيانة أعطال في الموقع.",
      },
      {
        label: "دعم المعدات",
        href: "/ar/services/industrial-services/equipment-support",
        image: `${SV}/equipment-support.png`,
        alt: "مهندس يدعم معدات صناعية في الموقع",
        desc: "تركيب ودعم معدات المحطات.",
      },
      {
        label: "تركيب وصيانة المبردات",
        href: "/ar/services/industrial-services/chiller-installation-maintenance",
        image: `${SV}/chiller-installation.png`,
        alt: "تركيب مبرد صناعي وتشغيله التجريبي",
        desc: "تركيبات جديدة وخدمة وإصلاح.",
      },
    ],
  },
  {
    id: "survey-scanning",
    image: `${SV}/survey-scanning.png`,
    alt: "المساحة والمسح ثلاثي الأبعاد لمنشأة قائمة",
    name: "المساحة والمسح ثلاثي الأبعاد",
    href: "/ar/services/survey-scanning",
    desc: "نمسح المحطات والمباني والمكونات القائمة، ثم نسلّم مخططات الوضع القائم أو نماذج BIM أو مجسمات CAD من نفس الواقع الملتقط.",
    items: [
      {
        label: "المسح الليزري ثلاثي الأبعاد",
        href: "/ar/services/survey-scanning/3d-laser-scanning",
        image: `${SV}/3d-laser-scanning.jpg`,
        alt: "ماسح ليزري ثلاثي الأبعاد يلتقط محطة صناعية قائمة",
        desc: "سحابات نقاط مقاسة للمواقع القائمة.",
      },
      {
        label: "مسح الوضع القائم (As-Built)",
        href: "/ar/services/survey-scanning/as-built-survey",
        image: `${SV}/as-built-survey.jpg`,
        alt: "مخططات مسح الوضع القائم لمنشأة قائمة",
        desc: "مخططات لما تم بناؤه فعليًا.",
      },
      {
        label: "التحويل من المسح إلى BIM",
        href: "/ar/services/survey-scanning/scan-to-bim",
        image: `${SV}/scan-to-bim.jpg`,
        alt: "سحابة نقاط محوّلة إلى نموذج BIM",
        desc: "تحويل سحابات النقاط إلى نماذج BIM.",
      },
      {
        label: "نمذجة BIM",
        href: "/ar/services/survey-scanning/bim-modelling",
        image: `${SV}/bim-modelling.jpg`,
        alt: "نموذج BIM منسّق لمبنى وأنظمة خدماته",
        desc: "نماذج منسّقة مع كشف التعارضات.",
      },
      {
        label: "الهندسة العكسية",
        href: "/ar/services/survey-scanning/reverse-engineering",
        image: `${SV}/reverse-engineering-scanning.jpg`,
        alt: "مكوّن صناعي ممسوح أُعيد بناؤه بصيغة CAD",
        desc: "قطع ممسوحة يُعاد بناؤها كنماذج CAD قابلة للتعديل.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "خدمات فالكون تكنولوجيز",
  itemListElement: divisions.map((d) => ({
    "@type": "OfferCatalog",
    name: d.name,
    url: d.href,
    itemListElement: d.items.map((i) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: i.label,
        description: i.desc,
        url: i.href,
        areaServed: "المملكة العربية السعودية",
      },
    })),
  })),
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="خدماتنا"
        title="حلول هندسية من أول استفسار حتى التسليم النهائي"
        description="الخزانات والعزل والترميم والتبطين وخدمات المواقع والمسح ثلاثي الأبعاد — كل خدمة مدعومة بهندسة التطبيقات وجودة موثقة."
        breadcrumb="الخدمات"
        image={`${TS}/engineered_atmospheric_storage_tank.png`}
        imageAlt="خزان تخزين جوي مصمم هندسيًا من تصنيع فالكون تكنولوجيز"
      />

      {/* ============ ONE SECTION PER DIVISION ============ */}
      {divisions.map((d, i) => {
        const tiles = d.items.length + 1; // + overview tile
        const cols =
          tiles % 4 === 0
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3";
        const imgRatio = tiles % 4 === 0 ? "sm:aspect-4/3" : "sm:aspect-video";
        const alt = i % 2 === 1;

        return (
          <section
            key={d.id}
            id={d.id}
            aria-labelledby={`${d.id}-title`}
            className={`w-full scroll-mt-28 ${
              alt ? "bg-neutral-50 dark:bg-neutral-900" : "bg-white dark:bg-neutral-950"
            }`}
          >
            <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 xl:px-0">
              {/* Division header */}
              <div className="grid grid-cols-1 gap-6 border-b border-neutral-200 pb-10 dark:border-white/10 lg:grid-cols-12 lg:items-end lg:gap-12">
                <h2
                  id={`${d.id}-title`}
                  className="text-3xl font-normal leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:col-span-5"
                >
                  {d.name}
                </h2>
                <div className="lg:col-span-7">
                  <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/60">
                    {d.desc}
                  </p>
                  <p className="mt-4 text-sm text-neutral-500 dark:text-white/50">
                    {d.items.length} خدمات
                  </p>
                </div>
              </div>

              {/* Service cards */}
              <ul className={`mt-10 grid grid-cols-1 gap-5 ${cols}`}>
                {d.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex h-full flex-row overflow-hidden rounded-sm border sm:flex-col border-neutral-200 bg-white transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-white/10 dark:bg-neutral-900"
                    >
                      <div className={`relative min-h-28 w-28 shrink-0 self-stretch overflow-hidden bg-mist dark:bg-white/5 sm:min-h-0 sm:w-auto sm:self-auto ${imgRatio}`}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 112px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="text-lg font-medium leading-snug text-neutral-900 transition-colors group-hover:text-brand dark:text-white">
                          {item.label}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                          {item.desc}
                        </p>
                        <span className="mt-4 hidden items-center gap-1.5 text-sm font-semibold sm:inline-flex text-neutral-900 transition-colors group-hover:text-brand dark:text-white">
                          عرض الخدمة
                          <ArrowUpLeft
                            size={15}
                            aria-hidden="true"
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}

                {/* Overview tile — closes each division */}
                <li>
                  <Link
                    href={d.href}
                    className="group relative flex h-full min-h-48 flex-col justify-between overflow-hidden rounded-sm bg-ink p-6 sm:min-h-64 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <Image
                      src={d.image}
                      alt={d.alt}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-ink/80 transition-colors duration-300 group-hover:bg-brand/85" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-white">
                      <ArrowUpLeft
                        size={20}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                      />
                    </span>
                    <span className="relative">
                      <span className="block text-sm text-white/70">
                        نظرة عامة على القسم
                      </span>
                      <span className="mt-1 block text-2xl font-normal leading-tight tracking-tight">
                        استكشف {d.name}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        );
      })}

      <StandardsBar />
      <IndustriesGrid />
      <CTASection />
    </div>
  );
}
