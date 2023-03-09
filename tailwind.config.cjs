/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#F7F9FE",
        primaryBlue: "#20A4F3",
        actionBlue: "#367BEE",
        highlightBlue: "#1d4ed8",
        highlightRed: "rgb(185 ,28, 28)",
        labelGrey: "#374151",
      },
      boxShadow: {
        "outer-box-shadow": "4px 4px 25px #E6EBF8",
      },
    },
  },
  plugins: [],
};
