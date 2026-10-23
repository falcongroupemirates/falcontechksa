import { getBlogSitemapEntries } from "@/lib/blog";
import { SITE } from "@/lib/blog-config";

// /blog/sitemap.xml — every published article from the Blog CMS.
// Rebuilt hourly, and immediately when the CMS publishes (via /api/revalidate).
export const revalidate = 3600;

export default async function sitemap() {
  return getBlogSitemapEntries(SITE.siteUrl, SITE.blogPath);
}
