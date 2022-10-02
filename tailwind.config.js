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
        'mintBg': "url('/images/mintBg.png')",
        'poolBg': "url('/images/poolBg.png')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}
