/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-01-08 11:31:34
 * @LastEditTime: 2020-07-21 15:51:19
 * @LastEditors: chengDong
 */
const shell = require('shelljs')

const NODE_ENV = 'production'


if (shell.exec(`npm run clean && cross-env NODE_ENV=${NODE_ENV} webpack --config build/webpack.config.prod.js`).code != 0) {
    console.log('init the project error')
} else {
    console.log('start the project success')
}