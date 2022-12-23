/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test-light': "url('https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/background/light.png')",
        'test-dark': "url('https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/background/dark.png')",
      },
      backgroundColor: {
        "theme-blanc": "#FFFFFF",
        "theme-violet": "#3B2077",
        "theme-jaune": "#F1BA29",
        "theme-bleu": "#235A8C",
        "theme-vert": "#006600",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
