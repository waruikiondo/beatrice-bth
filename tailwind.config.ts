import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kenya-green': '#2F5233', // Lush forest green
        'kenya-gold': '#FFB52E',  // Sun/Savannah gold
        'kenya-sand': '#F9F4EF',  // Soft background paper color
        'kenya-clay': '#B85042',  // Red earth accent
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071')", // Mt Kenya feel
      }
    },
  },
  plugins: [],
};
export default config;