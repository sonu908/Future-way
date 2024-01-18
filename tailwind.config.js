/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        'tekosans': ['Teko', 'sans-serif'],
        'abrill-fatface': ['Abril Fatface', 'serif'],
        'Barlow':["Barlow", 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },

}
