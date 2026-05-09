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
          950: "#0f172a",
          900: "#1e293b"
        },
        paper: {
          50: "#f5f9fc",
          100: "#edf4f8",
          200: "#d7e4ee"
        },
        accent: {
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490"
        }
      },
      boxShadow: {
        soft: "0 28px 70px -46px rgba(15, 23, 42, 0.32)",
        frame: "0 22px 60px -42px rgba(8, 47, 73, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
