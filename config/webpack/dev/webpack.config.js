const path = require("path");
const webpack = require("webpack");
const loaders = require("../loaders");
const devPlugins = require("./plugins");
const { PROTOCOL, HOST, PORT } = require("../env");

module.exports = {
  entry: [
    "babel-polyfill",
    `webpack-dev-server/client?${PROTOCOL}://${HOST}:${PORT}`,
    "webpack/hot/only-dev-server",
    "./src/main.js"
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: loaders
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  plugins: devPlugins(webpack),
  mode: "development"
};
