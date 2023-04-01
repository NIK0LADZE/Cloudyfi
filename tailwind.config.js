/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/tailwind.css'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray': '#EBEBEB'
      },
      backgroundImage: {
        'logo': 'url(../svg/logo.svg)',
        'light-blue-shape': 'url(../svg/light-blue-shape.svg)',
        'purple-shape': 'url(../svg/purple-shape.svg)',
        'blue-shape': 'url(../svg/blue-shape.svg)',
      },
      boxShadow: {
        'header': '0px 2px 4px rgba(148, 148, 148, 0.25)'
      },
      width: {
        'logo': '70px'
      }
    },
  },
  plugins: [],
}
