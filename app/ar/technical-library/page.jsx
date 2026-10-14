// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import PageHero from "@/components/ar/common/PageHero";
import AudiencePathways from "@/components/ar/technical-library/AudiencePathways";
import LibraryExplorer from "@/components/ar/technical-library/LibraryExplorer";
import StandardsBar from "@/components/ar/services/StandardsBar";
import CTASection from "@/components/ar/home/CTASection";

export const metadata = {
  alternates: {
    canonical: "/ar/technical-library",
    languages: { en: "/technical-library", ar: "/ar/technical-library", "x-default": "/technical-library" },
  },
  title: "Technical Library | Datasheets, Drawings & Service Documents - Falcon Technologies",
  description:
    "Download Falcon Technologies datasheets, aerogel insulation documents, chiller service records, engineering drawings, QA/QC formats and chemical compatibility guides, or request project-specific documents.",
};

export default function TechnicalLibrary() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Technical Library"
        title="Datasheets, Drawings and Documentation for Every Stage of Your Project"
        description="Company documents, product datasheets, engineering drawings, QA/QC formats and chemical compatibility guides — organized for quick customer lookup and full engineering review."
        breadcrumb="Technical Library"
        image="/assets/images/home/hero-slide-1.png"
      />
      <AudiencePathways />
      <LibraryExplorer />
      <StandardsBar />
      <CTASection />
    </div>
  );
}
