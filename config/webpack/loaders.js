const path = require("path");

module.exports = [
  {
    test: /\.vue$/,
    loader: "vue-loader"
  },
  {
    test: /\.(css|scss|sass)$/,
    use: [
      { loader: "vue-style-loader" },
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: { importLoaders: 1 }
      },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: path.resolve(__dirname, "./../postcss/postcss.config.js")
          }
        }
      },
      {
        loader: "sass-loader",
        options: {
          includePaths: [path.resolve(__dirname, "./../../src/assets/styles")]
        }
      }
    ]
  },
  {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: "file-loader",
    options: {
      name: "assets/img/[name].[ext]?[hash]"
    }
  }
];
