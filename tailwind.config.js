/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        "landing": "url(../images/landing.jpg)",
        "design": "url(../images/design.jpg)",
        "stats" : "url(../images/stats.png)",
        "quote" : "url(../images/quote.jpg)",
        "sub" : "url(../images/subscribe.jpg)",
      }
    },
  },
  plugins: [],
}