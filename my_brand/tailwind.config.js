/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          700: "#333333",
          800: "#0C0C0C"
        }
      }
      ,
      fontFamily: {
        'blacksmoke': ['Blacksmoke'],
        'carnage': ['Carnage'],
        'gematype': ['Gematype'],
        'oxanium': ['Oxanium'],
        'oxanium-thin': ['OxaniumThin'],
        'antic': ['Antic'],
        'averia': ['Averia']
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow")
    ({
      shadowColor: "rgba(0, 0, 0, 3.5)",
      shadowBlur: "2px",
      shadowOffsetX: "4px",
      shadowOffsetY: "4px",
    })
  ],
}