/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
    host: '127.0.0.1',
    port: 7001,
    hot: true,
  },
};

module.exports = webpackMerge.merge(renderBaseConfig, devConfig);
