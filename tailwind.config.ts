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
        primary: "#070227", 
        secondary: "#412BE0",
        white: "white",
        black: "black",
           gray: {
          50:  "#F9FAFB",
          100: "#F3F4F6", // ring-gray-100
          200: "#E5E7EB", // track, borders
          300: "#D1D5DB", // step dots
          400: "#9CA3AF", // placeholders, fine text
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151", // button text, etc.
          800: "#1F2937", // input text
          900: "#111827",
        },
        accent: "#22D3EE", 
         brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        
        step: {
          track: "#E5E7EB",          // gray-200
          dot: "#D1D5DB",            // gray-300
          label: "#334155",          // slate-700
          labelActive: "#4338CA",    // indigo-700
          ring: "#F3F4F6",           // gray-100
        },
        brand2: {
          start: "#4F46E5",          // indigo-600
          end: "#6366F1",            // indigo-500
          accent: "#3B82F6",         // blue-500
        },
      },
      backgroundImage: {
        gradiant: "radial-gradient(69.64% 69.64% at 50% 97.5%, #412BE0 0%, #070227 100%)",
        sides_gradiant: "linear-gradient(91deg,rgba(65, 43, 224, 0.15) 0%, rgba(65, 43, 224, 0) 100%)"
      },
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
         boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.08)",
        glass: "0 10px 60px rgba(24, 24, 46, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
