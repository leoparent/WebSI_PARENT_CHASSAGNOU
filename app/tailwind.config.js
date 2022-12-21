/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'theme-blanc': '#FFFFFF',
        'theme-violet': '#3B2077',
        'theme-jaune':'#F1BA29',
        'theme-bleu': '#235A8C',
        'theme-vert': '#49B675',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
  ],
}