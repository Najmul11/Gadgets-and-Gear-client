/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      main:'#0080af',
      second:'#e1e1e2',
      hover:'#cdced1',
      black:'#000000',
      white:'#FFFFFF',
      yellow:'#DAA520',
      red:'#ff6c74'
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}