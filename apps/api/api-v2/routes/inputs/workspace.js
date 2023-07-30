const { Router } = require('express')
const { addWorkSpace } = require('../../controllers/workspace/add-workspace')
const {
  updateWorkSpace
} = require('../../controllers/workspace/update-workspace')
const {
  deleteWorkSpace
} = require('../../controllers/workspace/delete-wokspace')
const { setUserToWorkSpace }= require('../../controllers/workspace/set-user-to-workspace')
const { addWorkspaceByFigma }= require('../../controllers/workspace/add-workspace-by-figma')
const validateWorkspace = require('../../middlewares/validation/workspace/workspaceValidation')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const routerWorkSpace = Router()

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
  storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Límite de tamaño de archivo: 50MB
})

routerWorkSpace
  .post('/', validateWorkspace, addWorkSpace)
  .post('/figma', upload.single('file'), addWorkspaceByFigma)
  .post('/setuser', setUserToWorkSpace)
  .put('/:id', updateWorkSpace)
  .delete('/:id', deleteWorkSpace)

module.exports = routerWorkSpace
