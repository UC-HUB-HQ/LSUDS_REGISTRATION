/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tab': {'max': '800px'},
      // => @media (max-width: 1030px) { ... }
      'mobile': {'max': '430px'},
      // => @media (max-width: 430px) { ... }
    },
    fontFamily:{
      body: ["Roboto", 'sans-serif'
        // ["Karantina", 'system-ui'] 
      ]
    },
    extend: {
      colors: {
        blue: "#1a4866",
        customred: "#c60e20",
        softBlue: "#5368df",
        softRed: "#fa5757",
        grayishBlue: "#9194a1",
        darkBlue: "#252b46",
      }
    },
  },
  plugins: [],
}

