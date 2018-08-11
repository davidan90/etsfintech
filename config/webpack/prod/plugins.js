const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { TITLEPRO } = require("../env");

module.exports = webpack => [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    title: TITLEPRO
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
];
