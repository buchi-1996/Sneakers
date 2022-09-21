/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {},
      fontFamily: {
        Kumbh: ['Kumbh sans', 'san-serif']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          center: true,
        },
      },
    },
  },
  plugins: [],
}