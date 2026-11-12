"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business } from "@/config/business.1";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" aria-labelledby="process-title" className="section-y bg-ivory">
      <div className="container-x">
        <SectionHeading
          id="process-title"
          title="How we take your celebration from idea to the day itself"
          align="center"
          className="mx-auto"
        />

        <ol ref={ref} className="relative mx-auto mt-16 max-w-5xl space-y-12 lg:mt-24 lg:space-y-20">
          {/* Timeline line + progress */}
          <span className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-walnut/15 md:left-1/2" aria-hidden="true" />
          <motion.span
            className="absolute bottom-0 left-[1.1rem] top-0 w-px origin-top bg-champagne md:left-1/2"
            style={{ scaleY }}
            aria-hidden="true"
          />

          {business.process.map((step, i) => {
            const left = i % 2 === 0;
            return (
              <li key={step.title} className="relative pl-14 md:grid md:grid-cols-2 md:gap-24 md:pl-0">
                <span
                  className="absolute left-[1.1rem] top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-champagne bg-ivory md:left-1/2"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                </span>
                <Reveal className={cn(left ? "md:col-start-1 md:text-right" : "md:col-start-2")}>
                  <p className="text-[0.95rem] text-gold">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[1.9rem] leading-tight text-walnut sm:text-[2.2rem]">{step.title}</h3>
                  <p className={cn("mt-3 max-w-md text-[1rem] leading-7 text-charcoal/75", left && "md:ml-auto")}>{step.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
