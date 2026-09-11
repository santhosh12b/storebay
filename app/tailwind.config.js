/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        bgSoft: '#F7F7F9',
        foreground: '#12141F',
        navy: {
          DEFAULT: '#12141F',
          soft: '#4A4E63',
        },
        ink: {
          muted: '#6B7280',
        },
        orange: {
          DEFAULT: '#E6740D',
          dark: '#C2610A',
          tint: '#FDEEE0',
        },
        surfaceBorder: '#EAEAEF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 60px -20px rgba(18,20,31,0.15)',
        'premium-sm': '0 8px 24px -10px rgba(18,20,31,0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
