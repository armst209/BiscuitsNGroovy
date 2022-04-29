const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@common": path.resolve(__dirname, "src/common/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/common/components/"),
      "@utils": path.resolve(__dirname, "src/common/utils/"),
      "@images": path.resolve(__dirname, "src/common/assets/images/"),
      "@hooks": path.resolve(__dirname, "src/common/hooks/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components$": "<rootDir>/components/",
      },
    },
  },
};
