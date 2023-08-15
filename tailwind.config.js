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
      }
    },
  },
  plugins: [],
}

