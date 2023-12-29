/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#6d9773",
      secondary: "#0c3b2e",
      tertiary: "#bb8a52",
      color_1: "#ffba00",
      green: "#12AD2B"
    },
    animation: {
      wiggle: "wiggle 3s linear infinite",
      anima: "anima 5s linear infinite",
      change: "change 10s linear infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "translateY(-10px)" },
        "50%": { transform: "translateY(0px)" },
      },
      anima: {
        "0%, 100%": { width: "0%" },
        "50%": { width: "100%" },
      },
      change: {
        "0%, 100%": { filter: "hue-rotate(0deg)" },
        "50%": { filter: " hue-rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
