/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mayhem: {
          pink: '#FF0066',
          dark: '#121212',
          darker: '#0A0A0A',
          gray: '#1A1A1A',
          light: '#2A2A2A'
        }
      },
      fontFamily: {
        cyber: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
};