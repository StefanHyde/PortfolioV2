import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#faf5ff',
          '100': '#f3e9fe',
          '200': '#e9d7fd',
          '300': '#d9b7fb',
          '400': '#c189f7',
          '500': '#aa5cf0',
          '600': '#953be2',
          '700': '#7f2ac6',
          '800': '#742aae',
          '900': '#582182',
          '950': '#3c0b60',
        },

        secondary: {
          '50': '#ebfef6',
          '100': '#cefde8',
          '200': '#a2f8d5',
          '300': '#66efc1',
          '400': '#39e0ad',
          '500': '#05c490',
          '600': '#00a077',
          '700': '#008062',
          '800': '#00654f',
          '900': '#015342',
          '950': '#002f26',
        },
        tertiary: {
          '50': '#effefd',
          '100': '#c7fffb',
          '200': '#90fff7',
          '300': '#5ef8f3',
          '400': '#1de4e4',
          '500': '#04c6c8',
          '600': '#009ba1',
          '700': '#057b80',
          '800': '#0a6065',
          '900': '#0d5054',
          '950': '#002e33',
        },
        dark: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#232323',
        },
        'almost-white': '#FEFEFE',
        success: '#2BBB6E',
        warning: '#DF8620',
        danger: '#D5474C',
      },

      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
