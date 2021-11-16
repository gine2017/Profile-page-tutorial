module.exports = {
  /**
   * get rid of unused styles
   */
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        md: "9.5rem",
        lg: "12.5rem",
        sm: "6.25rem",
      },
      colors: {
        primary: "#03AB00",
      },
      backgroundImage: {
        "profile-image": "url('./stories/assets/girl.jpg')",
        "hero-image": "url('./stories/assets/nycSky.jpg')",
        "trees1-image": "url('./stories/assets/trees1.jpg')",
        "trees2-image": "url('./stories/assets/trees2.jpg')",
        "trees3-image": "url('./stories/assets/trees3.jpg')",
        "trees4-image": "url('./stories/assets/trees4.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
