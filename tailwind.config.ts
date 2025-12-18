import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from logo
        gold: {
          50: '#fefcf3',
          100: '#fdf7e1',
          200: '#faedc3',
          300: '#f5dd9a',
          400: '#eec86a',
          500: '#D4A843', // Primary gold
          600: '#c4922a',
          700: '#a37323',
          800: '#855c22',
          900: '#6d4c1f',
          950: '#3d280e',
        },
        terracotta: {
          50: '#fdf5f3',
          100: '#fce8e4',
          200: '#fad5cd',
          300: '#f5b8aa',
          400: '#ed8e79',
          500: '#C45C3E', // Primary terracotta
          600: '#b04a30',
          700: '#933c26',
          800: '#7a3524',
          900: '#663124',
          950: '#37160e',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F5F0E6', // Background cream
          200: '#EBE4D6',
          300: '#DDD3BE',
          400: '#C9BA9E',
          500: '#B5A080',
          600: '#9C8665',
          700: '#7D6A4F',
          800: '#5E4F3B',
          900: '#3F3527',
        },
        // Dark futuristic base
        void: {
          50: '#f6f6f7',
          100: '#e3e3e5',
          200: '#c6c6cb',
          300: '#a2a2a9',
          400: '#7d7d87',
          500: '#63636c',
          600: '#4e4e56',
          700: '#414147',
          800: '#37373c',
          900: '#1a1a1e', // Main dark bg
          950: '#0d0d0f', // Deeper dark
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23D4A843' stroke-opacity='0.08'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}

export default config
