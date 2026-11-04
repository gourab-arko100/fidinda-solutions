import type { Config } from "tailwindcss";

/** Theme-aware tokens are defined as CSS variables in app/globals.css (light + dark). */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        /* Official brand colours */
        navy: {
          DEFAULT: "#1C095A", // Deep Navy / Dark Indigo — RGB 28,9,90 — C69 M90 Y0 K65
          950: "#0E0430",
          900: "#1C095A",
          800: "#2A1673",
          700: "#3B2A8A",
          300: "#A69BD1",
          100: "#E8E5F3",
          50: "#F4F2FA",
        },
        /* Neutral near-black for photo overlays and dark panels (keeps navy as an accent) */
        ink: "#111019",
        brand: {
          red: "#E1041C", // Bright Red — RGB 225,4,28 — C0 M98 Y88 K12
          redDark: "#B80317",
        },
        /* Semantic tokens that switch with the theme */
        page: token("bg"),
        soft: token("soft"),
        card: token("card"),
        fg: token("fg"),
        line: token("line"),
        band: token("band"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--shadow) / 0.06), 0 10px 30px -14px rgb(var(--shadow) / 0.25)",
        lift: "0 2px 6px rgb(var(--shadow) / 0.08), 0 30px 60px -24px rgb(var(--shadow) / 0.45)",
        glow: "0 10px 30px -10px rgba(225, 4, 28, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "ken-burns": "ken-burns 12s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
