/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:false,
  theme: {
    extend: {
      backgroundColor: ['label-checked'],

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
  plugins: [
    plugin(({
      addVariant,
      e
    }) => {
      addVariant('label-checked', ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(
          ({
            className
          }) => {
            const eClassName = e(`label-checked${separator}${className}`); // escape class
            const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
            return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ],
}