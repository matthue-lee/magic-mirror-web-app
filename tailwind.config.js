/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      './public/index.html',
      // you can either add all styles
      //'./node_modules/@rewind-ui/core/dist/theme/styles/*.js',
      // OR you can add only the styles you need
      'node_modules/preline/dist/*.js',
    ],
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar')({ nocompatible: true }),
      require('@tailwindcss/forms')({
        strategy: 'class' // only generate classes
      }),
      require('preline/plugin')
    ]
  };