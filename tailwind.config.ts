import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1B2E",
        inksoft: "#16263D",
        linedark: "#28374F",
        paper: "#F6F7F4",
        paperdim: "#EDEEE8",
        slate: "#3A5A8C",
        gold: "#B9903F",
        charcoal: "#1C2431",
        charcoalsoft: "#5B6473",
        line: "#D8DCE2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
