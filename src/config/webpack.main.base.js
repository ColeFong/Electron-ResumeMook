/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../main/main.ts'),
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../../', 'src/render'),
      '@assets': path.join(__dirname, '../../', 'src/assets'),
      '@common': path.join(__dirname, '../../', 'src/render/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};
