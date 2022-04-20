const animations = {
  loaderSVGRotate: {
    animation: "rotation 2s infinite linear",
  },
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },

    to: {
      transform: "rotate(360deg)",
    },
  },
};

export default animations;
