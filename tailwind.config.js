/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'closeMobileMenu': 'closemobilemenu 300ms linear',
        'openMobileMenu': 'openmobilemenu 300ms linear',
      },
      keyframes: {
        closemobilemenu: {
          '0%': { translate: '0px' },
          '100%': { translate: '250px' },
        },
        openmobilemenu : {
          '0%': { translate: '250px' },
          '100%': { translate: '0px' },
        }
      }
    },
    screens: {
      'ms': '360px',
      'ml': '500px',
      'tab': '800px',
      'des': '1280px',
      'large': '1920px',
    },
  },
  plugins: [],
}



