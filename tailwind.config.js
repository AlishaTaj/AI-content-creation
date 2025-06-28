/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class', // Use class strategy for dark mode switching
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightPurple: '#e191de',
        darkPurple: '#5e299c',
        primaryGradientFrom: '#e191de',
        primaryGradientTo: '#5e299c',
      },
      backgroundImage: {
        'gradient-to-br-purple': 'linear-gradient(to bottom right, #e191de, #5e299c)',
        'gradient-to-r-purple': 'linear-gradient(to right, #e191de, #5e299c)',
      },
      boxShadow: {
        'purple-md': '0 4px 12px rgba(145, 90, 200, 0.3)',
      },
    },
  },
  plugins: [],
};
