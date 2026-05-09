import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
          extend: {
                  colors: {
                            apricot: {
                                        50: '#fff7f1',
                                        100: '#ffe9d6',
                                        200: '#ffd0a8',
                                        300: '#ffb074',
                                        400: '#ff8c40',
                                        500: '#FF6B35',
                                        600: '#ed4f15',
                                        700: '#c43c10',
                                        800: '#9b3110',
                                        900: '#7a2a10',
                            },
                            brand: {
                                        50: '#fff7f1',
                                        100: '#ffe9d6',
                                        200: '#ffd0a8',
                                        300: '#ffb074',
                                        400: '#ff8c40',
                                        500: '#FF6B35',
                                        600: '#ed4f15',
                                        700: '#c43c10',
                                        800: '#9b3110',
                                        900: '#7a2a10',
                            },
                            neutral: {
                                        50: '#fafafa',
                                        100: '#f5f5f5',
                                        200: '#e5e5e5',
                                        300: '#d4d4d4',
                                        400: '#a3a3a3',
                                        500: '#737373',
                                        600: '#525252',
                                        700: '#404040',
                                        800: '#262626',
                                        900: '#171717',
                            }
                  },
                  fontFamily: {
                            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                            display: ['"Playfair Display"', 'Georgia', 'serif'],
                  },
                  animation: {
                            'fade-in': 'fadeIn 0.5s ease-in-out',
                            'slide-up': 'slideUp 0.5s ease-out',
                  },
                  keyframes: {
                            fadeIn: {
                                        '0%': { opacity: '0' },
                                        '100%': { opacity: '1' },
                            },
                            slideUp: {
                                        '0%': { transform: 'translateY(20px)', opacity: '0' },
                                        '100%': { transform: 'translateY(0)', opacity: '1' },
                            },
                  },
                  container: {
                            center: true,
                            padding: {
                                        DEFAULT: '1rem',
                                        lg: '2rem',
                            },
                  },
          },
    },
    plugins: [typography],
};
