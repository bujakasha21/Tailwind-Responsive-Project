/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightBrown: "#693829",
        hoverBrown: "#c79e7f",
        brightBrownLight: "#ecdfd3",
        darkBlue: "#242D52",
        darkGrayishBlue: "#9095A7",
        veryDarkBlue: "#1D1E25",
        veryPaleRed: "#FFEFEB",
        veryLightGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
