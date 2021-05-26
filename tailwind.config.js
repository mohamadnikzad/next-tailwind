module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //adding reusable animations
      // keyframes: {
      //   slidein: {
      //     '100%': { transform: 'translateX(0)' }
      //   }
      // },
      // animation: {
      //   slidein: 'slidein 1.5s  ease-in-out  ',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
