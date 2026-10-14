// Arabic site wrapper: everything under /ar renders right-to-left.
// Placeholder metadata — replace with the Arabic title/description.
export const metadata = {
  title:
    "فالكون تكنولوجيز | الخزانات والعزل والحلول الصناعية - المملكة العربية السعودية",
  description:
    "تقدم فالكون تكنولوجيز أنظمة خزانات مصممة هندسيًا، والعزل الحراري، وتبطين الخزانات وترميمها، وتركيب وصيانة المبردات لعملاء القطاع الصناعي في جميع أنحاء المملكة العربية السعودية ودول الخليج.",
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
