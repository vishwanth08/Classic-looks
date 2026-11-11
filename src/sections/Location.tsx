import { Clock, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { formattedAddress, mapsEmbedUrl } from "@/lib/contact";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="section-y bg-sand">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="location-title" title="Visit our studio" text="Drop in to talk through your plans, see our décor samples and meet the team." />

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="text-[1.35rem] text-walnut">Address</h3>
                    <address className="mt-1 not-italic leading-7 text-charcoal/80">{formattedAddress()}</address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="text-[1.35rem] text-walnut">Opening hours</h3>
                    <dl className="mt-1 space-y-1 leading-7 text-charcoal/80">
                      {business.hours.map((h) => (
                        <div key={h.label} className="flex flex-wrap gap-x-4">
                          <dt className="min-w-[10rem]">{h.label}</dt>
                          <dd>{h.display}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <Button href={business.mapsUrl} variant="dark" arrow>
                  Get Directions
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-walnut/15 bg-beige sm:aspect-[16/11]">
                {business.map.showEmbed ? (
                  <iframe
                    title={`Map showing the location of ${business.name}`}
                    src={mapsEmbedUrl()}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    style={{ filter: "sepia(0.25) saturate(0.85)" }}
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-center text-charcoal/70">
                    Tap Get Directions to open our location in Google Maps.
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
