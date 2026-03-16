import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: {
          950: "#1a1a1a",
          900: "#2d2d2d"
        },
        paper: {
          50: "#FAFAF8",
          100: "#F5F4F1",
          200: "#E9E6DF"
        },
        accent: {
          500: "#C4956A",
          600: "#B07D4F",
          700: "#96663A"
        }
      },
      boxShadow: {
        soft: "0 22px 60px -42px rgba(26, 26, 26, 0.45)",
        frame: "0 18px 55px -45px rgba(26, 26, 26, 0.50)"
      }
    }
  },
  plugins: []
};

export default config;
