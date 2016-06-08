import { Router } from 'express'

const router = Router()

export const prefix = '/'

router.use((req, res, next) => {
  const viewRoot = 'home/'
  res.view = (name, data) => {
    res.render(viewRoot + name, data)
  }
  next()
})

/**
 * GET /
 */
router.get('/', (req, res) => {
  res.view('index')
})

/**
 * GET /about
 */
router.get('/about', (req, res) => {
  res.view('about')
})

/**
 * GET /contact
 */
router.get('/contact', (req, res) => {
  res.view('contact')
})

export default router
