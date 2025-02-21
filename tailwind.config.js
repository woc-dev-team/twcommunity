/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "c_md": "850px",
        "c_sm":"360px"
      },
      colors: {
        primary: {
          DEFAULT: "#2bca43",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}