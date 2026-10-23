const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://falcontechksa.com").replace(/\/+$/, "");

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    // Site pages (static) + blog articles (updated by the CMS)
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/blog/sitemap.xml`],
  };
}
