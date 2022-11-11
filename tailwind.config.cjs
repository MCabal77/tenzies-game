/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'initial': '#0B2434',
        'game': '#F5F5F5',
        'primary': '#2B283A',
        'secondary': '#4A4E74',
        'locked': '#59E391',
        'button': '#5035FF',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
