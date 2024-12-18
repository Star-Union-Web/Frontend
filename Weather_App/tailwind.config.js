/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html" , "./src/**/*.js" , "./assets/**/"
  ],
  theme: {
    screens: {  
      'sm': '340px',
      'md': '540px',
      'lg': '770px',
      'xl': '1180px',
    },
    extend: {
      colors: {
        white: "white",
        black: "#000000",
        box: "rgba(36,34,34,0.637)",
      }
    },
    fontFamily: {
      Jost : ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
    },
  },
  plugins: [],
}

