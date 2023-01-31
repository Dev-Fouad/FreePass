/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        sm: '480px', 
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        purple: '#300053',
        white: '#E9D7FE',
        gray: '#FCF8FF',
        bgpurple: '#4E0A80',
        dark: '#667085',
        black: '#202020',
        dar: '#505887',
        bim: '#FAF7FC',
        blue: '#3734A9',
        Bblack: '#202020'
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        inter: ['Inter', "sans-serif"]
      },
      extend: {},
    },
    plugins: [],
}
