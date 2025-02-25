import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      colors: {
        background: '#F8F9FA',
        foreground: '#333333',
        primary: '#0077B6',
        secondary: '#061A40',
        accent: {
          1: '#FCD602'
        },
        shades: {
          silver: '#ADADAD',
          darkGrey: '#525252'
        }
      },
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    },
  },
  plugins: [],
} satisfies Config;
