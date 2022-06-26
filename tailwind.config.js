/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f2ebe3",
        "dark-cyan": "#3c8067",
        "very-dark-blue": "#1c232b",
        "dark-gray-blue": "#6c7289",
      },
      fontFamily: {
        monsterrat: ["Monsterrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
