import { Router } from 'express'

const router = Router()
export const prefix = '/'

router.get('/', (req, res) => {
  res.render('index')
})

export default router
