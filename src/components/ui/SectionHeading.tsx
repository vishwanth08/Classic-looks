import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Props = {
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export default function SectionHeading({ title, text, tone = "light", align = "left", className, id }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <h2 id={id} className={cn("display-lg", dark ? "text-ivory" : "text-walnut")}>
        {title}
      </h2>
      <span className={cn("gold-rule mt-6", align === "center" && "mx-auto")} />
      {text && (
        <p className={cn("mt-6 max-w-xl text-[1.05rem] leading-8", dark ? "text-ivory/75" : "text-charcoal/75", align === "center" && "mx-auto")}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
