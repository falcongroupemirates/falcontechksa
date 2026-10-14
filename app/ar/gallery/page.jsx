// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import CTASection from "@/components/ar/home/CTASection";
import GalleryExplorer from "@/components/ar/gallery/GalleryExplorer";

export const metadata = {
  alternates: {
    canonical: "/ar/gallery",
    languages: { en: "/gallery", ar: "/ar/gallery", "x-default": "/gallery" },
  },
  title: "Gallery | Falcon Technologies - Saudi Arabia",
  description:
    "Photo gallery of Falcon Technologies tank manufacturing, thermal insulation, restoration and lining, industrial services and chiller work across Saudi Arabia — filter by category.",
};

export default function GalleryPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        description="Tanks, insulation, restoration, lining and industrial services — browse our work by category."
        breadcrumb="Gallery"
        image="/assets/images/home/hero-slide-1.png"
      />
      <GalleryExplorer />
      <CTASection />
    </div>
  );
}
