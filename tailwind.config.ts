import defaultTheme from 'tailwindcss/defaultTheme'
import animate from 'tailwindcss-animate'
import { addDynamicIconSelectors } from 'tailwindcss-plugin-iconify'

import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Add dark mode specific colors
        background: {
          DEFAULT: '#ffffff',
          dark: '#1a202c',
        },
        text: {
          DEFAULT: '#000000',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [
    animate,
    addDynamicIconSelectors({
      prefix: 'i',
      preprocessSets: {
        'ic': '*',
        'svg-spinners': '*',
      },
    }),
  ],
} satisfies Config

export default config
