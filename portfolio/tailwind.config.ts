import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
