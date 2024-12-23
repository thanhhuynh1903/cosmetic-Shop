/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
        'white' : '#f8fafc',
        'bg-color' :'#faf7f5',
        'light-brown' : '#c28b7a',
        'weight-brown' : '#c89687',
        'black' : '#000000',
        'gray' : '#d1d5db',
    },
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
}

