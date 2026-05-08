/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f1',
          100: '#ffe9d6',
          200: '#ffd0a8',
          300: '#ffb074',
          400: '#ff8c40',
          500: '#ff6b35',
          600: '#ed4f15',
          700: '#c43c10',
          800: '#9b3110',
          900: '#7a2a10',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e5e5e8',
          200: '#c9c9d0',
          300: '#a1a1ad',
          400: '#74748a',
          500: '#52526a',
          600: '#3e3e54',
          700: '#2c2c40',
          800: '#1a1a2c',
          900: '#0c0c1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem' },
        screens: { '2xl': '1280px' },
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(12,12,26,0.18)',
        glow: '0 0 0 4px rgba(255,107,53,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp .6s ease-out both',
        'fade-in': 'fadeIn .6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
