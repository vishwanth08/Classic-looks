import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const events = [
  {
    id: "weddings",
    title: "Wedding",
    image: "/images/events/weddings.svg",
  },
  {
    id: "pre-post-wedding",
    title: "Pre & Post-Wedding",
    image: "/images/weddings/wedding1.svg",
  },
  {
    id: "engagement",
    title: "Engagement",
    image: "/images/events/engagements.svg",
  },
  {
    id: "any-events",
    title: "Any Events",
    image: "/images/events/birthday-parties.svg",
  },
];

export default function EventTypes() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="section-y bg-walnut"
    >
      <div className="container-x">
        <SectionHeading
          id="events-title"
          tone="dark"
          title="Our Events"
          text="From weddings and pre-wedding celebrations to engagements and every special event, we capture your most important moments."
        />

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {events.map((event, i) => (
            <li key={event.id}>
              <Reveal delay={i * 0.08}>
                <Link
                  href={`/events/${event.id}`}
                  aria-label={`View ${event.title}`}
                  className="group block"
                >
                  <div className="overflow-hidden border border-champagne/25 bg-black/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-champagne group-hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        loading="lazy"
                        sizes="(min-width:1024px) 23vw, (min-width:640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/20 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                        <h3 className="font-display text-3xl text-ivory transition-colors duration-300 group-hover:text-champagne">
                          {event.title}
                        </h3>

                        <span className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-ivory/60 transition-colors duration-300 group-hover:text-champagne">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}