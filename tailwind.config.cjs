/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
