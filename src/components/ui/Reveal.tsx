"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Gentle fade-and-rise, played once when the element scrolls into view. */
export default function Reveal({ children, delay = 0, y = 18, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
