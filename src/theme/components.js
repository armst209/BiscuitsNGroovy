import colors from "./colors";

const components = {
  Main: {
    baseStyle: {
      minHeight: "800px",
      padding: "10rem 1rem 5rem 1rem",
    },
  },

  Section: {
    baseStyle: {},
  },
  Button: {
    baseStyle: {
      border: "2px solid var(--color1)",
      borderRadius: " 0.5rem",
      fontFamily: "var(--header-font)",
      fontSize: "1rem",
      background: "transparent;",
      minWidth: "150px",
      height: "70px",
      cursor: "pointer",
      color: colors.white,
      transition: "all 0.2s ease",
      position: "relative",
      fontWeight: "normal",
    },
  },
  Images: {
    baseStyle: {},
    homepage: {
      hero: {
        position: "absolute",
        width: "auto",
        bottom: 0,
        right: 0,
        height: "100%",
        ["@media screen and (max-width: 400px)"]: {
          position: "static",
        },
      },
    },
  },
};

export default components;
