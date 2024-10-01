/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'main-color': '#FFB603' },
      maxWidth: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
