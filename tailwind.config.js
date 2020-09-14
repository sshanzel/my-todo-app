const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#B8D8BA',
      secondary: '#D9DBBC',
      tertiary: '#FCDDBC',
      quarternary: '#EF9595D',
      quinary: '#69585F',
    },
  },
  variants: {},
  plugins: [],
};
