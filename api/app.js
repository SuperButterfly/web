const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
// const path = require("path");
const admin = require('./utils/temp.js')
const { verifyToken } = require('./middlewares/auth.js')
const fileUpload = require('express-fileupload')

const app = express()
/*
s
*/
// cors
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

app.use(express.json())
app.use(express.urlencoded())

app.use(cookieParser())
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
  })
)

// Middleware de Morgan
app.use(morgan('combined'))

const api = require('./routes/index.routes.js')

// api

//
app.post('/test', function (req, res) {
  return res.send('hello world')
})

app.use('/admin', [verifyToken], admin)

app.use('/api', api)

// cotrol centralizado de errores
// luego implementar un mecanismo de alerta
app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500).send({ message })
})

module.exports = app
