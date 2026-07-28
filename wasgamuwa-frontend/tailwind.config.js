/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(170, 60%, 45%)',
        accent: 'hsl(12, 80%, 55%)',
        surface: 'hsla(0, 0%, 100%, 0.2)',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};
