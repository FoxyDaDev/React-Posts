/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greenish": "#117768",
        "greenish-hold": "#0d594e",
        "backgroundish": "#F5F5F4",
        "holdish": "#F8F7F1",
        "bleh": "#BBCAB0",
        "roundish": "#E9F2F2",
      }
    },
  },
  plugins: [],
}