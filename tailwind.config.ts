import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { width: "0px" },
          "100%": { width: "240px" },
        },
        "shrink-and-fixed": {
          "0%": { width: "240px", display: "flex" },
          "100%": { width: "0px", display: "fixed" },
        },
      },
      animation: {
        grow: "grow 0.2s ease-out",
        ungrow: "grow 0.2s ease-out reverse",
        "shrink-and-fixed": "shrink-and-fixed 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
