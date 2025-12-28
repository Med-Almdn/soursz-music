/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        soursz: {
          neon: '#39FF14',
          dark: '#0A0A0A',
          'dark-800': '#121212',
          'dark-700': '#181818',
          'dark-600': '#222222',
          gray: '#333333',
          'gray-light': '#666666',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon-sm': '0 0 5px theme(colors.soursz.neon)',
        neon: '0 0 8px theme(colors.soursz.neon), 0 0 16px theme(colors.soursz.neon)',
        'neon-lg': '0 0 12px theme(colors.soursz.neon), 0 0 24px theme(colors.soursz.neon), 0 0 36px theme(colors.soursz.neon)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};