// Arabic site wrapper: everything under /ar renders right-to-left.
// Placeholder metadata — replace with the Arabic title/description.
export const metadata = {
  title:
    "Falcon Technologies | Tanks, Insulation & Industrial Solutions - Saudi Arabia",
  description:
    "Falcon Technologies delivers engineered tank systems, thermal insulation, tank lining and restoration, and chiller installation and maintenance for industrial clients across Saudi Arabia and the GCC.",
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: { locale: "ar_SA" },
};

export default function ArabicLayout({ children }) {
  return (
    <div lang="ar" dir="rtl">
      {children}
    </div>
  );
}
