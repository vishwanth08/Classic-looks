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

// ---- The three values you will change first -------------------------------

/** Country code + number, digits only. Example: "919876543210" */
export const WHATSAPP_NUMBER = "9014458494";

/** Used for the Call buttons. Example: "+919876543210" */
export const PHONE_NUMBER = "+91 9014458494,+91 6300733360";

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

// ---- Business ---------------------------------------------------------------

export const business = {
  name: "Classic Look's Wedding",

  /** Letters shown in the loading screen, logo mark and favicon */
  initials: "SR",

  /** Optional logo image, e.g. "/images/logo.png". Leave "" to use the initials mark. */
  logo: "",

  tagline: "Wedding & Event Management",

  description:
    "We plan, design, coordinate and execute weddings and celebrations from first conversation to final farewell.",

  city: "Your City",
  region: "Your State",
  country: "India",

  phone: PHONE_NUMBER,
  whatsappNumber: WHATSAPP_NUMBER,
  email: BUSINESS_EMAIL,

  website: "https://www.example.com",

  instagram: {
    handle: "yourhandle",
    url: "https://www.instagram.com/yourhandle/",
  },

  /** Add Facebook, YouTube, etc. here. They also feed the SEO "sameAs" list. */
  social: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/yourhandle/",
    },
  ],

  address: {
    street: "Reddama Complex",
    locality: "Be side SBI Branch.",
    city: "Gurramkonda",
    region: "Andhra Pradesh",
    postalCode: "517297",
    country: "INDIA",
  },

  geo: {
    lat: 0,
    lng: 0,
  },

  /** Paste the "Share → Copy link" URL from Google Maps for your business */
  mapsUrl: "https://maps.google.com/?q=Your+Business+Name+Your+City",

  /** Search text for the embedded map (no API key needed). Set showEmbed to false to hide it. */
  map: {
    embedQuery: "Wedding event management Your City",
    showEmbed: true,
  },

  hours: [
    {
      label: "Monday – Saturday",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "09:00",
      display: "09:00 am – 09:00 pm",
    },
    {
      label: "Sunday",
      days: ["Sunday"],
      opens: "",
      closes: "",
      display: "By appointment",
    },
  ],

  // ---- Navigation -----------------------------------------------------------

  nav: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Our Events", id: "events" },
    { label: "Packages", id: "packages" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ],

  // ---- Hero -----------------------------------------------------------------

  hero: {
    headline: "Classic Look's Wedding Photography,Events",

    text:
      "Capturing Moments & Creating Memories...",

    image: "/images/hero/hero.svg",

    imageAlt: "A beautifully decorated wedding venue at golden hour",

    /** Optional looping background video. Leave "" for the image only. */
    video: "",
  },

  // ---- About ----------------------------------------------------------------

  about: {
    heading: "Welcome to Classic Look's Wedding Photography Events.",

    paragraphs: [
      "I’m passionate about capturing the beautiful moments, emotions, and memories that make every wedding special. ❤️✨ Our goal is to create natural, elegant, and timeless photographs and films that you can cherish for a lifetime. 📷🎥",

      "From wedding photography and cinematic videography to pre-wedding and post-wedding shoots, we focus on delivering quality work with a classic and professional touch.",
      "𝓨𝓸𝓾𝓻 𝓶𝓸𝓶𝓮𝓷𝓽𝓼.❤️𝓞𝓾𝓻 𝓿𝓲𝓼𝓲𝓸𝓷.📸𝓜𝓮𝓶𝓸𝓻𝓲𝓮𝓼 𝓯𝓸𝓻 𝓪 𝓵𝓲𝓯𝓮𝓽𝓲𝓶𝓮.♾️"
    ],

    // ONLY ONE ABOUT IMAGE
    images: [
      {
        src: "/images/about/sai-royal-logo.jpg",
        alt: "Sai Royal",
      },
    ],

    /** Edit the numbers, suffix and labels freely. */
    stats: [
      {
        value: 30,
        suffix: "+",
        label: "Events completed",
      },
      {
        value: 60,
        suffix: "+",
        label: "Weddings managed",
      },
      {
        value: 5,
        suffix: "+",
        label: "Years of experience",
      },
      {
        value: 99,
        suffix: "%",
        label: "Commitment",
      },
    ],

    /** Shown under the stats. Edit freely. */
    areasServed: "Serving Your City and nearby towns",
  },

  // ---- Services ---------------------------------------------------------------

  services: [
    {
      id: "wedding-photography",

      title: "Wedding Photography",

      icon: "camera",

      image: "/images/services/Wedding Photography.jpg",

      description:
        "Professional wedding photography capturing every beautiful moment, emotion and celebration of your special day.",
    },

    {
      id: "pre-post-wedding",

      title: "Pre & Post-Wedding Photoshoot",

      icon: "sparkles",

      image: "/images/services/pre-wedding-events.svg",

      description:
        "Creative pre-wedding and post-wedding photoshoots designed to capture your story, personality and unforgettable moments.",
    },

    {
      id: "birthday-photography",

      title: "Birthday Photography",

      icon: "cake",

      image: "/images/services/birthday-events.svg",

      description:
        "Professional birthday photography capturing the fun, emotions and special moments of your celebration.",
    },
  ] as Service[],

  // ---- Event types ------------------------------------------------------------

  eventTypes: [
    {
      id: "weddings",
      title: "Weddings",
      image: "/images/events/weddings.svg",
    },

    {
      id: "engagements",
      title: "Engagements",
      image: "/images/events/engagements.svg",
    },

    {
      id: "receptions",
      title: "Receptions",
      image: "/images/events/receptions.svg",
    },

    {
      id: "haldi",
      title: "Haldi",
      image: "/images/events/haldi.svg",
    },

   

  

    {
      id: "birthday-parties",
      title: "Birthday Parties",
      image: "/images/events/birthday-parties.svg",
    },

    {
      id: "anniversary-celebrations",
      title: "Anniversary Celebrations",
      image: "/images/events/anniversary-celebrations.svg",
    },

  
  ] as EventType[],

  // ---- Packages --------------------------------------------------------------

  packages: [
    {
      id: "essential",

      name: "Essential Package",

      price: "₹XX,XXX",

      priceNote: "Starting price",

      features: [
        "Event Planning",
        "Basic Decoration",
        "Photography",
        "Event Coordination",
      ],
    },

    {
      id: "signature",

      name: "Signature Package",

      price: "₹XX,XXX",

      priceNote: "Starting price",

      highlighted: true,

      badge: "Most Popular",

      features: [
        "Complete Event Planning",
        "Premium Decoration",
        "Photography & Videography",
        "Entertainment Coordination",
        "Event Coordination",
      ],
    },

    {
      id: "luxury",

      name: "Luxury Package",

      price: "₹XX,XXX",

      priceNote: "Starting price",

      features: [
        "Complete Wedding Planning",
        "Premium Theme Decoration",
        "Photography & Cinematic Film",
        "Stage & Floral Decoration",
        "Entertainment",
        "Catering Coordination",
        "Complete Event Management",
      ],
    },

    {
      id: "custom",

      name: "Custom Package",

      tagline: "Built Around Your Celebration",

      features: [
        "Choose only the services you need",
        "Tailored to your date, venue and guest count",
        "One clear quotation, no surprises",
      ],

      message:
        "Hi, I would like a custom quotation for my celebration. Please get in touch.",
    },
  ] as PackageTier[],

  // ---- Why choose us -----------------------------------------------------------

  whyChooseUs: [
    {
      title: "Complete Event Management",
      icon: "clipboard",
      text: "Planning, décor, vendors and the day itself, handled by one team.",
    },

    {
      title: "Experienced Team",
      icon: "users",
      text: "Planners and designers who have run events of every size.",
    },

    {
      title: "Customized Themes",
      icon: "palette",
      text: "Designs built around your story, never copied from a catalogue.",
    },

    {
      title: "Professional Vendors",
      icon: "handshake",
      text: "Trusted caterers, artists and technicians we work with regularly.",
    },

    {
      title: "Transparent Packages",
      icon: "shield",
      text: "Clear inclusions and one quotation, so there are no surprises.",
    },

    {
      title: "Attention to Detail",
      icon: "eye",
      text: "From the welcome sign to the last light, every detail is checked.",
    },

    {
      title: "On-Time Execution",
      icon: "timer",
      text: "Run sheets and rehearsals keep the day on schedule.",
    },

    {
      title: "Personalized Planning",
      icon: "userCheck",
      text: "One point of contact who knows your family and your priorities.",
    },

    {
      title: "High-Quality Photography",
      icon: "camera",
      text: "Photographs and films that capture the day as it felt.",
    },

    {
      title: "End-to-End Coordination",
      icon: "star",
      text: "We stay until the last guest leaves and the venue is cleared.",
    },
  ] as {
    title: string;
    icon: IconName;
    text: string;
  }[],

  // ---- Process ----------------------------------------------------------------

  process: [
    {
      title: "Consultation",
      text: "We meet, listen and note your date, budget, guest count and priorities.",
    },

    {
      title: "Understanding Your Vision",
      text: "We learn what the celebration should feel like and gather references together.",
    },

    {
      title: "Planning & Designing",
      text: "You receive a plan, a theme design and a clear quotation for approval.",
    },

    {
      title: "Vendor & Event Coordination",
      text: "We book, brief and schedule every vendor so you only deal with us.",
    },

    {
      title: "Event Execution",
      text: "Our team runs the day on site, from setup to the last guest.",
    },

    {
      title: "Creating Unforgettable Memories",
      text: "You enjoy your celebration, and we deliver the photographs and films afterwards.",
    },
  ],

  // ---- Testimonials -----------------------------------------------------------

  testimonials: [
    {
      name: "Priya & Arjun",
      event: "Wedding",
      rating: 5,
      review:
        "From the decoration to the final ceremony, everything was handled beautifully. We could actually enjoy our wedding without worrying about anything.",
    },

    {
      name: "Sneha Reddy",
      event: "Sangeet",
      rating: 5,
      review:
        "The stage, the lights and the sound were exactly what we imagined. Our guests are still talking about the night.",
    },

    {
      name: "Karthik M.",
      event: "Corporate Launch",
      rating: 5,
      review:
        "Professional from the first call. The event started on time and ran smoothly, and our team could focus on our guests.",
    },

    {
      name: "Anitha & Ravi",
      event: "Engagement",
      rating: 5,
      review:
        "They understood the theme we wanted and added ideas we had not thought of. The whole family was delighted.",
    },

    {
      name: "Meera S.",
      event: "Birthday Celebration",
      rating: 5,
      review:
        "A warm, well-organised party. The decoration was lovely and we did not have to manage a single vendor.",
    },

    {
      name: "Rahul & Divya",
      event: "Reception",
      rating: 5,
      review:
        "Clear communication and no last-minute surprises. They handled the entire reception while we spent time with our guests.",
    },
  ] as Testimonial[],

  // ---- Instagram ----------------------------------------------------------------

  instagramImages: [
    {
      src: "/images/instagram/post1.svg",
      alt: "Wedding stage decoration",
    },

    {
      src: "/images/instagram/post2.svg",
      alt: "Floral table styling",
    },

    {
      src: "/images/instagram/post3.svg",
      alt: "Mehendi celebration setup",
    },

    {
      src: "/images/instagram/post4.svg",
      alt: "Sangeet night lighting",
    },

    {
      src: "/images/instagram/post5.svg",
      alt: "Birthday party decoration",
    },

    {
      src: "/images/instagram/post6.svg",
      alt: "Reception entrance",
    },
  ],

  // ---- Call-to-action background ----------------------------------------------------

  cta: {
    image: "/images/cta/cta.svg",
  },

  // ---- WhatsApp messages --------------------------------------------------------

  messages: {
    general:
      "Hi, I would like to enquire about your wedding and event management services.",

    package:
      "Hi, I am interested in the {name}. Please share more details.",

    service:
      "Hi, I would like to enquire about your {name} service.",

    event:
      "Hi, I would like to plan a {name} celebration. Please share more details.",

    emailSubject: "Event Enquiry",

    emailBody:
      "Hi, I would like to enquire about your event management services.",
  },

  // ---- SEO --------------------------------------------------------------------------

  seo: {
    title: "Wedding Planner & Event Management Company in Your City",

    description:
      "Wedding planning, decoration, photography, entertainment and complete event management in Your City. Plan your wedding, engagement, reception or corporate event with one expert team.",

    keywords: [
      "wedding planner in Your City",
      "event management company in Your City",
      "wedding decoration in Your City",
      "wedding event management",
      "wedding planner near me",
      "event management company near me",
    ],

    ogImage: "/images/og.png",
  },
};

export type Business = typeof business;