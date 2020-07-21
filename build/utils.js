/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-07-21 14:11:41
 * @LastEditTime: 2020-07-21 14:11:48
 * @LastEditors: chengDong
 */ 
const path = require('path');

exports.resolve = function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

exports.APP_PATH = exports.resolve('src');
exports.DIST_PATH = exports.resolve('dist');
