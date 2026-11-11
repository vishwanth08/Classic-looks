import { business } from "@/config/business";
import { formattedAddress } from "@/lib/contact";

/** JSON-LD for Google Search / Maps. All values come from src/config/business.ts. */
export function buildJsonLd() {
  const a = business.address;
  const url = business.website.replace(/\/$/, "");
  const sameAs = business.social.map((s) => s.url);

  const openingHoursSpecification = business.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: business.name,
        url,
        logo: `${url}${business.logo || "/images/og.png"}`,
        sameAs,
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${url}/#localbusiness`,
        name: business.name,
        description: business.seo.description,
        url,
        image: `${url}${business.seo.ogImage}`,
        telephone: business.phone,
        email: business.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: [a.street, a.locality].filter(Boolean).join(", "),
          addressLocality: a.city,
          addressRegion: a.region,
          postalCode: a.postalCode,
          addressCountry: a.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
        hasMap: business.mapsUrl,
        openingHoursSpecification,
        areaServed: { "@type": "City", name: business.city },
        sameAs,
        knowsAbout: ["Wedding planning", "Event management", "Wedding decoration", "Event photography"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${business.name} services`,
          itemListElement: business.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
        // Full address as a single string helps some validators
        location: { "@type": "Place", name: business.name, address: formattedAddress() },
      },
    ],
  };
}
