/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 2px 4px 0px rgba(138, 146, 166, 0.30), 0px 4px 6px -1px rgba(138, 146, 166, 0.20)",
      },
      colors: {
        dark: {
          bg: "#151824",
          cardBG: "#222738",
          mainFont: "#D3D3D3",
          authLink: "#3A57E8",
          tollBarBorder: "#30384F",
        },
        light: {
          bg: "#E9ECEF",
          cardBG: "#fff",
          mainFont: "#232D42",
          authLink: "#3A57E8",
          tollBarBorder: "#E9ECEF",
        },
      },
    },
  },
  plugins: [],
};
