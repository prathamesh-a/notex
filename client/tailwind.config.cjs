/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'kanit': ['Kanit', 'sans-serif']
    },
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   'bg_dark': '#403d39',
    //   'bg-light': '#d8f3dc',
    //   'nav_bg_dark': '#343231',
    //   'nav_bg_light': '#26a96c',
    // }
  },
  plugins: [],
}
