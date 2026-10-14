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
  title: "About Falcon Technologies | Industrial Solutions – Saudi Arabia",
  description:
    "Falcon Technologies is an engineering, manufacturing and industrial services company based in Dammam, Saudi Arabia, delivering tank systems, thermal insulation, restoration, lining and chiller services.",
};

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="About Falcon Technologies"
        title="Industrial Solutions Built Around Engineering, Quality & Trust"
        description="Engineering, manufacturing, supply, installation, inspection, restoration, thermal insulation, tank lining and chiller services for demanding industrial clients across the Kingdom."
        breadcrumb="About Falcon"
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
