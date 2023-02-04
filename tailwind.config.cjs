/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0f0f0f",
        "imput": "#121212",
        "imput-border": "#303030",
        "imput-btn": "#ffffff14",
        "imput-micro": "#181818",
        "imput-text": "#ffffffe0",
        "white-1": "#f1f1f1",
        "light-gray": "#aaa",
        "light-gray-2": "#ffffff1a",
        "light-gray-3": "#AAAAAA",
        "gray-hover": "#ffffff33",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
       },       
      screens: {
        'tablet': '1313px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
