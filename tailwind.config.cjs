/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#0181ff'
        },
        red: {
          50: '#ff6584'
        },
        black: {
          90: '#2f2e41'
        }
      },
      content: {},
      backgroundImage: {},
      boxShadow: {
        'header': '0 4px 15px rgba(22, 22, 22, 0.2)',
      },
      keyframes: {
        scroll: {
          '0%': { opacity: '0' },
          '10%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        },
      },
      animation: {
        'scrolling-mouse': 'scroll 1s linear infinite',
      },
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
  },
  plugins: [],
}