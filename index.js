/**
 * 项目的入口文件
 * 此文件只做require导向，没有具体逻辑
 * 开发阶段和生产阶段入口不同
 */

// 确认环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'development') {
  // 让后续的操作直接支持ES6
  // 每次require的时候都会有ES6的编译到ES5的操作
  require('babel-register')
  // 开发环境
  require('./src/app')
  // open
} else {
  // 生产环境
  require('./dist/app')
}
