const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: {
    main: path.resolve(__dirname, './src/', "index.js")
  },
  output: {
    path: path.resolve(__dirname, './docs/'),
    publicPath: './',
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  serve: {
    open: true,
    port: 8080,
    content: path.resolve(__dirname, 'public'),
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
}
