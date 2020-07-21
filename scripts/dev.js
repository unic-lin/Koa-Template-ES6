/*
 * @Description: 
 * @Author: chengDong
 * @Date: 2020-01-08 11:26:42
 * @LastEditTime: 2020-07-21 16:09:49
 * @LastEditors: chengDong
 */
const shell = require('shelljs')

const NODE_ENV = 'dev'

if (shell.exec(`cross-env NODE_ENV=${NODE_ENV} nodemon --exec babel-node src/index.js`).code != 0) {
    console.log('init the project error')
} else {
    console.log('start the project success')
}