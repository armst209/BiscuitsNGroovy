import colors from "./colors";
import { futuraBold, ttNorms } from "./typography";
import FuturaBoldTTF from "common/assets/fonts/FuturaBold/HussarBoldWeb-bf92.woff";

const components = {
  // MuiCSSBaseline: {
  //   styleOverrides: `
  //   @import url("//hello.myfonts.net/count/40e284");
  //   @import url("//hello.myfonts.net/count/40e27c");
  //   @font-face {
  //     font-family: "TTNormsPro-Normal";
  //     src: url(${TTNORMS_PRO_NORMAL_WOFF2})
  //         format("woff2"),
  //       url(${TTNORMS_PRO_NORMAL_WOFF})
  //         format("woff");
  //   },
  //   @font-face {
  //     font-family: "TTNormsPro-Rg";
  //     src: url(${TTNORMS_PRO_REGULAR_WOFF2})
  //         format("woff2"),
  //         url(${TTNORMS_PRO_REGULAR_WOFF})
  //     format("woff");
  //   },
  //   @font-face {
  //     font-family: "futura-bold";
  //     src: url(${FUTURA_BOLD}) format("woff");
  //     font-weight: normal;
  //     font-style: normal;
  //   }
  //   `,
  // },
  MuiCssBaseline: {
    styleOverrides: `@font-face {font-family: "Futura Bold", font-style: normal, font-weight: normal, src: local('Futura Bold'), url(${FuturaBoldTTF}) format('woff');}`,
  },
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
};

export default components;
