const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1182px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      darkblback: {
        100: "#476CC73D",
        200: "#1D1D20",
        300: "#3A3A40",
      },
      orange: {
        400: "#FF842D",
      },
      red: {
        500: "#EF4444",
      },
      blue: {
        100: "#F2F5FC",
        150: "#4FA6FC1A",
        200: "#C0DCFC1A",
        300: "#C0DCFC",
        500: "#0667C8",
        600: "#085CB040",
        700: "#057ADA",
        900: "#0065C9",
      },
      darkblue: {
        500: "#022344",
      },
      purple: {
        500: "#9747FF",
        900: "#333367",
      },
      gray: {
        100: "#02234433",
        150: "#F7F7F880",
        200: "#4D4D57",
        300: "#3A3A40",
        500: "#454545",
        600: "#92939E",
        700: "#F7F7F8",
        800: "#424B59",
        900: "#6E7C91",
      },
      green: {
        500: "#25D366",
      },
      yellow: {
        500: "#FDB022",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      fontFamily: {
        noto: "'Noto Kufi Arabic', sans-serif",
      },
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(90deg, rgba(151, 71, 255, 0.9), rgba(51, 51, 103, 0.7))",
        "gradient-blue-o": "linear-gradient(180deg, #E6F1FE 0%, #D3E6FC 98%)",
      },
      boxShadow: {
        blue: "0px 11px 19px -5px rgba(1, 109, 240, 0.25)",
      },
    },
    // fontFamily: {
    //   sans: ["DIN Next LT Arabic", "sans-serif"],
    // },
  },
  plugins: [animate],
};
