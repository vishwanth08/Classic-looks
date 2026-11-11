
import Link from "next/link";
import EventGallery from "@/components/EventGallery";

const events = {
  weddings: {
    title: "Wedding",
    description:
      "Beautifully planned and captured wedding celebrations filled with love, traditions, emotions, and unforgettable moments.",
    categories: [
      {
        slug: "traditional",
        title: "Traditional Photo & Video",
        folder: "Wedding/traditional",
      },
      {
        slug: "candid",
        title: "Candid",
        folder: "Wedding/candid",
      },
      {
        slug: "led-walls",
        title: "LED Walls",
        folder: "Wedding/led-walls",
      },
      {
        slug: "live-photos",
        title: "Live Photos",
        folder: "Wedding/live-photos",
      },
    ],
  },

  "pre-post-wedding": {
    title: "Pre & Post-Wedding",
    description:
      "Creative photography and cinematic sessions designed around your relationship, personality, and special moments.",
    categories: [
      {
        slug: "candid-photos-videos",
        title: "Candid Photos & Videos",
        folder: "Pre-Post-Wedding/candid",
      },
      {
        slug: "drone",
        title: "Drone",
        folder: "Pre-Post-Wedding/drone",
      },
      {
        slug: "event-highlights",
        title: "Event Highlights",
        folder: "Pre-Post-Wedding/event-highlights",
      },
    ],
  },

  engagement: {
    title: "Engagement",
    description:
      "Capture the beginning of your journey with beautiful engagement photography and unforgettable moments.",
    categories: [
      {
        slug: "traditional",
        title: "Traditional Photo & Video",
        folder: "Engagement/traditional",
      },
      {
        slug: "candid",
        title: "Candid",
        folder: "Engagement/candid",
      },
      {
        slug: "led-walls",
        title: "LED Walls",
        folder: "Engagement/led-walls",
      },
      {
        slug: "live-photos",
        title: "Live Photos",
        folder: "Engagement/live-photos",
      },
    ],
  },

  "any-events": {
    title: "Any Events",
    description:
      "Professional photography and videography for celebrations and special occasions of every kind.",
    categories: [
      {
        slug: "birthday",
        title: "Birthday",
        folder: "Any-Events/birthday",
      },
      {
        slug: "retirement",
        title: "Retirement",
        folder: "Any-Events/retirement",
      },
      {
        slug: "anniversary",
        title: "Anniversary",
        folder: "Any-Events/anniversary",
      },
      {
        slug: "mature",
        title: "Mature",
        folder: "Any-Events/mature",
      },
      {
        slug: "maternity",
        title: "Maternity",
        folder: "Any-Events/maternity",
      },
    ],
  },
};

type EventSlug = keyof typeof events;

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events[slug as EventSlug];

  if (!event) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#17110d] px-6 text-[#f5eee5]">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl">
            Event Not Found
          </h1>

          <p className="mb-6 opacity-80">
            The event you are looking for does not exist.
          </p>

          <Link
            href="/#events"
            className="inline-block rounded-full bg-[#f5eee5] px-6 py-3 text-[#17110d]"
          >
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#17110d] text-[#f5eee5]">

      {/* HERO */}
      <section className="flex min-h-[65vh] items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <Link
            href="/#events"
            className="text-sm uppercase tracking-[0.2em] text-[#d9b36c] transition-colors hover:text-white"
          >
            ← Back to Our Events
          </Link>

          <p className="mb-6 mt-10 text-sm uppercase tracking-[0.3em] opacity-70">
            Our Events
          </p>

          <h1 className="mb-8 font-serif text-5xl leading-tight md:text-7xl">
            {event.title}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
            {event.description}
          </p>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[#f4ede3] px-6 py-20 text-[#241a14]">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] opacity-60">
              Explore
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              {event.title} Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 opacity-70">
              Choose a category below to explore the photographs and
              memories from our work.
            </p>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {event.categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="group border border-[#241a14]/15 bg-white/40 p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#b89255] hover:bg-white/70 hover:shadow-xl"
              >

                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-[#241a14] text-xl text-[#d9b36c]">
                  ✦
                </div>

                <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#9b743d]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.15em] opacity-50">
                  View Photos →
                </p>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* GALLERIES */}
      <section className="bg-[#17110d] px-6 py-24">
        <div className="mx-auto max-w-6xl">

          {event.categories.map((category) => (
            <div
              key={category.slug}
              id={category.slug}
              className="scroll-mt-20 border-b border-white/10 py-20 first:pt-0"
            >

              <div className="mb-10 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d9b36c]">
                  {event.title}
                </p>

                <h2 className="font-serif text-4xl text-[#f5eee5] md:text-5xl">
                  {category.title}
                </h2>
              </div>

              <EventGallery
                title={category.title}
                folder={category.folder}
              />

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#f4ede3] px-6 py-20 text-center text-[#241a14]">
        <div className="mx-auto max-w-3xl">

          <h2 className="font-serif text-4xl md:text-5xl">
            Let&apos;s Capture Your Special Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 opacity-70">
            Tell us about your celebration and we will help you create
            beautiful memories that last forever.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex bg-[#241a14] px-8 py-3 text-sm uppercase tracking-[0.15em] text-[#f5eee5] transition-colors hover:bg-[#9b743d]"
          >
            Contact Us
          </Link>

        </div>
      </section>

      {/* BACK */}
      <div className="bg-[#17110d] py-10 text-center">
        <Link
          href="/#events"
          className="text-[#f5eee5]/60 transition-colors hover:text-[#d9b36c]"
        >
          ← Back to Events
        </Link>
      </div>

    </main>
  );
}
