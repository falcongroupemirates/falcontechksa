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
  title: "القطاعات التي نخدمها | فالكون تكنولوجيز – المملكة العربية السعودية ودول الخليج",
  description:
    "تخدم فالكون تكنولوجيز قطاعات النفط والغاز، والبتروكيماويات والكيماويات، والمياه والصرف الصحي، والطاقة والمرافق، والتصنيع، والمباني التجارية والصناعية، والإنشاءات والبنية التحتية، والأغذية والمشروبات في جميع أنحاء المملكة العربية السعودية ودول الخليج.",
};

export default function Industries() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="القطاعات التي نخدمها"
        title="حلول مصممة للقطاعات الصناعية في السعودية والخليج"
        description="من النفط والغاز إلى الأغذية والمشروبات، نصمم حلول الخزانات والعزل والترميم والتبطين والمبردات وفق ظروف التشغيل الفعلية لكل قطاع."
        breadcrumb="القطاعات"
        image="/assets/images/home/hero-slide-2.png"
      />
      <IndustriesList />
      <SectorApproach />
      <Testimonials />
      <CTASection />
    </div>
  );
}
