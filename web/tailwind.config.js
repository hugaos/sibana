/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F6F1EB',
        petrol: '#104d6e',
        gold: '#c99e67',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        cursive: ['Great Vibes', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
