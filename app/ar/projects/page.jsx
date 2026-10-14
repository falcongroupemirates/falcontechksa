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
  title: "Projects | Falcon Technologies – Tanks, Insulation & Industrial Work",
  description:
    "Browse Falcon Technologies' project portfolio across FRP tanks, polyethylene tanks, underground storage, thermal insulation, tank restoration & lining, and chiller installation & maintenance.",
};

export default function Projects() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Our Work"
        title="Explore Recent Projects"
        description="A selection of tank, insulation, restoration, lining and industrial projects delivered across Saudi Arabia's Eastern Province and beyond."
        breadcrumb="Projects"
        image="/assets/images/home/hero-slide-1.png"
      />
      <ProjectsGallery />
      <CTASection />
    </div>
  );
}
