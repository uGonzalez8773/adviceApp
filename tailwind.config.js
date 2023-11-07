/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow:{
        glow: '0xp 0px 40px 0px #53FFAA',
      },
      fontFamily:{
        manrope:["Manrope"],
      },
    },
  },
  plugins: [],
}

