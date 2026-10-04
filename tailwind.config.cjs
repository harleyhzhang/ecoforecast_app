/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1a73e8",
        "dark-grey": "#444",
        grey: "#9c9c9c",
        "light-grey": "#fafafa",
      },
      fontFamily: {
        "product-sans-regular": ["Product Sans Regular", "sans-serif"],
        "product-sans-light-regular": ["Product Sans Light Regular", "sans-serif"],
        "product-sans-medium-regular": ["Product Sans Medium Regular", "sans-serif"],
        "product-sans-light-italic": ["Product Sans Light Italic", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      ssm: "810px",
      md: "1130px",
    }
  },
  plugins: [],
}