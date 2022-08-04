const newLocal = "tailwindcss-scroll-snap";
module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sections: "calc(100vh - 70px)",
        h70: "70px",
        h700: "700px",
        h3: "350px",
        h4: "70%",
        hmobile: "1045px"
      },
      width: {
        w3: "700px",
        w4: "90%",
        w2:"70%"
      },
      flex: {
        '2': "2 2 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require(newLocal)],
};
