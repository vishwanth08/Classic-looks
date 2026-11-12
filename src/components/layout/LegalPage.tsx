import { business } from "@/config/business.1";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-ivory pb-24 pt-32 sm:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="display-lg text-walnut">{title}</h1>
        <span className="gold-rule mt-6" />
        <div className="mt-10 space-y-5 text-[1.02rem] leading-8 text-charcoal/85 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-walnut">
          {children}
        </div>
        <p className="mt-14 text-sm text-charcoal/60">
          Questions? Email{" "}
          <a className="link-underline text-gold" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
