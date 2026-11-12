/**
 * ============================================================
 *  BUSINESS CONFIGURATION — edit everything about the business here
 * ============================================================
 *  Company name, logo, phone, WhatsApp, email, Instagram, address, map link,
 *  opening hours, services, packages, testimonials, event types and more.
 *  Photos for the gallery live in src/data/gallery.ts.
 *  Colours live in src/app/globals.css (the :root block at the top).
 *
 *  Everything below is PLACEHOLDER content. Replace it with the real details.
 */

import { business } from "./business.1";

// ---- The three values you will change first -------------------------------

/** Country code + number, digits only. Example: "919876543210" */
export const WHATSAPP_NUMBER = "9014458494";

/** Used for the Call buttons. Example: "+919876543210" */
export const PHONE_NUMBER = "+91 9014458494";

export const BUSINESS_EMAIL = "example@email.com";

// ---- Types ------------------------------------------------------------------

export type IconName =
  | "heart"
  | "flower"
  | "calendar"
  | "camera"
  | "sparkles"
  | "glass"
  | "cake"
  | "gem"
  | "briefcase"
  | "utensils"
  | "music"
  | "lightbulb"
  | "landmark"
  | "palette"
  | "users"
  | "shield"
  | "handshake"
  | "eye"
  | "timer"
  | "userCheck"
  | "clipboard"
  | "star";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
};

export type EventType = {
  id: string;
  title: string;
  image: string;
};

export type PackageTier = {
  id: string;
  name: string;
  price?: string;
  priceNote?: string;
  tagline?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;

  /** Overrides the default WhatsApp message for this package */
  message?: string;
};

export type Testimonial = {
  name: string;
  event: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
};

export type Business = typeof business;