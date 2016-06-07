import { Router } from 'express'

const router = Router()
export const prefix = '/account'

router.get('/2', (req, res) => {
  res.send('account')
})

router.get('/1', (req, res) => {
  res.send('account')
})

export default router
