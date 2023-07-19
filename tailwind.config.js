/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:false,
  theme: {
    extend: {
      colors: {
        "primary": "#30D038",

        "secondary": "#22922D",

        "accent": "#CEFFD3",

        "neutral": "#9DFFA7",

        "base-100": "#fffff",

        "info": "#afb8e4",

        "success": "#2ce899",

        "warning": "#fbcb09",

        "error": "#fa0a4a",
      }
    },
  },
  plugins: [],
}