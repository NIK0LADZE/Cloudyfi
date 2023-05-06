/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/tailwind.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSansGeorgian: 'Noto Sans Georgian',
        openSans: 'Open Sans',
        alkSanet: 'Alk Sanet'
      },
      colors: {
        customWhite: {
          0.4: 'rgba(255, 255, 255, 0.4)'
        },
        customGray: {
          100: '#EBEBEB',
          200: '#F4F4F4',
          300: 'rgba(162, 162, 162, 0.8)',
          800: '#858585',
          900: '#515151'
        },
        customBlack: {
          100: '#353535',
          900: '#222222',
        },
        blue: '#6263E3',
        purple: '#9312F8'
      },
      backgroundImage: {
        logo: 'url(../assets/logo.svg)',
        shapes: 'url(../assets/shapes.svg)',
        cloudyfi: 'url(../assets/cloudyfi.svg)'
      },
      boxShadow: {
        header: '0px 2px 4px rgba(148, 148, 148, 0.25)',
        card: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        cardHover: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        input: 'inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)'
      },
      width: {
        logo: '49px',
        logoMobile: '41px',
        cloudyfi: '364px'
      },
      borderColor: {
        footer: 'rgba(162, 162, 162, 0.8)'
      }
    },
  },
  plugins: [],
}
