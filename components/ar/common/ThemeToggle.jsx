"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Theme toggle button.
 * `onLightSurface` — pass true when the button sits on a surface that follows
 * the theme (light in light mode, dark in dark mode): the icon is then dark in
 * light mode and white in dark mode. Defaults to false (always on a dark
 * surface, e.g. over the home hero → white icon).
 */
export default function ThemeToggle({ onLightSurface = false, className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Reserve the same footprint before mount to avoid layout shift/hydration mismatch
  if (!mounted) {
    return <div className={`h-9 w-9 ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`التبديل إلى الوضع ${isDark ? "الفاتح" : "الداكن"}`}
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition-colors duration-300 ${
        onLightSurface
          ? "border-black/15 text-black hover:border-black/30 hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5"
          : "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
