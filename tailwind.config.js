/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "1px", max: "900px" },
      md: { min: "900px", max: "1110px" },
      lg: { min: "1110px" },
    },
    extend: {
      colors: {
        blue: "#01b7fe",
        aquamarine: "#58cfeb",
        deepseablue: "#0567fe",
        palmpink: "#ca97df",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
