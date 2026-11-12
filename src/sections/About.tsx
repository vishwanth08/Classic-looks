"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { business } from "@/config/business.1";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["6%", "-8%"]
  );

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-title"
      className="section-y overflow-hidden bg-ivory"
    >
      <div className="container-x">

        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">

          {/* LEFT - TEXT */}
          <div className="lg:col-span-6">

            <Reveal>
              <h2
                id="about-title"
                className="display-lg max-w-[18ch] text-walnut"
              >
                {business.about.heading}
              </h2>

              <span className="gold-rule mt-6" />
            </Reveal>

            <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-charcoal/80">

              {business.about.paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  delay={0.1 + i * 0.1}
                >
                  <p>{p}</p>
                </Reveal>
              ))}

            </div>
          </div>

          {/* RIGHT - SAI ROYAL IMAGE */}
          <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none">

            <motion.div style={{ y: yImage }}>

              <RevealImage>

                <div className="relative mx-auto w-[82%]">

                  <Image
                    src="/images/about/sai-royal-logo.jpg"
                    alt="Sai Royal"
                    width={800}
                    height={800}
                    priority
                    sizes="(min-width:1024px) 40vw, 90vw"
                    className="h-auto w-full object-contain"
                  />

                </div>

              </RevealImage>

            </motion.div>

          </div>

        </div>

        {/* =========================
            STATISTICS
        ========================== */}
        <dl className="mt-20 grid grid-cols-2 border-y border-walnut/15 lg:mt-28 lg:grid-cols-4">

          {business.about.stats.map((s, i) => (

            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`
                px-2
                py-9
                text-center
                sm:py-12

                ${i % 2 === 1
                  ? "border-l border-walnut/15"
                  : ""
                }

                ${i >= 2
                  ? "border-t border-walnut/15 lg:border-t-0"
                  : ""
                }

                ${i > 0
                  ? "lg:border-l lg:border-walnut/15"
                  : ""
                }
              `}
            >

              <dd className="font-display text-[3rem] leading-none text-walnut sm:text-[4.25rem]">

                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                />

              </dd>

              <dt className="mt-3 text-[0.95rem] text-charcoal/70">
                {s.label}
              </dt>

            </Reveal>

          ))}

        </dl>

        {/* =========================
            AREAS SERVED
        ========================== */}
        {business.about.areasServed && (

          <p className="mt-6 text-center text-[0.95rem] text-charcoal/60">
            {business.about.areasServed}
          </p>

        )}

      </div>
    </section>
  );
}