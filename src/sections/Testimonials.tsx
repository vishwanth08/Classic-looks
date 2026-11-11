"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/config/business";
import { cn, EASE } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const items = business.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce || items.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, items.length]);

  const go = (dir: 1 | -1) => setI((n) => (n + dir + items.length) % items.length);
  const t = items[i];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-y bg-walnut">
      <div className="container-x">
        <SectionHeading id="testimonials-title" tone="dark" title="Kind words from the people we have celebrated with" align="center" className="mx-auto" />

        <div
          className="relative mx-auto mt-14 max-w-4xl lg:mt-20"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-display text-[9rem] leading-none text-champagne/25" aria-hidden="true">
            “
          </span>

          <div className="relative min-h-[22rem] sm:min-h-[20rem]" aria-live={paused ? "polite" : "off"}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                className="flex flex-col items-center px-2 text-center"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: EASE }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
              >
                <div className="flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={cn("h-4 w-4", s < t.rating ? "fill-champagne text-champagne" : "text-champagne/30")} aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-8 font-display text-[1.65rem] leading-[1.4] text-ivory sm:text-[2.1rem]">
                  {t.review}
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-[1.05rem] text-champagne">{t.name}</p>
                  <p className="mt-1 text-[0.9rem] text-ivory/60">{t.event}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-champagne hover:text-champagne">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-1">
              {items.map((_, d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setI(d)}
                  aria-label={`Show review ${d + 1}`}
                  aria-current={d === i}
                  className="flex h-8 w-6 items-center justify-center"
                >
                  <span className={cn("block h-px transition-all duration-500", d === i ? "w-6 bg-champagne" : "w-3 bg-ivory/35")} />
                </button>
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-champagne hover:text-champagne">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
