/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        piidm: {
          blue: {
            DEFAULT: '#0170b9',
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0170b9',
            600: '#005f9e',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            dark: '#0b2038',
          },
          red: {
            DEFAULT: '#e31b23',
            hover: '#c81018',
            light: '#fef2f2',
            dark: '#991b1b',
          },
          navy: {
            DEFAULT: '#0c1b33',
            dark: '#081224',
            light: '#162b4d',
          },
          gold: {
            DEFAULT: '#f59e0b',
            light: '#fef3c7',
          },
          dark: '#1e293b',
          gray: '#475569',
          light: '#f8fafc',
          card: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(1, 112, 185, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(1, 112, 185, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-blue': '0 0 25px -5px rgba(1, 112, 185, 0.4)',
        'glow-red': '0 0 25px -5px rgba(227, 27, 35, 0.4)',
      },
      animation: {
        'marquee': 'marquee 75s linear infinite',
        'marquee-reverse': 'marquee-reverse 75s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
