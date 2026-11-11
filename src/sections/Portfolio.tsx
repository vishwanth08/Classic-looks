"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { gallery, type GalleryShape } from "@/data/gallery";
import { cn, EASE } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";
import SectionHeading from "@/components/ui/SectionHeading";

const STEP = 12;

const dims: Record<GalleryShape, { w: number; h: number }> = {
  portrait: { w: 1200, h: 1500 },
  landscape: { w: 1500, h: 1000 },
  square: { w: 1200, h: 1200 },
};

export default function Portfolio() {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(STEP);
  const [active, setActive] = useState<number | null>(null);

  // Only "All" filter
  const tabs = ["All"];

  const filtered = useMemo(
    () =>
      category === "All"
        ? gallery
        : gallery.filter((g) => g.category === category),
    [category],
  );

  const shown = filtered.slice(0, visible);

  const close = useCallback(() => setActive(null), []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="section-y bg-ivory"
    >
      <div className="container-x">
        <SectionHeading
          id="gallery-title"
          title="A look at the celebrations we have created"
          text="Weddings, décor, stages and more. Tap any photo to view it full screen."
        />

        {/* ONLY ALL BUTTON */}
        <div
          role="group"
          aria-label="Filter photos"
          className="mt-12 flex justify-start"
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={category === t}
              onClick={() => {
                setCategory(t);
                setVisible(STEP);
              }}
              className={cn(
                "border px-5 py-2.5 text-[0.9rem] transition-colors duration-300",
                category === t
                  ? "border-walnut bg-walnut text-ivory"
                  : "border-walnut/25 text-walnut hover:border-walnut",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* PHOTO GALLERY */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={category}
            className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {shown.map((g, i) => {
              const d = dims[g.shape ?? "portrait"];

              return (
                <motion.li
                  key={g.image}
                  className="mb-3 break-inside-avoid sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "0px 0px -60px 0px",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: EASE,
                    delay: (i % 3) * 0.08,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Open photo: ${g.title}`}
                    className="group relative block w-full overflow-hidden bg-sand text-left"
                  >
                    <Image
                      src={g.image}
                      alt={
                        g.description
                          ? `${g.title}. ${g.description}`
                          : g.title
                      }
                      width={d.w}
                      height={d.h}
                      loading="lazy"
                      sizes="(min-width:1024px) 30vw, 50vw"
                      className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />

                    {/* PHOTO INFORMATION */}
                    <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-walnut/85 via-walnut/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-5">
                      <span className="font-display text-[1.25rem] leading-tight text-ivory sm:text-[1.45rem]">
                        {g.title}
                      </span>

                      <span className="mt-1 text-[0.82rem] text-champagne">
                        {g.category}
                      </span>
                    </span>

                    {/* EXPAND ICON */}
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-walnut/70 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Expand
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>

        {/* SHOW MORE */}
        {visible < filtered.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="inline-flex h-12 items-center border border-walnut/40 px-8 text-[0.92rem] text-walnut transition-colors duration-300 hover:bg-walnut hover:text-ivory"
            >
              Show more photos
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        images={filtered}
        index={active}
        onClose={close}
        onChange={setActive}
      />
    </section>
  );
}