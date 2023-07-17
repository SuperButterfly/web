// Ruta para recibir una respuesta en localhost:3001
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Upload successful')
})

module.exports = router
