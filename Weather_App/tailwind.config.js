/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html" , "./src/**/*.js" , "./assets/**/"
  ],
  theme: {
    screens: {  
      'sm': '340px',
      'md': '540px',
      'lg': '768px',
      'xl': '1180px',
    },
    extend: {
      colors: {
        white: "white",
        black: "#000000",
      }
    },
    fontFamily: {
      Jost : ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
    },
  },
  plugins: [],
}

