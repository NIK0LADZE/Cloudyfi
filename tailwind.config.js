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
        'light-blue-shape': 'url(../svg/light-blue-shape.svg)',
        'purple-shape': 'url(../svg/purple-shape.svg)',
        'blue-shape': 'url(../svg/blue-shape.svg)',
      }
    },
  },
  plugins: [],
}
