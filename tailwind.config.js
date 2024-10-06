/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#FFB603',
        'dark-mode': '#0C0C0C',
        'second-color': '#1B1A55',
      },
      maxWidth: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
