// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import HomeLayout from "@/components/ar/layout/HomeLayout";
import Hero from "@/components/ar/home/Hero";
import AboutSection from "@/components/ar/home/AboutSection";
import WhyChooseUs from "@/components/ar/home/WhyChooseUs";
import StatsCounter from "@/components/ar/home/StatsCounter";
import ShowcaseSlider from "@/components/ar/home/ShowcaseSlider";
import ServicesSection from "@/components/ar/home/ServicesSection";
import ProductsSection from "@/components/ar/home/ProductsSection";
import ManufacturingSection from "@/components/ar/home/ManufacturingSection";
import ProcessSteps from "@/components/ar/home/ProcessSteps";
import Testimonials from "@/components/ar/home/Testimonials";
import CTASection from "@/components/ar/home/CTASection";
import ProjectsSection from "@/components/ar/home/ProjectsSection";
import BlogSection from "@/components/ar/home/BlogSection";
import LocationMap from "@/components/ar/home/LocationMap";
import SurveyScanningSection from "@/components/ar/home/SurveyScanningSection";

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <AboutSection />
      <StatsCounter />
      <ProductsSection />
      <ShowcaseSlider />
      <SurveyScanningSection />
      <ServicesSection />
      <ManufacturingSection />
      <ProcessSteps />
      {/* <ProjectsSection /> */}
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <BlogSection />
      <LocationMap />
    </HomeLayout>
  );
}
