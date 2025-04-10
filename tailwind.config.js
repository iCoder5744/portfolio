// @type {import('tailwindcss').Config}
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#FFD700', // Gold color like in the portfolio
          background: {
            light: '#ffffff',
            dark: '#000000',
          },
        },
      },
    },
    plugins: [],
  }