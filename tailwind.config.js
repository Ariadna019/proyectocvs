/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Asegúrate de que esto coincida con la ubicación de tus archivos HTML y JS
  theme: {
    extend: {
      fontFamily: {
        yellowtail: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
}
