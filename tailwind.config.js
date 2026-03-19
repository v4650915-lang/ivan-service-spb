/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lime-accent': '#84cc16', 
        'neon-blue': '#00f2ff',
        'neon-cyan': '#06b6d4',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 242, 255, 0.5), 0 0 30px rgba(0, 242, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
