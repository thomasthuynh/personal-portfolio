import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#38BDF8",
        white: "#CCD6F6",
        gray: "#8892B0",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        scroll: {
          "0%": { transform: "scaleY(0)", "transform-origin": "top" },
          "50%": { transform: "scaleY(1)", "transform-origin": "top" },
          "55%": { transform: "scaleY(1)", "transform-origin": "bottom" },
          "100%": { transform: "scaleY(0)", "transform-origin": "bottom" },
        },
      },
      animation: {
        wave: "wave 750ms ease infinite",
        scroll: "scroll 1500ms ease infinite",
      },
      boxShadow: {
        "spread-secondary": "0 0 2px 2px rgba(56, 189, 248, 1)",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
