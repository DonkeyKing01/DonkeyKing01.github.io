import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        ink: {
          950: "#0B1020"
        },
        paper: {
          50: "#FAFAF8",
          100: "#F5F4F1",
          200: "#E9E6DF"
        },
        accent: {
          600: "#0F766E",
          700: "#0F5E57"
        }
      },
      boxShadow: {
        soft: "0 22px 60px -42px rgba(11, 16, 32, 0.55)",
        frame: "0 18px 55px -45px rgba(11, 16, 32, 0.60)"
      }
    }
  },
  plugins: []
};

export default config;
