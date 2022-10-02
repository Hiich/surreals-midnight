/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/styles/**/*.{css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        azonix: ['Azonix', 'sans-serif'],
      },
      backgroundImage: {
        'storm': "url('/images/background.png')",
      }
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}
