import type { Config } from "tailwindcss";

// Colours are defined once as CSS variables in src/app/globals.css.
// Change them there and the whole site re-themes.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        walnut: token("walnut"),
        wood: token("wood"),
        beige: token("beige"),
        sand: token("sand"),
        ivory: token("ivory"),
        cream: token("warm-white"),
        champagne: token("champagne"),
        gold: token("gold-deep"),
        charcoal: token("charcoal"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%, 100%": { transform: "scale(1.75)", opacity: "0" },
        },
        scrollCue: {
          "0%": { transform: "translateY(-100%)" },
          "60%, 100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.2, 0.6, 0.3, 1) infinite",
        "scroll-cue": "scrollCue 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
