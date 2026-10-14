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
  title: "معرض الصور | فالكون تكنولوجيز - المملكة العربية السعودية",
  description:
    "معرض صور لأعمال فالكون تكنولوجيز في تصنيع الخزانات والعزل الحراري والترميم والتبطين والخدمات الصناعية والمبردات في جميع أنحاء المملكة العربية السعودية — صنّفها حسب الفئة.",
};

export default function GalleryPage() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="أعمالنا"
        title="معرض الصور"
        description="الخزانات والعزل والترميم والتبطين والخدمات الصناعية — تصفح أعمالنا حسب الفئة."
        breadcrumb="معرض الصور"
        image="/assets/images/home/hero-slide-1.png"
      />
      <GalleryExplorer />
      <CTASection />
    </div>
  );
}
