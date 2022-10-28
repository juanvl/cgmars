/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#ffffff',
        background: '#05050F',
        primary: '#191932',
        secondary: '#6A6A9F',
        highlight: '#176BF8',
        skypurple: '#370648',
        skyred: '#E8475C',
      },
      screens: {
        'md': '870px'
      },
    },
  },
  plugins: [],
}
