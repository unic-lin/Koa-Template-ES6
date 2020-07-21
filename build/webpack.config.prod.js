/*
 * @Description: 生产环境webpack配置
 * @Author: chengDong
 * @Date: 2019-12-02 09:30:50
 * @LastEditTime: 2020-07-21 16:06:27
 * @LastEditors: chengDong
 */
const webpackMerge = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.base');


const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释掉console
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true,
        sourceMap: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
});

module.exports = webpackConfig;
