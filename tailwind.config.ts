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
        white: "#FFFFFF",
        black: "#111111",
        red: {
          DEFAULT: "#E10600",
          hover: "#C00500",
          subtle: "rgba(225, 6, 0, 0.06)",
          border: "rgba(225, 6, 0, 0.25)",
        },
        light: "#F5F5F5",
        border: "#E5E5E5",
        muted: "#666666",
        darkBorder: "#262626",
        darkSurface: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
