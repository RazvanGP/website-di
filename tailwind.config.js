/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["TitlingGothicFBCond-Ext", "sans-serif"],
        secondary: ["Didact Gothic", "sans-serif"],
      },
      colors: {
        "primary-blue": "#283260",
        "accent-blue": "#2E84FF",
        "silver-grey": "#acacac",
        "text-grey": "#283260",
        "accent-red": "#DA2C38",
        "dark-primary-blue": "#203E4A",
        "dark-accent-blue": "#2c7da0",
        "dark-text-grey": "#101935",
      },
    },
  },
  plugins: [],
};
