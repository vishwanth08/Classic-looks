"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/config/business.1";
import { telUrl } from "@/lib/contact";
import { cn, EASE } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    if (!isHome) return;

    const targets = business.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, [isHome]);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while mobile menu is open
  useEffect(() => {
    if (!open) return;

    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-champagne/15 bg-walnut/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-all duration-500",
          solid ? "h-[4.25rem]" : "h-20 sm:h-24"
        )}
      >
        {/* Logo */}
        <div className="relative z-[60]">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 xl:flex"
        >
          {business.nav.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              aria-current={
                isHome && active === item.id ? "true" : undefined
              }
              className="link-underline text-[0.9rem] tracking-[0.03em] text-ivory/90 hover:text-champagne aria-[current=true]:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Mobile Call Button */}
          <a
            href={telUrl()}
            aria-label={`Call ${business.name}`}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-champagne hover:text-champagne xl:hidden"
          >
            <Phone
              className="h-[1.1rem] w-[1.1rem]"
              aria-hidden="true"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[6px] xl:hidden"
          >
            <motion.span
              className="block h-px w-6 bg-ivory"
              animate={
                open
                  ? { rotate: 45, y: 3.5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.35, ease: EASE }}
            />

            <motion.span
              className="block h-px w-6 bg-ivory"
              animate={
                open
                  ? { rotate: -45, y: -3.5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.35, ease: EASE }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-walnut px-6 pb-10 pt-28 xl:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center"
            >
              <ul className="space-y-1">
                {business.nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: 0.2 + i * 0.05,
                    }}
                  >
                    <Link
                      href={`/#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ivory/10 py-3 font-display text-[2rem] leading-tight text-ivory transition-colors hover:text-champagne"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile Contact Buttons */}
            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Button
                href={telUrl()}
                variant="outlineLight"
                icon={
                  <Phone
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                }
              >
                Call Now
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}