// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
