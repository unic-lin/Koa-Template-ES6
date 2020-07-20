/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-07-20 08:56:59
 * @LastEditTime: 2020-07-20 09:02:36
 * @LastEditors: chengDong
 */ 
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    "no-console":0
  },
};
