import express from 'express'
import consign from 'consign'

const app = express()

consign({cwd: 'api'})
  .include('models')
  .then('middleware')
  .then('routers')
  .into(app)

app.listen(3000, () => { console.log('Server on http://localhost:3000') })
