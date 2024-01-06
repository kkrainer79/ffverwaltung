const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portal" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@router": path.resolve(__dirname, "src/router"),
        "@store": path.resolve(__dirname, "src/store"),
        "@nodeModules": path.resolve(__dirname, "./node_modules"),
      },
    },
  },
};
