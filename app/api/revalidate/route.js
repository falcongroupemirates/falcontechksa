// Called by the Blog CMS (and its scheduler) whenever a post on this website changes.
import { timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { BLOG_CACHE_TAG } from "@/lib/blog";

export const dynamic = "force-dynamic";

function safeEqual(a = "", b = "") {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export async function POST(request) {
  const secret = process.env.BLOG_REVALIDATE_SECRET;
  if (!secret || !safeEqual(request.headers.get("x-revalidate-secret") || "", secret)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const blogPath = process.env.BLOG_BASE_PATH || "/blog";

  // Purge cached Supabase responses, then every page under /blog (list, posts,
  // category/tag pages), the home page (often shows latest posts) and sitemap.
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 });
  revalidatePath(blogPath, "layout");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");

  return Response.json({ ok: true, slug: body.slug ?? null, reason: body.reason ?? null, at: Date.now() });
}
