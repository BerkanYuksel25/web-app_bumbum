/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FF7143",
          alt: "#B2EBF2",
        },
        secondary: {
          main: "#FFF6E6",
          alt: "#332D2D",
        },
        comp: {
          main: "#7395F9",
          alt: "#F97389",
        },
        background: {
          main: "#D9D9D9",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
