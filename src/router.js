import { Router } from 'express'

const router = Router()

// import home from './controllers/home'
// router.use('/', home)

// import account from './controllers/account'
// router.use('/account', account)
//

// import fs from 'fs'
// import { join } from 'path'
// // 1. 获取controllers下的所有JS文件
// const files = fs.readdirSync(join(__dirname, 'controllers'))
// // 2. 遍历文件名
// files.forEach(file => )
// // 3. 载入每一个文件
// // 4. use每一个导出的模块

// 1. 匹配所有的控制器文件 控制器是不确定的
import glob from 'glob'

glob.sync('./controllers/*.js', { cwd: __dirname }).forEach(c => {
  const controller = require(c)
  router.use(controller.prefix, controller.default)
})

export default router
