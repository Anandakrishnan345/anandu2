/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'Navcolor': '#454545',
      'NavtextColor':'#d0d0d0',
      'ribbonbg':'#1c2739',
      'ribbonp1':'#f5deb3',
      'ribbonp2':'#f39a45',
      'red'     :'rgb(239 68 68)',
      'black'   :'#000000',
      'white'   :'#F5F5F7',
      'blue'    :'#268EF1',
      
    },
  },
  plugins: [],
}

