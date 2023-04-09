/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/tailwind.css'
  ],
  theme: {
    extend: {
      colors: {
        customWhite: {
          0.4: 'rgba(255, 255, 255, 0.4)'
        },
        customGray: {
          100: '#EBEBEB',
          200: '#F4F4F4',
          300: 'rgba(162, 162, 162, 0.8)',
          900: '#515151'
        },
        customBlack: {
          100: '#353535',
          900: '#222222',
        }
      },
      backgroundImage: {
        logo: 'url(../assets/logo.png)',
        shapes: 'url(../assets/shapes.svg)',
        cloudyfi: 'url(../assets/cloudyfi.svg)'
      },
      boxShadow: {
        header: '0px 2px 4px rgba(148, 148, 148, 0.25)',
        card: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      width: {
        logo: '70px',
        cloudyfi: '364px'
      }
    },
  },
  plugins: [],
}
