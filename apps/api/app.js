const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const admin = require('./utils/temp.js')
const { verifyToken } = require('./middlewares/auth.js')
const bodyParser = require('body-parser')
const api = require('./routes/index.routes.js')
const api2 = require('./api-v2/routes/index.js')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Content-Length'
  )
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

// health check
app.get('/api/status',  (req, res, next) => {
    return res.status(200).send({ message: 'OK' })
})

app.use('/admin', [verifyToken], admin)

app.use('/api/v1', api2)
app.use('/api', api)

// control centralizado de errores
// luego implementar un mecanismo de alerta
app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500).send({ message })
})

module.exports = app
