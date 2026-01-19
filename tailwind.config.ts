import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff8f0",
          100: "#ffe4d0",
          200: "#ffc9a3",
          300: "#ffad75",
          400: "#ff9247",
          500: "#ff7a1a",
          600: "#ff6600",
          700: "#e55a00",
          800: "#cc4d00",
          900: "#b34200",
        },
        secondary: {
          50: "#f0fdfc",
          100: "#ccfaf5",
          200: "#99f5eb",
          300: "#66f0e0",
          400: "#33ebd5",
          500: "#00e6ca",
          600: "#00d4b4",
          700: "#00a894",
          800: "#007c6d",
          900: "#005250",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

