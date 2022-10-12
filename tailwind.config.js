/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/styles/**/*.{css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        azonix: ['Azonix', 'sans-serif'],
      },
      backgroundImage: {
        'storm': "url('/images/storm.png')",
        'stormMobile': "url('/images/stormMobile.png')",
        'crimson': "url('/images/crimson.png')",
        'crimsonMobile': "url('/images/crimsonMobile.png')",
        'endOflight': "url('/images/endOflight.png')",
        'endOflightMobile': "url('/images/endOfLightMobile.png')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}
