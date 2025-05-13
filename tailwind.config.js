/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
        'rubik-light': ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
        },
        accent: {
          100: '#FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191D31',
        },
        white: {
          DEFAULT: '#FFFFFF', // pure white
          soft: '#F9FAFB', // slightly off-white
          warm: '#FDF6EC', // warm tone white
          cool: '#F4F4F5', // cool gray-white
        },
        danger: '#F75555',
        success: '#4BB543',
        warning: '#FFC107',
        info: '#17A2B8',
      },
    },
  },
  plugins: [],
};
