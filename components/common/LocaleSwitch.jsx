"use client";

import { usePathname } from "next/navigation";
import { isArabicPath } from "@/lib/locale";

// Renders the Arabic or English version of a piece of site chrome
// (header, footer, floating buttons) based on the URL.
export default function LocaleSwitch({ en, ar }) {
  return isArabicPath(usePathname()) ? ar : en;
}
