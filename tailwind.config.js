import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Robotto", "sans-serif"],
      },
      colors:{
        ...defaultTheme.colors,
        primary:"#FC4100",
        headerHighlight:"#b91c1c",
        secondary:"#ffffff",
        teritary:"#000000",
        
      }
    },
  },
  plugins: [],
};
