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
        bg: {
          primary: "#0A0F1E",
          secondary: "#0F1629",
          tertiary: "#131B2E",
        },
        accent: {
          cyan: "#06B6D4",
          purple: "#8B5CF6",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #06B6D4, #8B5CF6)",
        "gradient-accent-h": "linear-gradient(90deg, #06B6D4, #8B5CF6)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.4)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;