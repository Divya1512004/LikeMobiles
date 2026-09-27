/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },

      colors: {
        navy: "#0F172A",
        brand: "#2563EB",
      },
    },
  },

  plugins: [],
};