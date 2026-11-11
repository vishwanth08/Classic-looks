import { business } from "@/config/business";

const fill = (template: string, name: string) => template.replace("{name}", name);

/** wa.me links open the WhatsApp app on Android/iPhone and WhatsApp Web/Desktop on computers. */
export function whatsappUrl(message: string = business.messages.general) {
  const digits = business.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const whatsappForPackage = (name: string, override?: string) =>
  whatsappUrl(override ?? fill(business.messages.package, name));
export const whatsappForService = (name: string) => whatsappUrl(fill(business.messages.service, name));
export const whatsappForEvent = (name: string) => whatsappUrl(fill(business.messages.event, name));

export const telUrl = () => `tel:${business.phone.replace(/[^\d+]/g, "")}`;

export const mailtoUrl = () =>
  `mailto:${business.email}?subject=${encodeURIComponent(business.messages.emailSubject)}&body=${encodeURIComponent(
    business.messages.emailBody,
  )}`;

export const formattedAddress = () => {
  const a = business.address;
  return [a.street, a.locality, `${a.city}, ${a.region} ${a.postalCode}`].filter(Boolean).join(", ");
};

export const mapsEmbedUrl = () =>
  `https://maps.google.com/maps?q=${encodeURIComponent(business.map.embedQuery)}&z=15&output=embed`;
