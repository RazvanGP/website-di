/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "titling-gothic": ["TitlingGothicFBCond-Ext", "sans-serif"],
      },
      colors: {
        "primary-blue": "#283260",
        "accent-blue": "#2E84FF",
        "silver-grey": "#acacac",
        "accent-red": "#DA2C38",
        "dark-green": "#002500",
      },
    },
  },
  plugins: [],
};
