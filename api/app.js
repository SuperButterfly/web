const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const admin = require('./utils/temp.js')
const { verifyToken } = require('./middlewares/auth.js')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')

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

// Middleware de Morgan
app.use(morgan('dev'))

const api = require('./routes/index.routes.js')

// api

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const outputFolder = path.join('uploads', file.originalname.toString())
    fs.mkdirSync(outputFolder, { recursive: true })
    cb(null, outputFolder)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

// Configura multer para utilizar la carpeta personalizada
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Límite de tamaño de archivo: 50MB
})

app.post('/api/import', upload.single('file'), async (req, res) => {
  // Accede al archivo cargado a través de req.file
  const file = req.file
  console.log(file)

  // Verifica si se cargó un archivo
  if (!file) {
    return res
      .status(400)
      .json({ error: 'No se ha proporcionado ningún archivo' })
  }

  try {
    // Lee el contenido del archivo ZIP
    const data = await fs.promises.readFile(file.path)

    // Descomprime el archivo ZIP
    const zip = await JSZip.loadAsync(data)
    const outputFolder = file.destination

    // Extrae cada archivo del ZIP y guárdalo en la carpeta
    await Promise.all(
      Object.entries(zip.files).map(async ([relativePath, file]) => {
        if (!file.dir) {
          const filePath = path.join(outputFolder, relativePath)
          const content = await file.async('nodebuffer')
          fs.writeFileSync(filePath, content)
          console.log(`Archivo descomprimido: ${filePath}`)
        }
      })
    )

    return res
      .status(200)
      .json({ message: 'Archivo ZIP descomprimido exitosamente' })
  } catch (error) {
    console.error('Error al descomprimir el archivo ZIP:', error)
    return res
      .status(500)
      .json({ error: 'Error al descomprimir el archivo ZIP' })
  }
})

app.post('/test', function (req, res) {
  return res.send('hello world')
})

app.use('/admin', [verifyToken], admin)

app.use('/api', api)

// control centralizado de errores
// luego implementar un mecanismo de alerta
app.use((error, req, res, next) => {
  const { status, message } = error
  res.status(status || 500).send({ message })
})

module.exports = app
