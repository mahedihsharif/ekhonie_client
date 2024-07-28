/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerLeft: "url('/assets/banner_1_1.jpg')",
        bannerRight1: "url('/assets/img_1_1.jpg')",
        bannerRight2: "url('/assets/img_1_2.jpg')",
        threeCardImg1: "url('/assets/img_1_2.jpg')",
        threeCardImg2: "url('/assets/banner_1_1.jpg')",
        threeCardImg3: "url('/assets/banner_1_3.jpg')",
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
