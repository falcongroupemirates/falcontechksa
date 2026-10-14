"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isArabicPath } from "@/lib/locale";

// Keeps <html lang/dir> correct when navigating between /... and /ar/...
// without a full reload. (First paint is handled by the inline script in
// app/layout.js.)
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const ar = isArabicPath(pathname);
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
