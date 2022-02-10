/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../render/app.tsx'),
    setting: path.resolve(__dirname, '../render/windowPages/setting/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
    host: '127.0.0.1',
    port: 7001,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../render/index.html'),
      filename: path.resolve(__dirname, '../../dist/index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../render/windowPages/setting/index.html'),
      filename: path.resolve(__dirname, '../../dist/setting.html'),
      chunks: ['setting'],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
