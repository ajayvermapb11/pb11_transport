import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#F0FDF4',
          '100': '#E3F9E7',
          '200': '#C7F2D1',
          '300': '#A4E9B6',
          '400': '#7CDE95',
          '500': '#52D172',
          '600': '#3DBA5A',
          '700': '#2E8E45',
          '800': '#257037',
          '900': '#205C2E',
          '950': '#103219',
        },
        background: {
          DEFAULT: '#E3F9E7',
          secondary: '#F7F7F7',
        },
        text: {
          primary: '#1a202c',
          secondary: '#718096',
        },
      },
    },
  },
  plugins: [],
}
export default config