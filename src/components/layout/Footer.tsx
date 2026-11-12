import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business.1";
import { formattedAddress, mailtoUrl, telUrl, whatsappForEvent, whatsappForService, whatsappUrl } from "@/lib/contact";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const linkClass = "link-underline text-[0.95rem] text-ivory/75 hover:text-champagne";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-ivory" aria-label="Site footer">
      <div className="container-x pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-[0.98rem] leading-7 text-ivory/70">{business.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={whatsappUrl()} size="sm" icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}>
                WhatsApp Us
              </Button>
              <Button href={business.instagram.url} size="sm" variant="outlineLight" icon={<Instagram className="h-4 w-4" aria-hidden="true" />}>
                Instagram
              </Button>
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className="font-display text-xl text-champagne">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {business.nav.map((n) => (
                <li key={n.id}>
                  <Link href={`/#${n.id}`} className={linkClass}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-xl text-champagne">Services</h2>
            <ul className="mt-5 space-y-3">
              {business.services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href={whatsappForService(s.title)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/#services" className={`${linkClass} text-champagne`}>
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-xl text-champagne">Event Types</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {business.eventTypes.slice(0, 8).map((e) => (
                <li key={e.id}>
                  <a href={whatsappForEvent(e.title)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {e.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-ivory/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <a href={telUrl()} className="flex items-start gap-3 text-[0.95rem] text-ivory/80 transition-colors hover:text-champagne">
            <Phone className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            {business.phone}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[0.95rem] text-ivory/80 transition-colors hover:text-champagne">
            <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            Message on WhatsApp
          </a>
          <a href={mailtoUrl()} className="flex items-start gap-3 break-all text-[0.95rem] text-ivory/80 transition-colors hover:text-champagne">
            <Mail className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            {business.email}
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[0.95rem] text-ivory/80 transition-colors hover:text-champagne">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
            {formattedAddress()}
          </a>
        </div>

        <div className="mt-6 flex items-start gap-3 text-[0.9rem] text-ivory/60">
          <Clock className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
          <span>{business.hours.map((h) => `${h.label}: ${h.display}`).join("  |  ")}</span>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[0.85rem] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="link-underline hover:text-champagne">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-underline hover:text-champagne">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
