import { Router } from 'express'

const router = Router()
export const prefix = '/demo'

router.get('/', (req, res) => {
  res.render('account/index')
})

export default router
