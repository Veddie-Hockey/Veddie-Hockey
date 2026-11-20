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
          // Official standards from Veddie_Hockey_Brand_Guide.pdf:
          // Rink Navy (60%): #06162B
          // Heritage Cream (30%): #F7ECD6
          // Signal Red (10% accent): #F21429
          // Slate (secondary text/details): #586575
          navy: "#06162B",
          black: "#030B17",
          surface: "#0A1F3B",
          card: "#0E2749",
          "card-hover": "#14335E",
          border: "#1B3B68",
          "border-light": "#284E85",
          slate: "#586575",
          muted: "#94A3B8",
          cream: "#F7ECD6",
          "cream-light": "#FBF5E8",
          "cream-dark": "#EAD7B5",
          accent: "#F21429", // Signal Red
          "accent-hover": "#D90F23",
          red: "#F21429",
          "red-hover": "#D90F23",
          gold: "#D4A325",
          ice: "#38BDF8",
          green: "#10B981",
        },
      },
      fontFamily: {
        // Universal Inter font family across all headers and UI
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
