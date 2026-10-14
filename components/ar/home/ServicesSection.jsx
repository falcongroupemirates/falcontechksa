"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const divisions = [
  {
    id: "tank-solutions",
    href: "/ar/services/tank-solutions",
    label: "حلول الخزانات",
    children: [
      {
        title: "خزانات FRP / GRP",
        href: "/ar/services/tank-solutions/frp-grp-tanks",
        desc: "خزانات ألياف زجاجية لمياه الشرب ومياه الصرف والمواد الكيميائية والديزل — رأسية أو أفقية أو أرضية أو حسب الطلب، بتقنيتي التصفيح اليدوي واللف الخيطي.",
        image: "/assets/images/services/frp-grp-tanks.png",
        alt: "خزان تخزين من الألياف الزجاجية FRP GRP من تصنيع فالكون تكنولوجيز في المملكة العربية السعودية",
      },
      {
        title: "خزانات البولي إيثيلين",
        href: "/ar/services/tank-solutions/polyethylene-tanks",
        desc: "خزانات LLDPE/HDPE مصبوبة بالقولبة الدورانية لتخزين المياه والمواد الكيميائية، متوفرة رأسية أو أفقية أو أرضية.",
        image: "/assets/images/services/polyethylene-tanks.png",
        alt: "خزان تخزين مياه من البولي إيثيلين LLDPE HDPE",
      },
      {
        title: "أنظمة الخزانات الفولاذية",
        href: "/ar/services/tank-solutions/steel-tank-systems",
        desc: "خزانات فولاذية مصنّعة مع الدعامات والقواعد (السكيد)، مصمّمة لتخزين الديزل والوقود والتخزين الصناعي العام.",
        image: "/assets/images/services/steel-tank-systems.png",
        alt: "نظام خزان تخزين فولاذي مصنّع مع قواعد دعم (سكيد)",
      },
    ],
  },
  {
    id: "thermal-insulation",
    href: "/ar/services/thermal-insulation",
    label: "قسم العزل الحراري",
    children: [
      {
        title: "عزل خزانات التخزين",
        href: "/ar/services/thermal-insulation/storage-tank-insulation",
        desc: "عزل للخزانات الفولاذية وخزانات FRP يحدّ من اكتساب الحرارة الشمسية ويثبّت درجة حرارة المنتج المخزَّن.",
        image: "/assets/images/services/storage-tank-insulation.png",
        alt: "عزل حراري مطبّق على خزان تخزين صناعي",
      },
      {
        title: "عزل الأنابيب والمعدات",
        href: "/ar/services/thermal-insulation/pipe-equipment-insulation",
        desc: "عزل للأنابيب ومجاري الهواء ومعدات العمليات في أنحاء المصنع.",
        image: "/assets/images/services/pipe-equipment-insulation.png",
        alt: "أنابيب صناعية ومعدات عمليات معزولة",
      },
      {
        title: "عزل المباني والأسطح",
        href: "/ar/services/thermal-insulation/building-roof-insulation",
        desc: "عزل لأسطح المصانع والمستودعات والمباني الصناعية.",
        image: "/assets/images/services/building-roof-insulation.png",
        alt: "تركيب عزل لسطح مصنع صناعي",
      },
      {
        title: "عزل غرف المعدات",
        href: "/ar/services/thermal-insulation/equipment-room-insulation",
        desc: "عزل لغرف الكهرباء وغرف التحكم ومناطق الآلات المغلقة.",
        image: "/assets/images/services/equipment-room-insulation.png",
        alt: "غرفة معدات كهربائية وتحكم معزولة",
      },
    ],
  },
  {
    id: "aerogel",
    href: "/ar/services/thermal-insulation/aerogel-thermal-insulation",
    label: "العزل الحراري بالأيروجيل",
    single: {
      image: "/assets/images/services/aerogel-insulation.png",
      alt: "بطانية عزل حراري من الأيروجيل مركّبة على معدات صناعية",
      paragraph:
        "الأيروجيل مادة عزل عالية المسامية توفّر موصلية حرارية منخفضة في نظام رقيق وخفيف الوزن نسبيًا — خيار مثالي حيث تكون المساحة أو الوزن محدودين.",
      features: [
        "موصلية حرارية منخفضة",
        "بنية خفيفة الوزن",
        "مقاومة الرطوبة",
        "تركيبات مثبطة للهب",
        "الحدّ من الضوضاء",
        "توفير المساحة",
      ],
      applications: [
        "خزانات التخزين",
        "المباني الصناعية",
        "خزائن المعدات",
        "الأسطح",
        "معدات عمليات مختارة",
      ],
      disclaimer:
        "يعتمد أداء العزل الفعلي على درجة المنتج، والسطح، والسماكة، والظروف المحيطة، وتجهيز السطح، وظروف التطبيق. ويتم تأكيد الأداء النهائي وفقًا للبيانات الفنية المعتمدة ومتطلبات المشروع.",
    },
  },
  {
    id: "tank-restoration",
    href: "/ar/services/tank-restoration-lining",
    label: "ترميم وإعادة تأهيل الخزانات",
    children: [
      {
        title: "ترميم خزانات FRP",
        href: "/ar/services/tank-restoration-lining/tank-restoration/frp-restoration",
        desc: "إصلاح التشققات والتسربات، والتدعيم الإنشائي، وترميم الفوهات وفتحات الدخول لخزانات FRP.",
        image: "/assets/images/services/frp-tank-restoration.png",
        alt: "أعمال ترميم التشققات والتسربات في خزان FRP",
      },
      {
        title: "أعمال ترميم وإعادة تأهيل أخرى",
        href: "/ar/services/tank-restoration-lining/tank-rehabilitation",
        desc: "دعم ترميم خزانات البولي إيثيلين والفولاذ، إضافة إلى إعادة تأهيل الخزانات الخرسانية بما يشمل العزل المائي والتبطين.",
        image: "/assets/images/services/tank-rehabilitation.png",
        alt: "إعادة تأهيل الخزانات الخرسانية وعزلها مائيًا",
      },
    ],
  },
  {
    id: "tank-lining",
    href: "/ar/services/tank-restoration-lining",
    label: "تبطين الخزانات",
    children: [
      {
        title: "تبطين FRP / GRP",
        href: "/ar/services/tank-restoration-lining/frp-grp-lining",
        desc: "تبطين بالألياف الزجاجية لمقاومة التآكل والمواد الكيميائية في الخزانات والأوعية.",
        image: "/assets/images/services/frp-lining.png",
        alt: "تطبيق تبطين خزانات FRP GRP",
      },
      {
        title: "تبطين مقاوم للمواد الكيميائية",
        href: "/ar/services/tank-restoration-lining/chemical-resistant-lining",
        desc: "أنظمة راتنجات تتوافق مع المادة الكيميائية المحددة وتركيزها ودرجة حرارة التشغيل.",
        image: "/assets/images/services/chemical-resistant-lining.png",
        alt: "نظام تبطين خزانات مقاوم للمواد الكيميائية",
      },
      {
        title: "تبطين الخزانات الخرسانية",
        href: "/ar/services/tank-restoration-lining/concrete-tank-lining",
        desc: "تبطين للخزانات الخرسانية والخزانات الأرضية الكبيرة، بما يشمل سدّ التشققات والعزل المائي.",
        image: "/assets/images/services/concrete-tank-lining.png",
        alt: "تبطين وعزل مائي لخزان مياه خرساني",
      },
      {
        title: "تبطين الخزانات الفولاذية",
        href: "/ar/services/tank-restoration-lining/steel-tank-lining",
        desc: "تبطين داخلي يحمي الخزانات الفولاذية من التآكل ويحافظ على جودة المنتج.",
        image: "/assets/images/services/steel-tank-lining.png",
        alt: "تطبيق تبطين داخلي لخزان فولاذي",
      },
      {
        title: "تبطين عازل للماء",
        href: "/ar/services/tank-restoration-lining/waterproof-lining",
        desc: "أنظمة أغشية وطلاءات توقف التسربات وتسرّب الرطوبة.",
        image: "/assets/images/services/waterproof-lining.png",
        alt: "تركيب غشاء تبطين عازل للماء",
      },
      {
        title: "الحماية من التآكل",
        href: "/ar/services/tank-restoration-lining/corrosion-protection",
        desc: "تجهيز الأسطح وطلاء واقٍ لحماية الأصول على المدى الطويل.",
        image: "/assets/images/services/corrosion-protection.png",
        alt: "طلاء صناعي للحماية من التآكل",
      },
    ],
  },
  {
    id: "industrial-services",
    href: "/ar/services/industrial-services",
    label: "الخدمات الصناعية",
    children: [
      {
        title: "فحص الخزانات",
        href: "/ar/services/industrial-services/tank-inspection",
        desc: "فحص بصري وبُعدي وفحص للسماكة لتقييم حالة الخزان.",
        image: "/assets/images/services/tank-inspection.png",
        alt: "فحص خزان صناعي قيد التنفيذ",
      },
      {
        title: "ترميم وإعادة تأهيل الخزانات",
        href: "/ar/services/tank-restoration-lining/tank-restoration",
        desc: "دعم الإصلاح والتدعيم للخزانات المتقادمة.",
        image: "/assets/images/services/industrial-tank-restoration.png",
        alt: "أعمال ترميم وإعادة تأهيل الخزانات",
      },
      {
        title: "العزل الحراري",
        href: "/ar/services/thermal-insulation",
        desc: "دعم أعمال العزل بالتوازي مع الأعمال الصناعية الأخرى في الموقع.",
        image: "/assets/images/services/industrial-insulation.png",
        alt: "دعم العزل الحراري الصناعي",
      },
      {
        title: "تبطين FRP والعزل المائي",
        href: "/ar/services/tank-restoration-lining/frp-grp-lining",
        desc: "تبطين واقٍ للخزانات ومنشآت الاحتواء.",
        image: "/assets/images/services/frp-lining-waterproofing.png",
        alt: "خدمة تبطين FRP والعزل المائي",
      },
      {
        title: "الطلاء الصناعي",
        href: "/ar/services/industrial-services/industrial-coating",
        desc: "طلاء مقاوم للتآكل للمعدات والمنشآت الصناعية.",
        image: "/assets/images/services/industrial-coating.png",
        alt: "تطبيق طلاء صناعي واقٍ",
      },
      {
        title: "المساحة والمسح",
        href: "/ar/services/survey-scanning",
        desc: "دعم المسح ثلاثي الأبعاد والمساحة للأصول والمواقع القائمة.",
        image: "/assets/images/services/survey-scanning.png",
        alt: "مسح ثلاثي الأبعاد وأعمال مساحة لموقع صناعي",
      },
      {
        title: "الصيانة الميكانيكية",
        href: "/ar/services/industrial-services/mechanical-maintenance",
        desc: "الصيانة الميكانيكية ودعم المعدات لمرافق الموقع.",
        image: "/assets/images/services/mechanical-maintenance.png",
        alt: "الصيانة الميكانيكية للمعدات الصناعية",
      },
      {
        title: "دعم المعدات",
        href: "/ar/services/industrial-services/equipment-support",
        desc: "دعم عام للمعدات في العمليات الصناعية المستمرة.",
        image: "/assets/images/services/equipment-support.png",
        alt: "خدمة دعم المعدات الصناعية",
      },
      {
        title: "تركيب وصيانة المبردات",
        href: "/ar/services/industrial-services/chiller-installation-maintenance",
        desc: "تركيب جديد وتشغيل تجريبي وصيانة وقائية للمبردات.",
        image: "/assets/images/services/chiller-installation.png",
        alt: "تركيب وصيانة المبردات في المملكة العربية السعودية",
      },
    ],
  },
];

