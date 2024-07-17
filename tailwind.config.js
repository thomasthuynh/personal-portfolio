import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#38BDF8",
        white: "#ccd6f6",
        gray: "#8892b0",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        scroll: {
          "0%": { transform: "translateY(0) translateX(-50%)" },
          "50%": { transform: "translateY(8px) translateX(-50%)" },
          "100%": { transform: "translateY(0) translateX(-50%)" },
        },
      },
      animation: {
        wave: "wave 750ms ease infinite",
        scroll: "scroll 1000ms ease infinite",
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
