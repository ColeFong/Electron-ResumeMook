const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../render/app.tsx"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  target: "electron-renderer",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    host: "127.0.0.1",
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../render/index.html"),
      filename: path.resolve(__dirname, "../../dist/index.html"),
      chunks: ["index"],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
