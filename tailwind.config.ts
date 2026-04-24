import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1B2A4A", dark: "#101E35" },
        orange: { DEFAULT: "#E8621A", dark: "#C95214" },
        grey: { light: "#F4F4F4", mid: "#CCCCCC", dark: "#888888" },
        body: "#3A4A65",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.07)",
        md: "0 4px 16px rgba(0,0,0,0.09)",
        lg: "0 8px 32px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "4px",
        md: "4px",
        lg: "4px",
        full: "9999px",
      },
      letterSpacing: {
        eyebrow: "0.22em",
        logo: "0.04em",
      },
      lineHeight: {
        heading: "1.1",
        body: "1.7",
        lead: "1.65",
      },
    },
  },
  plugins: [],
};

export default config;
