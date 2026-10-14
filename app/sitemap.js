import fs from "node:fs";
import path from "node:path";
import { libraryCategories } from "@/data/technicalLibraryData";

// sitemap.xml with every English page and its Arabic twin (/ar/...),
// linked to each other with hreflang alternates.
// Built from the app/ folder at build time, so new pages appear automatically.

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://falcontechksa.com";

function collectRoutes(dir, base = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      if (/^page\.(js|jsx|ts|tsx)$/.test(entry.name)) routes.push(base || "/");
      continue;
    }
    const name = entry.name;
    // skip API, the Arabic mirror (added below), private and dynamic folders
    if (name === "api" || name === "ar" || name.startsWith("_") || name.startsWith("[")) continue;
    routes.push(...collectRoutes(path.join(dir, name), `${base}/${name}`));
  }
  return routes;
}

export default function sitemap() {
  const routes = [
    ...collectRoutes(path.join(process.cwd(), "app")),
    ...libraryCategories.map((c) => `/technical-library/${c.id}`),
  ];

  return routes.flatMap((route) => {
    const en = `${SITE}${route === "/" ? "" : route}`;
    const ar = `${SITE}/ar${route === "/" ? "" : route}`;
    const alternates = { languages: { en, ar, "x-default": en } };
    return [
      { url: en, lastModified: new Date(), alternates },
      { url: ar, lastModified: new Date(), alternates },
    ];
  });
}
