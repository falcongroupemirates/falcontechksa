// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ar/common/PageHero";
import LibraryExplorer from "@/components/ar/technical-library/LibraryExplorer";
import CTASection from "@/components/ar/home/CTASection";
import { libraryCategories } from "@/data/ar/technicalLibraryData";

export function generateStaticParams() {
  return libraryCategories.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = libraryCategories.find((c) => c.id === category);
  if (!cat) return {};

  return {
    title: `${cat.label} | المكتبة الفنية - فالكون تكنولوجيز`,
    description: cat.description,
    alternates: {
      canonical: `/ar/technical-library/${category}`,
      languages: {
        en: `/technical-library/${category}`,
        ar: `/ar/technical-library/${category}`,
        "x-default": `/technical-library/${category}`,
      },
    },
  };
}

export default async function TechnicalLibraryCategory({ params }) {
  const { category } = await params;
  const cat = libraryCategories.find((c) => c.id === category);
  if (!cat) notFound();

  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="المكتبة الفنية"
        title={cat.label}
        description={cat.description}
        breadcrumb={cat.label}
        image="/assets/images/home/hero-slide-1.png"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-8 lg:px-8 xl:px-0">
        <Link
          href="/ar/technical-library"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-brand dark:text-white/50"
        >
          <ArrowRight size={13} />
          جميع فئات المكتبة الفنية
        </Link>
      </div>

      <LibraryExplorer initialCategory={cat.id} />
      <CTASection />
    </div>
  );
}
