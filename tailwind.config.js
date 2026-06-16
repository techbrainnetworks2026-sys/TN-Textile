/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#1E2A78', // Deep Indigo
        },
        purple: {
          600: '#5B3DF5', // Royal Purple
        },
        green: {
          500: '#0F9D76', // Emerald Green
        },
        beige: {
          100: '#F5E6D3', // Silk Beige
        },
        white: {
          DEFAULT: '#ffffff',
          50: '#FAFAFA', // Soft Cotton White
        },
        gold: {
          500: '#D4A017', // Gold Thread
        },
        blue: {
          700: '#2C5F9E', // Denim Blue
        },
        rose: {
          400: '#C97B84', // Rose Fabric
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
