"use client";

import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business";
import { telUrl, whatsappUrl } from "@/lib/contact";

/** Floating WhatsApp button on every screen, plus a Call button on phones. */
export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telUrl()}
        aria-label={`Call ${business.name}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-walnut text-champagne shadow-lg ring-1 ring-champagne/40 transition-transform duration-300 hover:scale-105 md:hidden"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-walnut shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-champagne motion-reduce:hidden" aria-hidden="true" />
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
