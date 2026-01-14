import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbfafa",
        purple: "#a990e4",
      },
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "serif"],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
