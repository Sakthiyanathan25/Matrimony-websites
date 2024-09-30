/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      colors: {
        'custom-dark': 'rgba(12, 11, 16, 0.3)',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
          Lato: ['Lato', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          playfair:['Playfair Display' ],

      
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite', 
        'slideLeft': 'slideLeft 0.5s ease-out forwards',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      })
    }
  ],
}
