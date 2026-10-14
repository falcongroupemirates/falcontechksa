// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import AboutSection from "@/components/ar/home/AboutSection";
import ValuesSection from "@/components/ar/about/ValuesSection";
import CapabilitiesOverview from "@/components/ar/about/CapabilitiesOverview";
import StatsCounter from "@/components/ar/home/StatsCounter";
import WhyChooseUs from "@/components/ar/home/WhyChooseUs";
import CTASection from "@/components/ar/home/CTASection";

export const metadata = {
  alternates: {
    canonical: "/ar/about-us",
    languages: { en: "/about-us", ar: "/ar/about-us", "x-default": "/about-us" },
  },
  title: "عن فالكون تكنولوجيز | حلول صناعية – المملكة العربية السعودية",
  description:
    "فالكون تكنولوجيز شركة هندسة وتصنيع وخدمات صناعية مقرها الدمام، المملكة العربية السعودية، تقدم أنظمة الخزانات والعزل الحراري والترميم والتبطين وخدمات المبردات.",
};

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="عن فالكون تكنولوجيز"
        title="حلول صناعية قائمة على الهندسة والجودة والثقة"
        description="الهندسة والتصنيع والتوريد والتركيب والفحص والترميم والعزل الحراري وتبطين الخزانات وخدمات المبردات لعملاء القطاع الصناعي ذوي المتطلبات العالية في جميع أنحاء المملكة."
        breadcrumb="عن فالكون"
      />
      <AboutSection eager />
      <ValuesSection />
      <CapabilitiesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
