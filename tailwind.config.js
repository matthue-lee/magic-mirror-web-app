/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",  
      './public/index.html',
      // you can either add all styles
      //'./node_modules/@rewind-ui/core/dist/theme/styles/*.js',
      // OR you can add only the styles you need
      './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
      './node_modules/@rewind-ui/core/dist/theme/styles/Sidebar.styles.js',
      './node_modules/@rewind-ui/core/dist/icons/*.{js,ts,jsx,tsx}',
      './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js'

    ],
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar')({ nocompatible: true }),
      require('@tailwindcss/forms')({
        strategy: 'class' // only generate classes
      })
    ]
  };