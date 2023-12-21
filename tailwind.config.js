/* eslint-disable global-require */

const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
  theme: {
    screens:{
      minscreen: "340px",
      xs: "460px",
      xs2: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
          // red:"0px 4px 12px 0 rgba(229, 8, 21, 0.6)",
          red: "0px 4px 12px 0 rgba(174, 9, 9, 0.3)",
          orange:"0px 4px 12px 0 rgba(229, 141, 8, 0.3)",
          // orange:"0px 20px 20px -12px rgba(229, 141, 8, 0.3)",
      },
      fontSize: {
        xs2: "0.6rem",
      },
      colors: {
        "surface-bg": "#F7F8FA",
        "text-primary": "#393939",
        "tab-bg":"#F6F6F8",
        primary:"#E50815",
        secondary:"#E58D08",
        casualRed: "#FF695A",
        casualOrange: "#FFA033",
        casualGreen: "#42D68C",
        casualAqua: "#08CAD1",
        casualSkyBlue: "#59ADF6",
        casualSlateBlue: "#97B8FC",
        casualViolet: "#C780E8",
        casualPink: "#F07DD7",
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      animation: {
        'spin-slow': 'spin-backwards 40s linear infinite',
      },
      keyframes:{
        "spin-backwards":{
          "to": { transform: "rotate(-360deg)" }
        }
      },
    },
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      sans: ["Rubik", "sans-serif"],
      baloo: ["baloo-2", "cursive"],
      quicksand: ["Quicksand", "sans-serif"],
      catamaran: ["Catamaran", "sans-serif"],
  },
    linearBorderGradients: () => ({
      colors: {
        "light-green": [
          colors.emerald[500],
          colors.green[500],
          colors.lime[500],
        ],
        "light-blue": [
          colors.teal[500],
          colors.emerald[500],
          colors.green[500],
        ],
        purple: [colors.blue[500], colors.pink[500], colors.purple[500]],
        gray: [colors.gray[300], colors.slate[100], colors.gray[300]],
      },
      background: {
        white: "#fff",
      },
    }),
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
