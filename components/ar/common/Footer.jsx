// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import Link from "next/link";

import { MapPin, Phone, Mail, Clock3, ArrowUpLeft } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

const services = [
  {
    name: "حلول الخزانات",
    href: "/ar/services/tank-solutions",
  },
  {
    name: "العزل الحراري",
    href: "/ar/services/thermal-insulation",
  },
  {
    name: "ترميم وتبطين الخزانات",
    href: "/ar/services/tank-restoration-lining",
  },
  {
    name: "الخدمات الصناعية",
    href: "/ar/services/industrial-services",
  },
  {
    name: "تركيب وصيانة المبردات",
    href: "/ar/services/industrial-services/chiller-installation-maintenance",
  },
  {
    name: "المساحة والمسح ثلاثي الأبعاد",
    href: "/ar/services/survey-scanning",
  },
  {
    name: "فحص الخزانات",
    href: "/ar/services/industrial-services/tank-inspection",
  },
];

const quickLinks = [
  {
    name: "عن فالكون",
    href: "/ar/about-us",
  },
  {
    name: "خدماتنا",
    href: "/ar/services",
  },
  {
    name: "مشاريعنا",
    href: "/ar/projects",
  },
  {
    name: "معرض الصور",
    href: "/ar/gallery",
  },
  {
    name: "المكتبة الفنية",
    href: "/ar/technical-library",
  },
  {
    name: "اتصل بنا",
    href: "/ar/contact-us",
  },
];

export default function Footer() {
  return (
    <footer lang="ar" dir="rtl"
      id="footer"
      className="relative overflow-hidden bg-[#242529] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#242529]" />

        <div className="absolute bottom-0 start-[8%] h-105 w-105 rounded-full bg-brand/2.5 blur-[120px]" />

        <div className="absolute end-[5%] top-[10%] h-75 w-75 rounded-full bg-white/2 blur-[100px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            bg-size-[80px_80px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8 xl:px-0">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-16
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-14
            lg:grid-cols-[1.45fr_1fr_0.9fr_1.15fr]
            lg:gap-14
            lg:py-16
          "
        >
          {/* =================================================
              COMPANY
          ================================================== */}

          <div>
            <Link href="/ar" className="group block">
              {/* Logo mark — wide horizontal lockup, so it fills the column
                  width (height follows the aspect ratio). */}
              <Image
                src="/assets/logos/falcon-tech-ksa-white-logo.png"
                alt="فالكون تكنولوجيز السعودية"
                // displayed at max-w-sm (384px wide → 67px tall)
                width={384}
                height={67}
                className="h-auto w-full max-w-xs md:max-w-sm object-contain object-left transition-opacity duration-300"
              />
            </Link>

            <p
              className="
                max-w-xs
                text-sm
                leading-[1.75]
                text-white/55
              "
            >
              تقدّم فالكون تكنولوجيز أنظمة خزانات هندسية، والعزل الحراري، وتبطين الخزانات وترميمها، وخدمات المبردات والخدمات الصناعية للمشاريع المتطلبة في جميع أنحاء المملكة العربية السعودية.
            </p>

            <Link
              href="/ar/contact-us"
              className="
                group
                mt-7
                inline-flex
                h-14
                items-center
                gap-5
                bg-brand
                px-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.02em]
                text-white
                transition-all
                duration-300
                hover:bg-brand-dark
              "
            >
              <span>اطلب عرض سعر</span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpLeft size={16} strokeWidth={1.7} />
              </span>
            </Link>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <FooterHeading title="الخدمات" />

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="
                      group
                      flex
                      items-start
                      text-sm
                      leading-[1.45]
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        me-2
                        mt-2
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-brand
                        opacity-0
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                      "
                    />

                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <FooterHeading title="روابط سريعة" />

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/55
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-brand
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <FooterHeading title="اتصل بنا" />

            <div className="mt-6">
              <ContactItem icon={MapPin}>
                <span>
                  مبنى 7850/3308، شارع 9، الصناعية،
                  <br /> الرمز البريدي 32624، المملكة العربية السعودية
                </span>
              </ContactItem>

              <ContactItem icon={Phone}>
                <Link
                  dir="ltr" href="tel:+966592767326"
                  className="transition-colors hover:text-white"
                >
                  +966 59 276 7326
                </Link>
              </ContactItem>

              <ContactItem icon={Mail}>
                <Link
                  dir="ltr" href="mailto:info@falcontechksa.com"
                  className="transition-colors hover:text-white"
                >
                  info@falcontecksa.com
                </Link>
              </ContactItem>

              <ContactItem icon={Clock3} last>
                <div>
                  <div>الاثنين - الجمعة</div>
                  <div className="mt-1">08:00 ص - 06:00 م</div>
                </div>
              </ContactItem>
            </div>

            <Link
              href="/ar/contact-us"
              className="
                mt-5
                inline-block
                text-sm
                font-medium
                text-brand
                transition-colors
                duration-200
                hover:text-white
              "
            >
              أرسل لنا رسالة وسنتواصل معك قريبًا
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs leading-5 text-white/40">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/65">فالكون تكنولوجيز السعودية</span>. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-4">
            <SocialLink href="#" label="فيسبوك" icon={FaFacebookF} />

            <SocialLink href="#" label="إنستغرام" icon={FaInstagram} />

            <SocialLink href="#" label="لينكدإن" icon={FaLinkedinIn} />

            <SocialLink href="#" label="يوتيوب" icon={FaYoutube} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ title }) {
  return (
    <div>
      <h3 className="text-xl font-semibold leading-none tracking-tight text-white">
        {title}
      </h3>

      <div className="mt-6 h-px w-full bg-white/10">
        <div className="h-px w-17.5 bg-brand" />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, children, last = false }) {
  return (
    <div
      className={`flex gap-4 py-4 ${!last ? "border-b border-white/10" : ""}`}
    >
      <Icon size={21} strokeWidth={1.5} className="mt-px shrink-0 text-brand" />

      <div className="text-sm leading-[1.55] text-white/55">{children}</div>
    </div>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-white/40 transition-colors duration-200 hover:text-brand"
    >
      <Icon size={16} />
    </Link>
  );
}
