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
        white: '#E9D7FE'
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"]
      },
      extend: {},
    },
    plugins: [],
}
