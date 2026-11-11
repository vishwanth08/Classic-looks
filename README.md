# Aurelia Events – Wedding & Event Management Website

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React.
Frontend only: no backend, database, login, API or payments. Deploys to Vercel as-is.

## 1. Install

Requires Node.js 18.18 or newer (Node 20+ recommended).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## 3. Replace the placeholders (all in one file)

Open **`src/config/business.ts`**. The first three lines hold what you will change first:

```ts
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";  // country code + number, digits only
export const PHONE_NUMBER    = "+91XXXXXXXXXX";
export const BUSINESS_EMAIL  = "example@email.com";
```

The same file holds the company name, initials, logo, tagline, Instagram, address, Google Maps link,
opening hours, hero text, About statistics, services, event types, packages and prices, testimonials,
WhatsApp messages and SEO text.

- **Prices:** edit `price` inside `packages`.
- **Google Maps link:** open your business in Google Maps, choose Share, Copy link, paste into `mapsUrl`.
  Put your latitude/longitude in `geo` for search engines.
- **Logo:** put a file in `public/images/` and set `logo: "/images/logo.png"`. Leave `""` to use the initials mark.
- **Favicon:** edit the initials in `src/app/icon.svg`. **Share image:** replace `public/images/og.png` (1200x630).
- **Colours:** change the RGB values at the top of `src/app/globals.css`.
- **Website address:** set `website` to your real domain. The sitemap, robots.txt and SEO tags use it.
- **Legal pages:** `/privacy` and `/terms` are template text. Have them reviewed before relying on them.

## 4. Add your own photos

1. Copy photos into the matching folder under `public/images/`:
   `weddings`, `decorations`, `stage`, `haldi`, `mehendi`, `sangeet`, `birthday`, `corporate`.
2. Open **`src/data/gallery.ts`** and add one block:
   ```ts
   { image: "/images/weddings/beach-wedding.jpg", title: "Beach Wedding", category: "Weddings",
     description: "Sunset ceremony", shape: "landscape" },
   ```
3. Save. To remove a photo, delete its block.

Use JPG/PNG/WebP, about 1600px on the long edge, under ~400 KB each. The site serves WebP/AVIF automatically.
The gallery shows the first 12 photos and loads more on request.

Other images to replace (same idea, change the path in `business.ts`):
- Hero: `public/images/hero/hero.svg` (or set `hero.video` for a short looping video)
- About: `public/images/about/`, Services: `public/images/services/`, Event types: `public/images/events/`
- Instagram tiles: `public/images/instagram/`, Final call-to-action background: `public/images/cta/`

The current images are generated placeholder artwork so the layout can be reviewed. Replace them before launch.

## 5. Deploy to Vercel

Push to GitHub, import the repository in Vercel, accept the defaults. No environment variables are needed.

## Notes

- Package, service and event buttons open WhatsApp with a pre-filled message (edit them under `messages`).
- Until you enter a real number, WhatsApp, call and email links point at the placeholder values.
- Structured data uses `LocalBusiness` + `ProfessionalService` and `Organization`. schema.org has no dedicated
  "EventPlanner" type, so the closest valid types are used.
- Photo folders follow your section 12 names (`stage`, `birthday`). Section 36 of the brief said `stages`/`birthdays`;
  rename the folders and the matching paths in `gallery.ts` if you prefer those.
- Animations respect the visitor's reduced-motion setting.
