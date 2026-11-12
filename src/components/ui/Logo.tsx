import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business.1";

/** Brand lockup. Uses business.logo if set, otherwise the initials mark. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} aria-label={`${business.name} – home`}>
      {business.logo ? (
        <Image src={business.logo} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
      ) : (
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/70 font-display text-[1.1rem] text-champagne">
          {business.initials}
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.4rem] tracking-wide text-ivory">{business.name}</span>
        <span className="mt-1 hidden text-[0.72rem] tracking-[0.18em] text-champagne/90 sm:block">{business.tagline}</span>
      </span>
    </Link>
  );
}
