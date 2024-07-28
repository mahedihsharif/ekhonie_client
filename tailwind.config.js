/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerLeft: "url('./src/assets/banner_1_1.jpg')",
        bannerRight1: "url('./src/assets/img_1_1.jpg')",
        bannerRight2: "url('./src/assets/img_1_2.jpg')",
        threeCardImg1: "url('./src/assets/img_1_2.jpg')",
        threeCardImg2: "url('./src/assets/banner_1_1.jpg')",
        threeCardImg3: "url('./src/assets/banner_1_3.jpg')",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
