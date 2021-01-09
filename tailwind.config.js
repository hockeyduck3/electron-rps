module.exports = {
  purge: ['./src/**/*.{js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },

      lineHeight: {
        centered: '0.45'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
