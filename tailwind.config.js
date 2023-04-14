/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#427F71',
        header: '#292848',
        body: '#1C1b29',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

