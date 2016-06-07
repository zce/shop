/**
 * 项目的功能性入口
 * ECMAScript2015
 */

import express from 'express'
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
})

const port = ((process.env.PORT || 3000) + '').trim()
app.listen(port, error => {
  if (error) throw error
  console.log(`app is ready @ http://localhost:${port}/`)
})
