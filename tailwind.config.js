/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './solutions.html',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'abhaya': ['Abhaya Libre', 'serif']
      },
      colors: {
        customGray: '#A5BABF',
        customGold: '#FFD700',
        lightGray: '#ABB0B2',
        themeBlue: '#414b77',
        lightGray: '#c1c1c1'
      }
    },
  },
  plugins: [],
}
