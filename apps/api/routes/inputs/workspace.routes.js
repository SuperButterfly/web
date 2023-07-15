const { verifyToken } = require('../../middlewares/auth.js')
const { Router } = require('express')
const workspaceRouter = Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const {
  addWorkspace,
  updateWorkspace,
  addCollaborator,
  updateCollaborator,
  removeCollaborator,
  deleteWorkspace,
  addWorkspaceImport
} = require('../../controllers/inputs/workspace.controllers.js')
//multer
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

// TODO: aca agregamos la cap de un nuevo import para generar workspaces segun imports
workspaceRouter.post(
  '/import',
  [verifyToken],
  upload.single('file'),
  addWorkspaceImport
)

// post  /:userId  addWorkspace
workspaceRouter.post('/:userEmail', [verifyToken], addWorkspace)

// patch  /:id  updateWorkspace
workspaceRouter.patch('/:id', [verifyToken], updateWorkspace)

// patch  /:id  add collaborator to Workspace  &collaborator=viewer | &collaborator=editor
workspaceRouter.patch('/shareAdd/:id', [verifyToken], addCollaborator)

// patch  /:id  edit collaborator of Workspace  &collaborator=viewer | &collaborator=editor
workspaceRouter.patch('/shareUpdate/:id', [verifyToken], updateCollaborator)

// patch  /:id  remove collaborator of Workspace
workspaceRouter.patch('/shareRemove/:id', [verifyToken], removeCollaborator)

// patch  /delete/:id  deleteWorkspace
workspaceRouter.patch('/delete/:id', [verifyToken], deleteWorkspace)

module.exports = workspaceRouter
