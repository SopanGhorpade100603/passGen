/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      grey: '#e6e6e6', // Azure hex color
    },
  },
  },
  plugins: [],
}

