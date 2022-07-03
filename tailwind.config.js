module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend:{ 
    spacing:{
      '4/5':'80%',
      }
    },
  },
  variants: {
    extend: {
      '4/5':'80%',
    }
  },
  plugins: [],
}