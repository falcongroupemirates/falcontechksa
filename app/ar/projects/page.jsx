// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import ProjectsGallery from "@/components/ar/projects/ProjectsGallery";
import StatsCounter from "@/components/ar/home/StatsCounter";
import CTASection from "@/components/ar/home/CTASection";

export const metadata = {
  alternates: {
    canonical: "/ar/projects",
    languages: { en: "/projects", ar: "/ar/projects", "x-default": "/projects" },
  },
  title: "المشاريع | فالكون تكنولوجيز – الخزانات والعزل والأعمال الصناعية",
  description:
    "تصفح محفظة مشاريع فالكون تكنولوجيز في خزانات FRP وخزانات البولي إيثيلين والتخزين تحت الأرض والعزل الحراري وترميم وتبطين الخزانات وتركيب وصيانة المبردات.",
};

export default function Projects() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="أعمالنا"
        title="استكشف أحدث المشاريع"
        description="مجموعة مختارة من مشاريع الخزانات والعزل والترميم والتبطين والمشاريع الصناعية المنفذة في المنطقة الشرقية بالمملكة العربية السعودية وخارجها."
        breadcrumb="المشاريع"
        image="/assets/images/home/hero-slide-1.png"
      />
      <ProjectsGallery />
      <CTASection />
    </div>
  );
}
