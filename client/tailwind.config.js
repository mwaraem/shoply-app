/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#111827',   // almost-black for buttons / text
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        },

        surface: {
          DEFAULT: '#f5f5f5',
          dark: '#111827',
        },
      },
      boxShadow: {
        soft: '0 10px 25px 0 rgba(0, 0, 0, .08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'app-dark': 'radial-gradient(circle at top left, #111827 0%, #020617 45%, #000000 100%)',
      }
    },
  },
  plugins: [],
}

