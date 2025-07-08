/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A2741",    
        secondary: "#FCC741",  
        accent: "#F7F8FA",      
        highlight: "#EF4423",   
      },
      fontFamily: {
        open: ['Inter', 'sans-serif'], 
        poppins: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
