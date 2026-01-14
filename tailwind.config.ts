import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors pulled from her photos
        sky: {
          900: '#0C4A6E', // Deep mountain blue
        },
        nature: {
          100: '#ECFDF5', // Very light mint background
          800: '#065F46', // Deep forest green
        },
        gold: {
          500: '#F59E0B', // Vibrant sun accent
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;