/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { backgroundColor: "rgba(255, 255, 0, 0.3)" },
          "100%": { backgroundColor: "rgba(138, 82, 82, 0)" },
        },
      },
      animation: {
        fadeOut: "fadeOut 5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
