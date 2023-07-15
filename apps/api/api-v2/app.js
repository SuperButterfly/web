const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const resError = require('./utils/err/resError')
const api = require('./routes/index')

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

app.get('/status', function (req, res, next) {
  try {
    return res.status(200).send({ message: 'OK' })
  } catch (error) {
    next(error)
  }
})

app.use('/api/v1', api)

app.use((err, req, res, next) => {
  const { statusCode, message } = err
  console.log(err)
  resError(res, statusCode, message)
})

module.exports = app
