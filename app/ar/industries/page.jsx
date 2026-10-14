// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import IndustriesList from "@/components/ar/industries/IndustriesList";
import SectorApproach from "@/components/ar/industries/SectorApproach";
import StandardsBar from "@/components/ar/services/StandardsBar";
import Testimonials from "@/components/ar/home/Testimonials";
import CTASection from "@/components/ar/home/CTASection";

export const metadata = {
  alternates: {
    canonical: "/ar/industries",
    languages: { en: "/industries", ar: "/ar/industries", "x-default": "/industries" },
  },
  title: "Industries We Serve | Falcon Technologies – Saudi Arabia & GCC",
  description:
    "Falcon Technologies serves Oil & Gas, Petrochemical & Chemical, Water & Wastewater, Power & Utilities, Manufacturing, Commercial & Industrial Buildings, Construction & Infrastructure, and Food & Beverage sectors across Saudi Arabia and the GCC.",
};

export default function Industries() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Industries We Serve"
        title="Engineered for Saudi & GCC Industrial Sectors"
        description="From oil & gas to food & beverage, we engineer tank, insulation, restoration, lining and chiller solutions around each sector's real operating conditions."
        breadcrumb="Industries"
        image="/assets/images/home/hero-slide-2.png"
      />
      <IndustriesList />
      <SectorApproach />
      <Testimonials />
      <CTASection />
    </div>
  );
}
