import Link from "next/link";

const services = [
  {
    slug: "wedding",
    title: "Wedding",
  },
  {
    slug: "pre-post-wedding",
    title: "Pre & Post-Wedding",
  },
  {
    slug: "engagement",
    title: "Engagement",
  },
  {
    slug: "any-events",
    title: "Any Events",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ivory">

      {/* HERO */}
      <section className="bg-walnut py-24 text-center text-ivory sm:py-32">
        <div className="container-x">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-champagne">
            What We Do
          </p>

          <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Our Services
          </h1>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-x">

          <div className="mx-auto max-w-3xl">

            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block border-b border-walnut/15 py-10 text-center transition-all duration-300 first:border-t hover:bg-sand sm:py-14"
              >

                <h2 className="font-display text-4xl text-walnut transition-colors duration-300 group-hover:text-champagne sm:text-5xl lg:text-6xl">
                  {service.title}
                </h2>

                <span className="mt-4 inline-block text-sm uppercase tracking-[0.18em] text-charcoal/50 transition-colors duration-300 group-hover:text-walnut">
                  View Details →
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}