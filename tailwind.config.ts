import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "call-to-action":
          "linear-gradient(90deg, rgba(0,0,0,0.60) 63%, rgba(237,241,242,0.17) 100%), url('../public/bg-cta-small.webp')",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "main-color-400": "#598D66",
        "main-color-200": "#E1EDE6",
        "main-color-100": "#F4F6F5",
        "main-black": "#2C2D35",
        "button-yellow": "#EEDB6D",
      },
    },
  },
  plugins: [],
};
export default config;
