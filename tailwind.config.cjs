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
      colors: {
        gray: {
          300: 'hsl(210, 4%, 67%)',
          700: 'hsl(232, 10%, 55%)',
          800: 'hsl(213, 9%, 39%)',
          900: 'hsl(212, 27%, 19%)',
        },
        yellow: {
          500: 'hsl(51, 100%, 49%)',
        },
        red: {
          500: 'hsl(7, 99%, 70%)',
        },
        cyan: {
          500: 'hsl(200, 100%, 62%)',
        },
        green: {
          900: 'hsl(166, 45%, 32%)',
        },
        sky: {
          800: 'hsl(197, 57%, 25%)',
        },
        teal: {
          300: 'hsl(167, 44%, 70%)',
        },
      },
    },
  },
  plugins: [],
}
