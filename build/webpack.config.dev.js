/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-07-21 14:12:11
 * @LastEditTime: 2020-07-21 16:08:07
 * @LastEditors: chengDong
 */ 
const webpackMerge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.config.base');

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false },
});

module.exports = webpackConfig;
