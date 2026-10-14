"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import heroSlides from "@/data/ar/heroSlides";

const AUTOPLAY_MS = 6000;

// Clip-path geometry measured directly off the reference design (percentages
// of the section's own box, so they stay correct at any viewport size).
const CLIP = {
  navyWedge: "polygon(100% 0, 70% 0, 100% 50%)",
  redCorner: "polygon(100% 50%, 100% 100%, 78% 100%)",
  whiteHex: "polygon(100% 0, 25% 0, 51% 60%, 70% 100%, 100% 100%, 100% 45%)",
  redSeam: "polygon(60% 0%, 25% 0%, 41% 37%)",
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const slide = heroSlides[index];

  const goTo = useCallback((next) => {
    setIndex((prev) => (next + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-svh min-h-150 w-full overflow-hidden bg-neutral-950"
    >
      {/* ---------- Base layer: full-bleed slide photo (no clipping needed —
           the opaque shapes on top of it define the visible photo area) ---------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.heading.join(" ")}
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ---------- Desktop diagonal shapes (hidden below lg — mobile gets a
           plain stacked layout instead, see the dark overlay further down) ---------- */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="absolute inset-0 bg-white/90"
          style={{ clipPath: CLIP.whiteHex }}
        />
        <div
          className="absolute inset-0 bg-red-600"
          style={{ clipPath: CLIP.navyWedge }}
        />
        {/* <div
          className="absolute inset-0 bg-red-600"
          style={{ clipPath: CLIP.redCorner }}
        />
        <div
          className="absolute inset-0 bg-red-600"
          style={{ clipPath: CLIP.redSeam }}
        /> */}
      </div>

      {/* ---------- Mobile/tablet fallback: dark scrim over the photo so text
           stays readable without any diagonal cuts ---------- */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/40 lg:hidden" />

      {/* ---------- Dark strip behind the fixed header, all breakpoints, so
           nav text/logo stay legible over whatever sits at the very top ---------- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-linear-to-b from-black/55 to-transparent" />

      {/* ---------- Content ---------- */}
      <div className="relative z-30 flex h-full items-center px-6 pt-24 lg:w-[52%] lg:px-0 lg:ps-[17%] lg:pe-10 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-lg"
          >
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-red-500 lg:text-red-600">
              <span className="h-0.5 w-6 bg-red-500 lg:bg-red-600" />
              {slide.eyebrow}
            </p>

            <h1 className="text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem] lg:text-neutral-900">
              {slide.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/85 lg:text-neutral-600">
              {slide.description}
            </p>

            <Link
              href={slide.ctaHref}
              className="group mt-7 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              {slide.ctaLabel}
              <ArrowDownLeft
                size={16}
                className="transition-transform group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Prev / next arrows — desktop: inside the skewed navy box
           matching the reference; mobile: plain floating pair ---------- */}
      <div
        className="absolute z-30 hidden -skew-x-12 gap-2 p-2 lg:flex"
        style={{ right: "35%", bottom: "6%" }}
      >
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-11 w-11 skew-x-12 items-center justify-center rounded-sm bg-red-600 text-white transition-colors hover:bg-red-700"
        >
          <ArrowDownLeft size={18} className="-rotate-90" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 skew-x-12 items-center justify-center rounded-sm bg-white text-neutral-900 transition-colors hover:bg-red-600 hover:text-white"
        >
          <ArrowDownLeft size={18} />
        </button>
      </div>

      <div className="absolute bottom-6 start-6 z-30 flex gap-2 lg:hidden">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-600 text-white"
        >
          <ArrowDownLeft size={16} className="-rotate-90" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-neutral-900"
        >
          <ArrowDownLeft size={16} />
        </button>
      </div>

      {/* ---------- Slide dots (mobile only) ---------- */}
      <div className="absolute bottom-6 end-6 z-30 flex gap-2 lg:hidden">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-red-600" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
