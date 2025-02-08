import { colors } from './src/constants/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            DEFAULT: colors.light.primary,
          },
          secondary: {
            DEFAULT: colors.light.secondary,
          },
          tertiary: {
            DEFAULT: colors.light.tertiary,
          },
          support: {
            DEFAULT: colors.light.support,
          },
        },
        dark: {
          primary: {
            DEFAULT: colors.dark.primary,
          },
          secondary: {
            DEFAULT: colors.dark.secondary,
          },
          tertiary: {
            DEFAULT: colors.dark.tertiary,
          },
          support: {
            DEFAULT: colors.dark.support,
          },
        },
      },
    },
  },
  plugins: [],
}
