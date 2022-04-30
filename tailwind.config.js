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
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
