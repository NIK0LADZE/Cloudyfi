/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/tailwind.css'
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          100: '#EBEBEB',
          200: '#F4F4F4',
          900: '#515151'
        }
      },
      backgroundImage: {
        'logo': 'url(../assets/logo.png)',
        'cloudyfi': 'url(../assets/cloudyfi.svg)',
        'light-blue-shape': 'url(../assets/light-blue-shape.svg)',
        'purple-shape': 'url(../assets/purple-shape.svg)',
        'blue-shape': 'url(../assets/blue-shape.svg)',
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
