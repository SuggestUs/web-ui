/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#A66EFC",
        secondary: "#000513",
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
};
