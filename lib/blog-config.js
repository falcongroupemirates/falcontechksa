// Site constants used by blog SEO helpers (metadata, JSON-LD, sitemap).
// Same base URL as the rest of the site (canonical, hreflang, sitemap).
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://falcontechksa.com").replace(/\/+$/, "");

export const SITE = {
  siteUrl,
  blogPath: "/blog",
  siteName: "Falcon Technologies",
  publisherName: "Falcon Technologies",
  publisherLogo: `${siteUrl}/assets/logos/falcon-tech-ksa-black-logo.png`,
};
