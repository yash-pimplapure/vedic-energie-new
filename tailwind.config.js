/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins'
      },
      lineHeight: {
        'loose': '1',
      }
    },
    colors: {
      green: '#1D6126',
      lightgreen:'#369517',
      lightGreen: '#75ed9d',
      yellow: '#EBE667',
      black: '#100c08',
      white: '#ffff',
      blue: '#05386B',
      lightYellow: '#FEFFCD',
      orange: '#FFB951',
      rgbaHeader: 'rgba(0,0,0,0.85)'
    },
  },
  plugins: [],
}