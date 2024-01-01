/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': 'minmax(200px, 1fr) 4fr',
      },
      screens: {
        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

