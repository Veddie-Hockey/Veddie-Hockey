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
        brand: {
          black: "#0A0C0E",
          surface: "#121518",
          card: "#181C20",
          "card-hover": "#20252B",
          border: "#2A3038",
          "border-light": "#3B434E",
          muted: "#94A0B0",
          cream: "#F5F2EB",
          "cream-light": "#FAF8F5",
          "cream-dark": "#DDD5C4",
          accent: "#D4A325",
          "accent-hover": "#E6B536",
          "accent-dark": "#A87E13",
          ice: "#38BDF8",
          red: "#E11D48",
          green: "#10B981"
        },
      },
      fontFamily: {
        heading: ["Impact", "Teko", "Oswald", "system-ui", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
