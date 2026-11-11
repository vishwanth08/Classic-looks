import { business } from "@/config/business";
import { Icon } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const selectedTitles = [
  "Complete Event Management",
  "Experienced Team",
  "Customized Themes",
  "Personalized Planning",
  "Transparent Packages",
];

export default function WhyChooseUs() {
  const selectedItems = selectedTitles
    .map((title) =>
      business.whyChooseUs.find((item) => item.title === title)
    )
    .filter(Boolean);

  return (
    <section
      id="why-us"
      aria-labelledby="why-title"
      className="section-y bg-wood"
    >
      <div className="container-x">
        <SectionHeading
          id="why-title"
          tone="dark"
          title="Why families and companies trust us with their biggest days"
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-champagne/20 bg-champagne/20 lg:mt-20 lg:grid-cols-5">
          {selectedItems.map((item, i) => {
            if (!item) return null;

            return (
              <li key={item.title} className="bg-wood">
                <Reveal
                  delay={i * 0.06}
                  className="group h-full"
                >
                  <div className="flex h-full min-h-[300px] flex-col p-7 transition-colors duration-500 hover:bg-walnut/60 sm:p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/50 text-champagne transition-transform duration-500 group-hover:scale-110">
                      <Icon
                        name={item.icon}
                        className="h-5 w-5"
                      />
                    </span>

                    <h3 className="mt-6 text-[1.4rem] leading-snug text-ivory">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[0.95rem] leading-7 text-ivory/70">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}