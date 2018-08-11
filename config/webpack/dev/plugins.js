const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { TITLEDEV } = require("../env");

module.exports = webpack => [
  new webpack.HotModuleReplacementPlugin(),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    title: TITLEDEV
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development")
    }
  })
];
