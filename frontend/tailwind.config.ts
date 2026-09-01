import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pink: "#E7A9C4",
        "pink-light": "#FBE7EF",
        "pink-dark": "#C97A9D",
        charcoal: "#1F1F1F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)","serif"],
        body: ["var(--font-work-sans)","sans-serif"],
        mono: ["var(--font-space-mono)","monospace"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 48% 52% 45%",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drizzle: {
          "0%": { strokeDashoffset: "600" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        drizzle: "drizzle 1.8s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