// Single row of cards that auto-scrolls right and can be dragged (mouse,
// touch or pen) to browse manually. Content is duplicated once so the
// auto-scroll can loop seamlessly instead of snapping back to the start.
function AutoScrollRow({ items, renderItem, speed = 0.5 }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const movedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;

    const tick = () => {
      if (el && !pausedRef.current && !draggingRef.current) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [items, speed]);

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = el.scrollLeft;
    el.style.userSelect = "none";
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current || !trackRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (!movedRef.current && Math.abs(dx) > 3) {
      movedRef.current = true;
      // Capture only once a real drag starts — capturing on pointerdown
      // would swallow normal clicks on the card links.
      trackRef.current.setPointerCapture?.(e.pointerId);
    }
    trackRef.current.scrollLeft = startScrollRef.current - dx;
  };

  const endDrag = () => {
    draggingRef.current = false;
    if (trackRef.current) trackRef.current.style.userSelect = "";
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      dir="ltr"
      className="flex cursor-grab gap-5 overflow-x-hidden active:cursor-grabbing"
    >
      {[...items, ...items].map((item, i) =>
        renderItem(item, i, () => movedRef.current),
      )}
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const division = divisions[active];

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-17.5 sm:px-8 sm:py-20 lg:px-8 xl:px-0 lg:py-23">
        <h2 className="max-w-lg text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[34px]">
          حلول الخزانات لدينا
        </h2>
        {/* <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-white/55">
          Tank manufacturing, thermal insulation, restoration and lining, and
          industrial services — backed by inspection and quality assurance on
          every job across Saudi Arabia.
        </p> */}

        {/* TAB BAR — moving indicator */}
        <div className="relative mt-10 flex gap-1 overflow-x-auto border-b border-neutral-200 dark:border-white/10">
          {divisions.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(i)}
              className="relative shrink-0 whitespace-nowrap px-4 py-3.5 text-sm font-medium transition-colors sm:px-5"
            >
              <span
                className={
                  active === i
                    ? "relative z-10 text-white"
                    : "relative z-10 text-neutral-500 dark:text-white/50"
                }
              >
                {d.label}
              </span>
              {active === i && (
                <motion.span
                  layoutId="service-tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-x-1 top-1.5 bottom-1.5 rounded-sm bg-ink"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative mt-10 min-h-75">
          <AnimatePresence mode="wait">
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="sr-only">{division.label}</h3>

              {division.children ? (
                <>
                  <AutoScrollRow
                    items={division.children}
                    renderItem={(child, i, wasDragged) => (
                      <Link
                        key={`${child.title}-${i}`}
                        href={child.href}
                        draggable={false}
                      dir="rtl"
                        // a drag across the row shouldn't count as a click
                        onClickCapture={(e) => {
                          if (wasDragged()) e.preventDefault();
                        }}
                        className="group block w-100 shrink-0 overflow-hidden rounded-sm border border-neutral-200 bg-white transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:border-white/10 dark:bg-neutral-900"
                      >
                        <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={child.image}
                            alt={child.alt}
                            fill
                            draggable={false}
                            sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                            className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
                        </div>
                        <div className="p-5">
                          <h4 className="flex items-center justify-between gap-3 text-base font-semibold text-neutral-900 transition-colors group-hover:text-brand dark:text-white">
                            {child.title}
                            <ArrowUpLeft
                              size={16}
                              aria-hidden="true"
                              className="shrink-0 text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-brand"
                            />
                          </h4>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                            {child.desc}
                          </p>
                        </div>
                      </Link>
                    )}
                  />
                  <Link
                    href={division.href}
                    className="mt-8 inline-flex items-center gap-1.5 border-b border-neutral-900 pb-0.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white"
                  >
                    عرض الكل {division.label}
                    <ArrowUpLeft size={15} aria-hidden="true" />
                  </Link>
                </>
              ) : (
                <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-neutral-200 dark:border-white/10 lg:grid-cols-2">
                  <Link
                    href={division.href}
                    className="group relative block aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-800 lg:aspect-auto"
                  >
                    <Image
                      src={division.single.image}
                      alt={division.single.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="bg-neutral-50 p-8 dark:bg-neutral-900 sm:p-10">
                    <p className="max-w-lg text-sm leading-relaxed text-neutral-600 dark:text-white/60">
                      {division.single.paragraph}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-white/40">
                          مجالات التميّز
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {division.single.features.map((f) => (
                            <span
                              key={f}
                              className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-white/40">
                          التطبيقات
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {division.single.applications.map((a) => (
                            <span
                              key={a}
                              className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-white/60"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 max-w-lg text-xs leading-relaxed text-neutral-400 dark:text-white/35">
                      {division.single.disclaimer}
                    </p>

                    <Link
                      href={division.href}
                      className="mt-6 inline-flex items-center gap-1.5 border-b border-neutral-900 pb-0.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white"
                    >
                      عرض {division.label}
                      <ArrowUpLeft size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
