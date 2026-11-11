/**
 * ============================================================
 *  PHOTO GALLERY  (this is the ONLY file you edit to manage photos)
 * ============================================================
 *
 *  HOW TO ADD A PHOTO
 *  1. Copy your photo (.jpg / .jpeg / .png / .webp) into the matching folder:
 *       public/images/weddings/      public/images/decorations/
 *       public/images/stage/         public/images/haldi/
 *       public/images/mehendi/       public/images/sangeet/
 *       public/images/birthday/      public/images/corporate/
 *     (Receptions can live in "weddings", Floral Decorations in "decorations", or any folder you like.)
 *  2. Add one block to the `gallery` list below:
 *       { image: "/images/weddings/my-photo.jpg", title: "Beach Wedding", category: "Weddings",
 *         description: "Optional one-line description", shape: "portrait" }
 *  3. Save. That's it.
 *
 *  HOW TO REMOVE A PHOTO: delete its block here (and the file from the folder if you like).
 *
 *  `shape` is optional ("portrait" | "landscape" | "square", default "portrait").
 *  It only reserves the right amount of space while the image loads — the photo is always
 *  shown in its real proportions.
 *
 *  Tips: resize photos to about 1600px on the long edge and keep each under ~400 KB.
 *  The website converts them to WebP/AVIF automatically.
 *
 *  The gallery filter tabs come from `galleryCategories`. If you invent a new category,
 *  add its name there too.
 */

export type GalleryShape = "portrait" | "landscape" | "square";

export type GalleryImage = {
  /** Path starting with /images/... (file lives in /public/images/...) */
  image: string;
  title: string;
  category: string;
  description?: string;
  shape?: GalleryShape;
};

/** Order of the filter tabs shown above the gallery. */
export const galleryCategories: string[] = [
  "Weddings",
  "Decorations",
  "Stage Designs",
  "Haldi",
  "Mehendi",
  "Sangeet",
  "Receptions",
  "Birthday Events",
  "Corporate Events",
  "Floral Decorations",
];

