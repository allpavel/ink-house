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
      },
      rotate: {
        Y: "rotateY(180deg)",
      },
    },
  },
  plugins: [],
};
export default config;
