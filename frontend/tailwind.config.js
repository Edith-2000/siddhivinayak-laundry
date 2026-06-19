/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

