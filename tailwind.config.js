
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue'
    ],

    options: {
      whitelist: ['html', 'body'],
      whitelistPatterns: [/^fade-|vdatetime-/]
    }
  },
  theme: {
    container: {
      center: true
    },

    extend: {
      colors: {
        gray: {
          ...colors.gray,
          100: '#f8fafc',
          200: '#f1f5f8',
          400: '#dae1e7',
          500: '#b8c2cc',
          600: '#8795a1',
          700: '#606f7b',
          800: '#3d4852',
          900: '#181E23'
        },
        indigo: {
          ...colors.indigo,
          100: '#e6e8ff',
          200: '#b2b7ff',
          400: '#7886d7',
          500: '#6574cd',
          600: '#5661b3',
          800: '#2f365f',
          900: '#191e38'
        }
      }
    }
  }
}
