// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        min: "340px",
        xs: "460px",
        xs2: "500px",
        // sm: "640px",
      },
    },
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      sans: ["Rubik", "sans-serif"],
    },
    linearBorderGradients: () => ({
      colors: {
        "light-green": [colors.emerald[500], colors.green[500], colors.lime[500]],
        "light-blue": [colors.teal[500], colors.emerald[500], colors.green[500]],
      },
      background: {
        white: "#fff",
      },
    }),
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
