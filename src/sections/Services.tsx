import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-y bg-sand"
    >
      <div className="container-x">

        <SectionHeading
          id="services-title"
          title="Our Services"
          text="From weddings and pre-wedding celebrations to engagements and every special event, we capture your most important moments."
        />

        <div className="mt-14 flex justify-center lg:mt-20">
          <Reveal>
            <Link
              href="/services"
              className="group relative block w-full max-w-4xl overflow-hidden border border-walnut/15 bg-cream px-8 py-16 text-center transition-all duration-500 hover:-translate-y-1 hover:border-champagne hover:shadow-[0_28px_60px_-30px_rgba(43,27,18,0.5)] sm:px-12 sm:py-20"
            >
              <span className="font-display text-4xl text-walnut transition-colors duration-300 group-hover:text-champagne sm:text-5xl lg:text-6xl">
                Our Services
              </span>

              <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-7 text-charcoal/70 sm:text-[1.05rem]">
                Explore our photography, cinematic, drone and event
                services designed to preserve every important moment.
              </p>

              <span className="mt-8 inline-flex items-center border border-walnut/20 px-7 py-3 text-sm uppercase tracking-[0.18em] text-walnut transition-all duration-300 group-hover:border-champagne group-hover:bg-walnut group-hover:text-champagne">
                Explore Our Services
              </span>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}