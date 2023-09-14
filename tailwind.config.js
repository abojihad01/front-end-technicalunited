/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Eras Demi ITC",
      itcLight: "Eras Light ITC",
      itcMedium: "Eras Medium ITC",
      erasITC: "ErasITC",
      primaryA: "Cairo",
      Blair: "Blair ITC Std",
      rajdhani: "Rajdhani",
    },
    container: {
      padding: {
        DEFAULT: "1.7rem",
        lg: "3.4rem",
        md: "3rem",
        sm: "1.7rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1020px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        "10px": "10px",
      },
      transitionProperty: {
        padding: "padding",
      },
      boxShadow: {
        "contact-box": "0 9px 35px 0 rgba(26, 47, 106, .07)",
        "blog-box": "0 9px 35px 0 rgba(0, 0, 0, .07)",
      },
      backgroundImage: {
        contact: "url('src/assets/imgs/contact/contact-page-photo.jpeg')",
      },
      fontSize: {
        "100px": "6.25rem",
        "17px": "1.063rem",
        "45px": "2.813rem",
        "46px": "46px",
      },
      colors: {
        primary: "#141414",
        accent: "#286F6C",
        doveGray: "#666",
        grey: {
          DEFAULT: "#919297",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#f5f5f5",
          4: "#585858",
        },
        white: "#fff",
        pink: "pink",
        // vividRed: "#EE1B25",
        vividRed: "#d71921",
        veryDarkGray: "#717171",
        wildSandSolid: "#F4F4F4",
        "product-blur": "rgba(9, 22, 42, 0.6)",
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/back.jpg")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
