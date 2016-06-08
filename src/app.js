/**
 * 项目的功能性入口
 * ECMAScript2015
 */

import { join } from 'path'
import express from 'express'
const app = express()

// ===== 静态文件配置 =====
app.use(express.static(join(__dirname, '../static/')))

// ===== 视图引擎配置 =====
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'hbs')

import hbs from 'hbs'
// 将app的locals中所有的属性都作为模版的变量
// 此处的变量设置是全局的
hbs.localsAsTemplateData(app)
// 公共模版变量 @key 获取
app.locals.site_name = 'Itcast Shop'
// 利用公共变量设置默认模版
app.locals.layout = 'shared/layout'

// 注册Helper可以用于在模版中作为标识（自定义业务功能）
const blocks = {}
hbs.registerHelper('block', (key, context) => {
  const block = blocks[key] = blocks[key] || []
  if (context.fn) {
    // 此时是开闭标签
    block.push(context.fn(this))
  } else {
    // 单标签
    delete blocks[key]
    // XSS
    return new hbs.handlebars.SafeString(block.join('\n'))
  }
})
// let temp = ''
// hbs.registerHelper('tianchong', (context) => {
//   temp = context.fn()
// })

// hbs.registerHelper('zhanweifu', () => {
//   return temp
// })
// hbs.registerHelper('timestamp', () => {
//   return new Date().getFullYear()
// })
// hbs.registerHelper('abc', (p1, p2, p3, p4) => {
//   console.log(p1)
//   console.log('============================')
//   console.log(p2)
//   console.log('============================')
//   console.log(p3)
//   console.log('============================')
//   console.log(p4)
//   console.log('============================')
// })


// ===== 载入路由表 =====
import router from './router'
app.use(router)





// ===== 处理错误页 =====
// 404处理 catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log(404)
  var error = new Error('Not Found')
  error.status = 404
  next(error)
})

// 异常处理（error handlers）
if (app.get('env') === 'development') {
  // development error handler
  // will print stacktrace
  app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.render('shared/error', {
      message: error.message,
      error: error
    })
  })
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.render('shared/error', {
      message: error.message,
      error: {}
    })
  })
}

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
