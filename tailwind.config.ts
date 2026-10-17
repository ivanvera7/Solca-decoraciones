import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        ink: "#1A1714",
        gold: {
          DEFAULT: "#B8965A",
          light: "#D4B98C",
          dark: "#8C6F42",
        },
        stone: {
          50: "#FAF8F5",
          100: "#F2EEE8",
          200: "#E5DFD5",
          300: "#D1C8B8",
          400: "#A89E8C",
          500: "#7C7365",
          600: "#5C5548",
          700: "#413C33",
          800: "#2A2620",
          900: "#171512",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
