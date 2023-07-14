const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

const api = require('./routes/index')

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

app.get('/status', function (req, res, next) {
  try {
    return res.status(200).send({ message: 'OK' })
  } catch (error) {
    next(error)
  }
})

app.use('/api/v1', api)

app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500).send({ message })
})

module.exports = app
