"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (next: number) => void;
};

export default function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const count = images.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + count) % count);
    },
    [index, count, onChange],
  );

  // Keyboard, scroll lock and focus handling
  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const focusable = document.querySelectorAll<HTMLElement>("[data-lightbox] button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      lastFocus.current?.focus?.();
    };
  }, [open, go, onClose]);

  const onDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -500) go(1);
    else if (info.offset.x > 70 || info.velocity.x > 500) go(-1);
  };

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${current.title}`}
          className="fixed inset-0 z-[120] flex flex-col bg-walnut/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8" style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}>
            <p className="text-[0.95rem] tabular-nums text-ivory/80" aria-live="polite">
              {(index ?? 0) + 1} / {count}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close photo viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 bg-walnut/60 text-ivory transition-colors hover:border-champagne hover:text-champagne sm:left-6 sm:flex"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.image}
                className="relative h-full w-full touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={onDragEnd}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={current.image}
                  alt={current.description ? `${current.title}. ${current.description}` : current.title}
                  fill
                  priority
                  sizes="100vw"
                  className="select-none object-contain"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 bg-walnut/60 text-ivory transition-colors hover:border-champagne hover:text-champagne sm:right-6 sm:flex"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 pb-6 pt-4 text-center sm:px-8" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
            <p className="font-display text-2xl text-ivory">{current.title}</p>
            <p className="mt-1 text-[0.9rem] text-champagne">{current.category}</p>
            {current.description && <p className="mx-auto mt-2 max-w-xl text-[0.9rem] text-ivory/65">{current.description}</p>}
            <div className="mt-4 flex justify-center gap-4 sm:hidden">
              <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next photo" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
