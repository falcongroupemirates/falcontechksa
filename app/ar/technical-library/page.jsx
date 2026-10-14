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
  title: "المكتبة الفنية | نشرات البيانات الفنية والمخططات ووثائق الخدمات - فالكون تكنولوجيز",
  description:
    "حمّل نشرات البيانات الفنية من فالكون تكنولوجيز، ووثائق عزل الأيروجيل، وسجلات خدمة المبردات، والمخططات الهندسية، ونماذج ضمان الجودة / ضبط الجودة (QA/QC)، وأدلة التوافق الكيميائي، أو اطلب وثائق خاصة بمشروعك.",
};

export default function TechnicalLibrary() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="المكتبة الفنية"
        title="نشرات بيانات ومخططات ووثائق لكل مرحلة من مراحل مشروعك"
        description="وثائق الشركة، ونشرات البيانات الفنية للمنتجات، والمخططات الهندسية، ونماذج QA/QC، وأدلة التوافق الكيميائي — منظّمة لتسهيل وصول العملاء إليها وإتاحة المراجعة الهندسية الكاملة."
        breadcrumb="المكتبة الفنية"
        image="/assets/images/home/hero-slide-1.png"
      />
      <AudiencePathways />
      <LibraryExplorer />
      <StandardsBar />
      <CTASection />
    </div>
  );
}
