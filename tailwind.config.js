import { colors } from './src/constants/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        black: ['Inter-Black', 'sans-serif'],
        bold: ['Inter-Bold', 'sans-serif'],
        extraBold: ['Inter-ExtraBold', 'sans-serif'],
        extraLight: ['Inter-ExtraLight', 'sans-serif'],
        light: ['Inter-Light', 'sans-serif'],
        thin: ['Inter-Thin', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        medium: ['Inter-Medium', 'sans-serif'],
        semibold: ['Inter-SemiBold', 'sans-serif'],
      },
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
