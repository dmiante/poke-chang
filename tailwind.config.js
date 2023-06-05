/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        flexo: ['Flexo', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
