/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#A66EFC",
      secondary: "#000513",
    },
  },
};
export const plugins = [];





// /** @type {import('tailwindcss').Config} */
// export const content = [];
// export const theme = {
//   extend: {},
// };
// export const plugins = [
//   require('tailwindcss'),
//   require('autoprefixer'),
// ];

