const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

const MyCard = plugin(function({
  addUtilities
}){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".backface-hidden":{
      'backface-visibility': 'hidden',

    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective : "1000px",
    }
  })
})
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
     customGreen :"#206A5D",
     customGray :"#EBECF1"
    },},
  },
  plugins: [MyCard],
}
