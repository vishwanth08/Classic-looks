"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { business } from "@/config/business.1";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function GetQuote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="quote" aria-labelledby="quote-title" className="relative isolate overflow-hidden bg-walnut py-28 sm:py-36 lg:py-44">
      <motion.div className="absolute inset-x-0 -top-[10%] -z-10 h-[120%]" style={{ y }}>
        <Image src={business.cta.image} alt="" fill sizes="100vw" loading="lazy" className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-walnut/80" />
      </motion.div>

      <div className="container-x text-center">
        <Reveal>
          <h2 id="quote-title" className="display-lg mx-auto max-w-[18ch] text-ivory">
            Let&rsquo;s Plan Something Extraordinary
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-lg text-[1.1rem] leading-8 text-ivory/80">
            Tell us about your celebration and let our team take care of the details.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button href={whatsappUrl()} icon={<MessageCircle className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}>
              WhatsApp Us
            </Button>
            <Button href={telUrl()} variant="outlineLight" icon={<Phone className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}>
              Call Now
            </Button>
            <Button href={mailtoUrl()} variant="outlineLight" icon={<Mail className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}>
              Email Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
