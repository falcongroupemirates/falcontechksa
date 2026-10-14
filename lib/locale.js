// Locale helpers shared by the English and Arabic sites.
// English lives at /<page>, Arabic at /ar/<page> (same slugs).

export const LOCALES = ["en", "ar"];

export function isArabicPath(pathname = "") {
  return pathname === "/ar" || pathname.startsWith("/ar/");
}

export function localeOf(pathname) {
  return isArabicPath(pathname) ? "ar" : "en";
}

// The same page in the other language: /about-us <-> /ar/about-us
export function localePath(pathname = "/", lang) {
  const base = isArabicPath(pathname)
    ? pathname.slice(3) || "/"
    : pathname || "/";
  if (lang === "ar") return base === "/" ? "/ar" : `/ar${base}`;
  return base;
}
