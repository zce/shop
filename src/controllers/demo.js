import { Router } from 'express'

const router = Router()

export const prefix = '/demo'

// /**
//  * GET /
//  */
// router.get('/', (req, res) => {
//   res.view('index', { name: '张三' })
// })
//
router.get('/', (req, res) => {
  res.render('demo/index', { layout: 'demo/layout' })
})

export default router
