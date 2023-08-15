/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Add your HTML file(s) here
    './src/**/*.html', // Add other file paths as needed
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

