const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./src/template.html"],
    open: {
      app: {
        name: path.join(process.env.HOME, "Applications/Google Chrome.app"),
      },
    },
    hot: true,
  },
});
