import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "dark" | "outlineLight" | "outlineDark" | "text" | "textLight";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  gold: "bg-champagne text-walnut hover:bg-ivory hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]",
  dark: "bg-walnut text-ivory hover:bg-wood hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(43,27,18,0.6)]",
  outlineLight: "border border-ivory/45 text-ivory hover:border-ivory hover:bg-ivory hover:text-walnut",
  outlineDark: "border border-walnut/40 text-walnut hover:border-walnut hover:bg-walnut hover:text-ivory",
  text: "link-underline text-gold",
  textLight: "link-underline text-champagne",
};

/** One button for every kind of link: pages, #sections, WhatsApp, tel:, mailto:, Maps, Instagram. */
export default function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  icon,
  arrow,
  className,
  ariaLabel,
  onClick,
}: Props) {
  const isText = variant === "text" || variant === "textLight";
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 font-normal tracking-[0.03em] transition-all duration-300 ease-out",
    isText
      ? "text-[0.95rem]"
      : size === "sm"
        ? "h-10 px-5 text-[0.85rem]"
        : "h-12 px-7 text-[0.92rem]",
    variants[variant],
    className,
  );
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  const external = /^https?:\/\//.test(href);
  const plain = /^(tel:|mailto:)/.test(href);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }
  if (plain) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
}
