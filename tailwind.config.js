module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Lobster",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      "2xl": "1206px",
      xl: "991px",
      lg: "960px",
      md: "760px",
      sm: "500px",
    },
    extend: {
      colors: {
        light: "#666",
        primary: "#e75b1e",
        black: "#141415",
        white: "#fff",
        nav: "#272525",
      },
      backgroundColor: {
        linear: "rgba(231, 91, 30, 0.2)",
        gray: "#eee",
      },
      backgroundImage: {
        hero: 'linear-gradient(to right bottom, rgba(231, 91, 30, 0.2), rgba(231, 91, 30, 0.2)), url("/src/assets/images/hero.jpg")',
        newsletter: 'url("/src/assets/images/open.jpeg")',
      },
      dropShadow: {
        primary: "0 .5rem 1.5rem rgba(0, 0, 0, .1",
      },
      letterSpacing: {
        widest: ".1rem",
      },
    },
  },
  plugins: [],
};
