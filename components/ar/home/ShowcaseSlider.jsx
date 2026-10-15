"use client";

// ARABIC (RTL) VERSION — generated from the English file of the same path.
// Text is still the English placeholder: replace each English string with Arabic.
// Layout is already right-to-left. Keep links starting with /ar.

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import showcaseSlides from "@/data/ar/showcaseSlides";

const AUTOPLAY_MS = 4000;

// A text block that starts hidden behind a solid mask, which then slides
// away (like a curtain) to reveal the content — matches the reference's
// heading/paragraph reveal instead of a plain fade.
function RevealMask({ children, delay = 0, as: Tag = "div", className = "" }) {
  return (
    <Tag className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.77, 0, 0.18, 1] }}
        style={{ originX: 0 }} // RTL: reveals right → left
        className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900"
      />
    </Tag>
  );
}

export default function ShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const slide = showcaseSlides[index];

  const goTo = useCallback((next) => {
    setIndex((prev) => (next + showcaseSlides.length) % showcaseSlides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % showcaseSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-screen min-h-144 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900"
    >
      {/* ---------- Background photo (mirrored for RTL) with a wipe curtain
           that reveals each incoming slide from the left edge inwards ---------- */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.heading.join(" ")}
              fill
              sizes="100vw"
              // Mirrored for RTL so the photo's subject sits opposite the text,
              // as in the English slider.
              className="-scale-x-100 object-cover"
            />
            {/* fade the image into the page background on the right (text
                side in RTL) so text stays readable */}
            <div className="absolute inset-0 bg-linear-to-l from-neutral-100 via-neutral-100/40 to-transparent lg:via-neutral-100/10 dark:from-neutral-900 dark:via-neutral-900/40 lg:dark:via-neutral-900/10" />
          </motion.div>
        </AnimatePresence>

        {/* wipe curtain — replays on every slide change */}
        <motion.div
          key={`wipe-${slide.id}`}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.65, ease: [0.77, 0, 0.18, 1] }}
          style={{ originX: 1 }}
          className="absolute inset-0 z-10 bg-neutral-100 dark:bg-neutral-900"
        />
      </div>

      {/* ---------- Prev / next arrows ---------- */}
      <button
        onClick={prev}
        aria-label="الشريحة السابقة"
        className="absolute inset-s-0 top-1/2 z-30 flex h-16 w-8 -translate-y-1/2 items-center justify-center bg-black/20 text-white transition-colors hover:bg-red-600/70"
      >
        <ChevronRight size={20} />
      </button>
      <button
        onClick={next}
        aria-label="الشريحة التالية"
        className="absolute inset-e-0 top-1/2 z-30 flex h-16 w-8 -translate-y-1/2 items-center justify-center bg-black/20 text-white transition-colors hover:bg-red-600/70"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ---------- Content: red self-drawing frame + masked text reveal ---------- */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
          <div className="relative w-full max-w-96 px-9 pb-9 pt-24 sm:pt-28">
            {/* frame border segments — top/bottom draw first, sides connect after */}
            <motion.span
              key={`t-${slide.id}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              style={{ originX: 1 }} // RTL: draws from the right
              className="absolute inset-s-0 top-0 h-2 w-full bg-red-600"
            />
            <motion.span
              key={`b-${slide.id}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              style={{ originX: 1 }} // RTL: draws from the right
              className="absolute bottom-0 inset-s-0 h-2 w-full bg-red-600"
            />
            <motion.span
              key={`l-${slide.id}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{ originY: 0 }}
              className="absolute inset-s-0 top-0 h-full w-2 bg-red-600"
            />
            <motion.span
              key={`r-${slide.id}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{ originY: 0 }}
              className="absolute inset-e-0 top-0 h-full w-2 bg-red-600"
            />

            {/* decorative square dots — one inside the frame's empty top
               area, two further out to the right, echoing the reference */}
            <motion.span
              key={`dot1-${slide.id}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="absolute inset-s-9 top-10 h-2.5 w-2.5 bg-neutral-900 dark:bg-white"
            />
            <motion.span
              key={`dot2-${slide.id}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute -inset-e-32 top-10 hidden h-2.5 w-2.5 bg-neutral-900 lg:block dark:bg-white"
            />
            <motion.span
              key={`dot3-${slide.id}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="absolute -inset-e-10 bottom-20 hidden h-2.5 w-2.5 bg-neutral-900 lg:block dark:bg-white"
            />

            {/* text content */}
            <AnimatePresence mode="wait">
              <div key={slide.id}>
                <RevealMask
                  as="h2"
                  delay={0.55}
                  className="text-3xl font-extrabold uppercase leading-[1.15] text-neutral-900 sm:text-3xl dark:text-white lg:text-4xl"
                >
                  {slide.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </RevealMask>

                {/* <RevealMask delay={0.75} className="mt-4">
                  <p className="text-base leading-relaxed text-neutral-600">
                    {slide.description}
                  </p>
                </RevealMask> */}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.95 }}
                  className="relative mt-8 inline-block"
                >
                  {/* small corner brackets decorating the button, top-left + bottom-right */}
                  <span className="pointer-events-none absolute -inset-s-2 -top-2 h-3 w-3 border-s-2 border-t-2 border-neutral-900 dark:border-white" />
                  <span className="pointer-events-none absolute -bottom-2 -inset-e-2 h-3 w-3 border-b-2 border-e-2 border-neutral-900 dark:border-white" />
                  <Link
                    href={slide.ctaHref}
                    className="inline-block bg-neutral-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-red-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-red-600 dark:hover:text-white"
                  >
                    {slide.ctaLabel}
                  </Link>
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ---------- Thumbnail navigator, bottom-right, aligned to the same
           max-w-7xl container as the text content ---------- */}
      <div className="absolute inset-x-0 bottom-6 z-30 hidden justify-center sm:flex">
        <div className="flex w-full max-w-7xl justify-center gap-2 px-6 lg:px-16">
          {showcaseSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`الانتقال إلى الشريحة ${i + 1}`}
              className={`relative h-14 w-20 overflow-hidden border-2 transition-colors ${
                i === index ? "border-red-600" : "border-transparent"
              }`}
            >
              <Image
                src={s.thumb}
                alt={`${s.heading.join(" ")} thumbnail`}
                fill
                sizes="96px"
                className="-scale-x-100 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
