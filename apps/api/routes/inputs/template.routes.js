const { verifyToken } = require('../../middlewares/auth.js')
const { Router } = require('express')
const templateRouter = Router()
const {
  addTemplate,
  updateTemplate,
  deleteTemplateId,
  formatTele,
  saveTele
} = require('../../controllers/inputs/template.controllers.js')

// POST: TRAE PROJECTO DE TELEPORT AL SERVIDOR

// POST: EXTRAE ZIP DE TELEPORT DESCARGADO Y PREPARA PARA GUARDAR EN DB
templateRouter.post('/formatData', [verifyToken], formatTele)

// POST: GUARDA TEMPLATE EN DB
templateRouter.post('/makeProject/:templateId', [verifyToken], saveTele)

// post  /:id  addTemplate
templateRouter.post('/:workspaceId', [verifyToken], addTemplate)

// patch  /:id  updateTemplate
templateRouter.patch('/:id', [verifyToken], updateTemplate)

// patch  /delete/:id  deleteTemplate
templateRouter.patch('/delete/:id', [verifyToken], deleteTemplateId)

module.exports = templateRouter
