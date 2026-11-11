"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { business } from "@/config/business";
import { EASE } from "@/lib/utils";
import { useSiteReady } from "@/components/layout/Providers";
import Button from "@/components/ui/Button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useSiteReady();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "16%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, 0]
  );

  const words = business.hero.headline.split(" ");
  const state = ready ? "show" : "hidden";

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-walnut"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0 -top-[8%] h-[116%]"
          initial={{ scale: 1.14 }}
          animate={{ scale: ready ? 1 : 1.14 }}
          transition={{ duration: 3, ease: EASE }}
        >
          {business.hero.video && !reduce ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={business.hero.image}
              aria-hidden="true"
            >
              <source src={business.hero.video} />
            </video>
          ) : (
            <Image
              src={business.hero.image}
              alt={business.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/55 to-walnut/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-walnut/70 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container-x relative pb-28 pt-40 sm:pb-32 lg:pb-36"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <motion.div
          className="flex items-center gap-4"
          initial="hidden"
          animate={state}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.1,
              },
            },
          }}
        >
          <span className="gold-rule" />

          <p className="text-[0.95rem] tracking-[0.12em] text-champagne">
            {business.name}
          </p>
        </motion.div>

        <h1
          id="hero-title"
          className="display-xl mt-6 max-w-[15ch] text-ivory sm:max-w-[16ch] lg:max-w-[17ch]"
        >
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="inline-block overflow-hidden pb-[0.14em] align-bottom"
            >
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{
                  y: ready ? "0%" : "110%",
                }}
                transition={{
                  duration: 1.1,
                  ease: EASE,
                  delay: 0.25 + i * 0.09,
                }}
              >
                {w}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-[1.08rem] leading-8 text-ivory/85 sm:text-[1.15rem]"
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: ready ? 1 : 0,
            y: ready ? 0 : 16,
          }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 1,
          }}
        >
          {business.hero.text}
        </motion.p>

        {/* Hero Button */}
        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: ready ? 1 : 0,
            y: ready ? 0 : 16,
          }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 1.2,
          }}
        >
          <Button href="/#gallery" variant="outlineLight">
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="/#about"
        aria-label="Scroll to the next section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/70 transition-colors hover:text-champagne sm:flex"
        initial={{ opacity: 0 }}
        animate={{
          opacity: ready ? 1 : 0,
        }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
      >
        <span className="text-[0.75rem] tracking-[0.25em]">
          Scroll
        </span>

        <span className="relative block h-12 w-px overflow-hidden bg-ivory/25">
          <span className="absolute inset-0 animate-scroll-cue bg-champagne" />
        </span>
      </motion.a>
    </section>
  );
}