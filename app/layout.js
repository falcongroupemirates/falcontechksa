import "./globals.css";
// Arabic font (self-hosted). Only downloaded on /ar pages, where it's used.
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickContact from "@/components/common/QuickContact";
import ScrollToTop from "@/components/common/ScrollToTop";
import HeaderAr from "@/components/ar/common/Header";
import FooterAr from "@/components/ar/common/Footer";
import QuickContactAr from "@/components/ar/common/QuickContact";
import ScrollToTopAr from "@/components/ar/common/ScrollToTop";
import LocaleSwitch from "@/components/common/LocaleSwitch";
import HtmlLangSync from "@/components/common/HtmlLangSync";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata = {
  // Used to build absolute URLs (canonical, hreflang, Open Graph).
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://falcontechksa.com",
  ),
  title:
    "Falcon Technologies | Tanks, Insulation & Industrial Solutions - Saudi Arabia",
  description:
    "Falcon Technologies delivers engineered tank systems, thermal insulation, tank lining and restoration, and chiller installation and maintenance for industrial clients across Saudi Arabia and the GCC.",
};

// Sets lang/dir before first paint so /ar pages never flash left-to-right.
const setLangDir = `(function(){try{var a=/^\\/ar(\\/|$)/.test(location.pathname),d=document.documentElement;d.lang=a?"ar":"en";d.dir=a?"rtl":"ltr";}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setLangDir }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <HtmlLangSync />
          <LocaleSwitch en={<Header />} ar={<HeaderAr />} />

          <main className="flex-1">{children}</main>

          <LocaleSwitch en={<Footer />} ar={<FooterAr />} />

          <LocaleSwitch en={<QuickContact />} ar={<QuickContactAr />} />
          <LocaleSwitch en={<ScrollToTop />} ar={<ScrollToTopAr />} />
        </ThemeProvider>
      </body>
    </html>
  );
}
