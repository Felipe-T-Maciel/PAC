/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FCFCFC',
        'black': '#0F0F0F'
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
      },
    },
  },
  darkMode: "class"
}