export const gallery: GalleryImage[] = [
  {
    image: "/images/weddings/wedding1.svg",
    title: "Garden Wedding Ceremony",
    category: "Weddings",
    description: "An open-air ceremony styled around the couple's palette.",
    shape: "portrait",
  },
  {
    image: "/images/weddings/wedding2.svg",
    title: "Traditional Wedding Mandap",
    category: "Weddings",
    description: "A fully draped mandap with fresh floral detailing.",
    shape: "landscape",
  },
  {
    image: "/images/weddings/wedding3.svg",
    title: "Evening Wedding Celebration",
    category: "Weddings",
    description: "Warm lighting and layered décor for an evening ceremony.",
    shape: "portrait",
  },
  {
    image: "/images/weddings/wedding4.svg",
    title: "Wedding Entrance Setup",
    category: "Weddings",
    description: "A welcoming entrance that sets the tone for the day.",
    shape: "square",
  },
  {
    image: "/images/weddings/reception1.svg",
    title: "Reception Stage",
    category: "Receptions",
    description: "A reception stage designed for portraits and first dances.",
    shape: "landscape",
  },
  {
    image: "/images/weddings/reception2.svg",
    title: "Reception Hall Styling",
    category: "Receptions",
    description: "Table layouts, lighting and décor planned together.",
    shape: "portrait",
  },
  {
    image: "/images/weddings/reception3.svg",
    title: "Grand Reception Entry",
    category: "Receptions",
    description: "A walkway of florals and soft lights for the couple's entry.",
    shape: "square",
  },
  {
    image: "/images/decorations/decor1.svg",
    title: "Themed Venue Decoration",
    category: "Decorations",
    description: "Venue-wide theme carried through every corner.",
    shape: "landscape",
  },
  {
    image: "/images/decorations/decor2.svg",
    title: "Entrance Arch Decoration",
    category: "Decorations",
    description: "A statement arch to greet guests.",
    shape: "portrait",
  },
  {
    image: "/images/decorations/decor3.svg",
    title: "Table Styling",
    category: "Decorations",
    description: "Linen, candles and florals styled to match the theme.",
    shape: "square",
  },
  {
    image: "/images/decorations/decor4.svg",
    title: "Mandap Draping",
    category: "Decorations",
    description: "Fabric draping that frames the ceremony space.",
    shape: "portrait",
  },
  {
    image: "/images/decorations/floral1.svg",
    title: "Floral Backdrop",
    category: "Floral Decorations",
    description: "Fresh-flower backdrop built for photographs.",
    shape: "portrait",
  },
  {
    image: "/images/decorations/floral2.svg",
    title: "Floral Aisle",
    category: "Floral Decorations",
    description: "Aisle styling with florals and candlelight.",
    shape: "landscape",
  },
  {
    image: "/images/decorations/floral3.svg",
    title: "Hanging Florals",
    category: "Floral Decorations",
    description: "Suspended floral installations above the seating.",
    shape: "portrait",
  },
  {
    image: "/images/stage/stage1.svg",
    title: "Grand Wedding Stage",
    category: "Stage Designs",
    description: "A custom stage built to the venue's dimensions.",
    shape: "landscape",
  },
  {
    image: "/images/stage/stage2.svg",
    title: "Reception Stage Design",
    category: "Stage Designs",
    description: "Layered backdrop with lighting and floral accents.",
    shape: "portrait",
  },
  {
    image: "/images/stage/stage3.svg",
    title: "Minimal Floral Stage",
    category: "Stage Designs",
    description: "A restrained stage design with a focus on florals.",
    shape: "square",
  },
  {
    image: "/images/haldi/haldi1.svg",
    title: "Haldi Ceremony Setup",
    category: "Haldi",
    description: "A bright, relaxed setup for the haldi ceremony.",
    shape: "portrait",
  },
  {
    image: "/images/haldi/haldi2.svg",
    title: "Haldi Décor Details",
    category: "Haldi",
    description: "Marigold, brass and fabric details.",
    shape: "landscape",
  },
  {
    image: "/images/haldi/haldi3.svg",
    title: "Marigold Haldi Backdrop",
    category: "Haldi",
    description: "A marigold backdrop for family photographs.",
    shape: "square",
  },
  {
    image: "/images/mehendi/mehendi1.svg",
    title: "Mehendi Seating Lounge",
    category: "Mehendi",
    description: "Low seating and soft lighting for the mehendi.",
    shape: "landscape",
  },
  {
    image: "/images/mehendi/mehendi2.svg",
    title: "Mehendi Décor",
    category: "Mehendi",
    description: "Colourful fabric and floral styling.",
    shape: "portrait",
  },
  {
    image: "/images/mehendi/mehendi3.svg",
    title: "Mehendi Detailing",
    category: "Mehendi",
    description: "Small details that make the afternoon feel special.",
    shape: "square",
  },
  {
    image: "/images/sangeet/sangeet1.svg",
    title: "Sangeet Night Stage",
    category: "Sangeet",
    description: "Stage, lighting and sound planned for performances.",
    shape: "landscape",
  },
  {
    image: "/images/sangeet/sangeet2.svg",
    title: "Sangeet Lighting",
    category: "Sangeet",
    description: "Lighting design for an evening of dance.",
    shape: "portrait",
  },
  {
    image: "/images/sangeet/sangeet3.svg",
    title: "Sangeet Dance Floor",
    category: "Sangeet",
    description: "A dance floor styled for the whole family.",
    shape: "square",
  },
  {
    image: "/images/birthday/birthday1.svg",
    title: "Birthday Theme Setup",
    category: "Birthday Events",
    description: "A themed setup planned around the guest of honour.",
    shape: "portrait",
  },
  {
    image: "/images/birthday/birthday2.svg",
    title: "Balloon & Backdrop Decoration",
    category: "Birthday Events",
    description: "Balloon work and a custom photo backdrop.",
    shape: "landscape",
  },
  {
    image: "/images/birthday/birthday3.svg",
    title: "Dessert Table",
    category: "Birthday Events",
    description: "A styled dessert table that matches the theme.",
    shape: "square",
  },
  {
    image: "/images/corporate/corporate1.svg",
    title: "Product Launch Event",
    category: "Corporate Events",
    description: "Staging and branding for a launch evening.",
    shape: "landscape",
  },
  {
    image: "/images/corporate/corporate2.svg",
    title: "Conference Stage",
    category: "Corporate Events",
    description: "A clean stage for talks and presentations.",
    shape: "portrait",
  },
  {
    image: "/images/corporate/corporate3.svg",
    title: "Annual Celebration",
    category: "Corporate Events",
    description: "A company celebration with entertainment and dining.",
    shape: "square",
  },
];
