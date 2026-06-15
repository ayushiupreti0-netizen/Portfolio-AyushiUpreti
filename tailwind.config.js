/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        charm: ['Charm', 'cursive'],
        awaken: ['DM Serif Display', 'serif'],
      },
      colors: {
        primary: '#0F1117',
        accent: '#39E3E7',
        secondary: '#F5F7FA',
      },
    },
  },
  plugins: [],
};
