const express = require('express')

const app = express()

app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500).send({ message })
})

const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})

module.exports = app
