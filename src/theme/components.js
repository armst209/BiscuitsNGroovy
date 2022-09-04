import colors from "./colors";

const components = {
  MuiTypography: {},

  Main: {
    baseStyle: {
      minHeight: "800px",
      padding: "10rem 1rem 5rem 1rem",
    },
  },
  Section: {
    baseStyle: {},
  },
  PageTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    svg: {
      width: "50px",
      marginRight: "0.5rem",
    },
    "@media screen and (max-width: 500px)": {
      flexDirection: "column-reverse",
      fontSize: "2.5rem",
    },
    "@media screen and (max-width: 350px)": {
      fontSize: "2rem",
    },
  },
  Subtitle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem",
    svg: {
      width: "50px",
      marginRight: "0.5rem",
      "media screen and (max-width: 750px)": {
        margin: "1rem",
      },
    },
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
        "@media screen and (max-width: 400px)": {
          position: "static",
        },
      },
    },
  },

  Link: {
    baseStyle: {},
    activeStyle: { borderBottom: `2px solid ${colors.primary}` },
    mobile: {
      activeStyle: {
        borderBottom: `2px solid ${colors.secondary}`,
      },
    },
  },
};

export default components;
