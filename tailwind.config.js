/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          glass: {
            100: 'rgba(255, 255, 255, 0.05)',
            200: 'rgba(255, 255, 255, 0.1)',
            300: 'rgba(255, 255, 255, 0.2)',
            border: 'rgba(255, 255, 255, 0.15)',
          },
          brand: {
            blue: '#3B82F6',
            cyan: '#06B6D4',
            dark: '#020617'
          }
        },
        backdropBlur: {
          xs: '2px',
        }
      },
    },
    plugins: [],
  }