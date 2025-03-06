/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "church": "url('./assets/images/twc_front_door.jpeg')",
      },
      screens: {
        "twc_main_text_xl":"1498px",
        "twc_main_text_md":"1271px",
        "w_max":"1800px",
        "c_image":"950px",
        "c_md":"1105px",
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