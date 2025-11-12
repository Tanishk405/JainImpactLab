/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',   // small devices
      md: '768px',   // tablets
      lg: '1024px',  // laptops
      xl: '1280px',  // desktops
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#FFD93D",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
