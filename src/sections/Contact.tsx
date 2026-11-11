import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone, Navigation } from "lucide-react";
import { business } from "@/config/business";
import { formattedAddress, mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Row = { icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean };

export default function Contact() {
  const ic = "h-5 w-5";
  const rows: Row[] = [
    { icon: <Phone className={ic} aria-hidden="true" />, label: "Phone", value: business.phone, href: telUrl() },
    { icon: <MessageCircle className={ic} aria-hidden="true" />, label: "WhatsApp", value: "Chat with us on WhatsApp", href: whatsappUrl(), external: true },
    { icon: <Mail className={ic} aria-hidden="true" />, label: "Email", value: business.email, href: mailtoUrl() },
    { icon: <Instagram className={ic} aria-hidden="true" />, label: "Instagram", value: `@${business.instagram.handle}`, href: business.instagram.url, external: true },
    { icon: <MapPin className={ic} aria-hidden="true" />, label: "Address", value: formattedAddress() },
    { icon: <Clock className={ic} aria-hidden="true" />, label: "Business hours", value: business.hours.map((h) => `${h.label}: ${h.display}`).join("\n") },
    { icon: <Navigation className={ic} aria-hidden="true" />, label: "Google Maps", value: "Open in Google Maps", href: business.mapsUrl, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-ivory">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading id="contact-title" title="Contact us" text="Pick whichever way is easiest. We usually reply the same day." />
            <Reveal delay={0.1}>
              <p className="mt-10 font-display text-[2rem] leading-tight text-walnut">{business.name}</p>
              <p className="mt-2 text-charcoal/70">{business.tagline}</p>
            </Reveal>
          </div>

          <ul className="divide-y divide-walnut/15 border-y border-walnut/15 lg:col-span-7">
            {rows.map((r, i) => {
              const body = (
                <div className="flex items-start gap-5 py-6">
                  <span className="mt-1 text-gold">{r.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[0.9rem] text-charcoal/60">{r.label}</p>
                    <p className="mt-1 whitespace-pre-line break-words text-[1.15rem] leading-7 text-walnut">{r.value}</p>
                  </div>
                </div>
              );
              return (
                <li key={r.label}>
                  <Reveal delay={i * 0.04}>
                    {r.href ? (
                      <a
                        href={r.href}
                        {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block transition-colors duration-300 hover:bg-sand/70 focus-visible:bg-sand/70"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
