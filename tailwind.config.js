/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkText: "hsl(229, 25%, 31%)",
        ScoreText: "hsl(229, 64%, 46%)",
        HeaderOutline: "hsl(217, 16%, 45%)",
      },
      screens: {
        "tablet" : "575px",
        "laptop" : "769px",
      }
    },
  },
  plugins: [],
}

