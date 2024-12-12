/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" , "./assets/**/*.js" , "./assets/**/"],
  theme: {
    extend: {
      color: {
        "green-900": "green-900",
        "black": "black",
        "white": "white",
        "gray-200": "gray-200",
      },

      backgroundImage: {
        "page-bg" : "url('./assets/img/page-bg.jpg')",
        "plant-bg" : "url('./assets/img/plant.jpg')",
      },
    },
  },
  plugins: [],
}

