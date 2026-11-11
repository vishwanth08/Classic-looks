import Link from "next/link";
import { notFound } from "next/navigation";

const serviceDetails = {
  wedding: {
    title: "Wedding Photography & Events..",
    subtitle:
      "Complete photography and Event coverage for your wedding celebrations.",

    services: [
      {
        title: "Candid Photography & Videography ",
        text: "Natural photographs capturing genuine emotions, expressions and unforgettable moments.",
      },
      {
        title: "Traditional Photography & Videography",
        text: "Complete coverage of important ceremonies, family moments and traditional wedding rituals.",
      },
      {
        title: "LED Wall's ",
        text: "Premium LED wall displays delivering vibrant visuals & experience for your celebration.",
      },
      {
        title: "Drone & Event Highlights",
        text: "Aerial photography and cinematic drone footage for venues, entrances, celebrations and large events.",
      },
      {
        title: "Live Photos & YouTube Live",
        text: "Professional live photography and seamless YouTube Live streaming to share your celebrations.",
      },
      {
        title: "Wedding Album & Video",
        text: "Beautifully designed wedding albums featuring the most memorable moments from your celebration.",
      },
    ],
  },

  "pre-post-wedding": {
    title: "Pre & Post-Wedding Photography",
    subtitle:
      "Creative photography and cinematic sessions designed around your relationship and personality.",

    services: [
      {
        title: "Pre-Wedding Candid Photography",
        text: "Creative couple photoshoots at locations and concepts chosen around your story.",
      },
      {
        title: "Pre-Wedding Candid Videography",
        text: "A cinematic love story created with professional camera movements, editing and music.",
      },
      {
        title: "Cinematic Pre-Wedding Film",
        text: "Capturing your chemistry, emotions, and story through cinematic visuals.",
      },
      {
        title: "Drone Coverage",
        text: "Aerial footage for outdoor locations and cinematic couple sequences where suitable.",
      },
      {
        title: "Creative Concepts",
        text: "Location, outfit and photography concepts designed to create a unique visual story.",
      },
      {
        title: "Location's",
        text: " Thoughtfully selected locations designed around your love story.",
      },
    ],
  },

  engagement: {
    title: "Engagement Photography & Videography",
    subtitle:
      "Capture the beginning of your journey with beautiful engagement photography and Video coverage.",

    services: [
      {
        title: "Traditional Photo & Videography",
        text: "Professional coverage of your engagement ceremony and the important moments of the celebration.",
      },
      {
        title: "Candid Photography",
        text: "Natural photographs of the couple, family members and guests throughout the event.",
      },
      {
        title: "Candid Videography",
        text: "A professionally edited cinematic video preserving the atmosphere and emotions of your engagement.",
      },
      {
        title: "LED Wall's",
        text: "Premium LED wall displays delivering vibrant visuals & experience for your celebration",
      },
      {
        title: "Drone ",
        text: "Aerial coverage of suitable venues and outdoor celebrations.",
      },
      {
        title: "Event Highlights",
        text: "A short highlights film featuring the best moments of your engagement.",
      },
    ],
  },

  "any-events": {
    title: "Event Photography & Videography",
    subtitle:
      "Professional photography and videography for celebrations and events of every kind.",

    services: [
      {
        title: "Birthday Event's",
        text: "Capture birthdays, milestone celebrations, parties and memorable family moments.",
      },
      {
        title: "Retirement Event's",
        text: "Complete photography and cinematic coverage of your retirement celebration.",
      },
      {
        title: "Anniversary Event's",
        text: "Beautifully capture anniversary celebrations, couple portraits and family moments.",
      },
      {
        title: "Mature Event's",
        text: "Beautifully documenting a celebration filled with tradition.",
      },
      {
        title: "Maternaty Event's",
        text: "A graceful celebration of motherhood, love, and cherished family moments.",
      },
      {
        title: "Complete Event Coverage",
        text: "Photography, videography, candid coverage and professionally edited highlights for your event.",
      },
    ],
  },
};

type ServiceSlug = keyof typeof serviceDetails;

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!serviceDetails[slug as ServiceSlug]) {
    notFound();
  }

  const service = serviceDetails[slug as ServiceSlug];

  return (
    <main className="min-h-screen bg-ivory">

      {/* HERO */}
      <section className="bg-walnut text-ivory">

        <div className="container-x py-20 lg:py-28">

          <div className="max-w-4xl">

            <Link
              href="/services"
              className="text-sm uppercase tracking-[0.15em] text-champagne hover:text-ivory"
            >
              ← Back to Our Services
            </Link>

            <h1 className="mt-8 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/75 sm:text-lg">
              {service.subtitle}
            </p>

          </div>

        </div>

      </section>

      {/* SERVICE DETAILS */}
      <section className="section-y">

        <div className="container-x">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-champagne">
              What We Offer
            </p>

            <h2 className="mt-4 font-display text-4xl text-walnut sm:text-5xl">
              Complete Coverage For Your Celebration
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {service.services.map((item) => (

              <article
                key={item.title}
                className="border border-walnut/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:shadow-lg"
              >

                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-walnut text-champagne">
                  ✦
                </div>

                <h3 className="font-display text-2xl text-walnut">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-charcoal/70">
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="bg-walnut py-20 text-center text-ivory">

        <div className="container-x">

          <h2 className="font-display text-4xl sm:text-5xl">
            Let&apos;s Capture Your Special Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-ivory/70">
            Tell us about your celebration and we will help you choose the
            right photography and cinematic coverage.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex border border-champagne bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-walnut transition-colors hover:bg-ivory"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}