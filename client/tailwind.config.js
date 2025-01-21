/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
