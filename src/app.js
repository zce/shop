/**
 * 项目的功能性入口
 * ECMAScript2015
 */

import { join } from 'path'
import express from 'express'
const app = express()

// ===== 视图引擎配置 =====
app.set('views', join(__dirname, '../views'))
app.set('view engine', 'hbs')

// ===== 载入路由表 =====
import router from './router'
app.use(router)

const port = ((process.env.PORT || 3000) + '').trim()
app.listen(port, error => {
  if (error) throw error
  console.log(`app is ready @ http://localhost:${port}/`)
})

// 解构
// var obj = {
//   p1: 1,
//   p2: 1,
//   p3: 1,
//   p4: 1,
//   p5: 1,
// }

// // var { p1, p2 } = obj
// var p1 = obj.p1
// var p2 = obj.p2
