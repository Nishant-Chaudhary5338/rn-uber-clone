/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind/css")
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nativewind()],
  // ...
};
