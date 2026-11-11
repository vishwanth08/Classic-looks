"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { business } from "@/config/business";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 1600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="site-loader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-walnut"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          role="status"
          aria-label="Loading"
        >
          <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgb(201 169 106)"
                strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </svg>
            <motion.span
              className="font-display text-5xl text-champagne sm:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {business.initials}
            </motion.span>
          </div>
          <motion.p
            className="mt-8 text-[0.8rem] tracking-[0.28em] text-ivory/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {business.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
