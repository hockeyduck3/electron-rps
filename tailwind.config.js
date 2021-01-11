module.exports = {
  purge: ['./src/**/*.{js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '2.5': '2.5px'
      },

      lineHeight: {
        centered: '0.5'
      },

      spacing: {
        '2.5': '0.67rem'
      },

      padding: {
        '25': '25px',
        '20': '20px',
        '15': '15px',
        '10': '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
