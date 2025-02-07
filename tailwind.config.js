import { colors } from './src/constants/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary.DEFAULT,
        },
        secondary: {
          DEFAULT: colors.secondary.DEFAULT,
        },
      },
    },
  },
  plugins: [],
}
