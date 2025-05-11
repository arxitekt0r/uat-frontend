/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f75406", // your brand orange
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}
