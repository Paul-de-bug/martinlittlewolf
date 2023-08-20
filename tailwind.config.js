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
      }
    },
  },
  plugins: [],
}
