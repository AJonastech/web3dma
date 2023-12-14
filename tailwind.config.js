/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ['Poppins', 'sans-serif']},
        dmSans:  ['Dm Sans', 'sans-serif']
    },
    colors : {
      primary : "#0D0D33",
      purple: "#9009f1",
      green: "#33d8b0",

    }
  },
  plugins: [
  
  ],
}

