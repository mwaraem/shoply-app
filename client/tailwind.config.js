/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5e9", 50: "#f0f9ff", 600: "#0284c7", 700: "#0369a1" }
      },
      boxShadow: {
        soft: '0 10px 25px 0 rgba(0, 0, 0, .05)',
      },
    },
  },
  plugins: [],
}

