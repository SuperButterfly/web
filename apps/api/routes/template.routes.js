'use strict'
const { verifyToken } = require('../middlewares/auth.js')
const { Router } = require('express')
const templateRouter = Router()
const {
  addTemplate,
  getTemplate,
  getWorkspaceTemplates,
  updateTemplate,
  deleteTemplateId,
  getTele,
  formatTele,
  saveTele
} = require('../controllers/template.controllers.js')

// POST: TRAE PROJECTO DE TELEPORT AL SERVIDOR
templateRouter.post('/getTeleProject', [verifyToken], getTele)

// POST: EXTRAE ZIP DE TELEPORT DESCARGADO Y PREPARA PARA GUARDAR EN DB
templateRouter.post('/formatData', [verifyToken], formatTele)

// POST: GUARDA TEMPLATE EN DB
templateRouter.post('/makeProject/:templateId', [verifyToken], saveTele)

// post  /:id  addTemplate
templateRouter.post('/:workspaceId', [verifyToken], addTemplate)

// get  /:id  getTemplate
templateRouter.get('/:id', [verifyToken], getTemplate)

// get /ofuser/:userId getWorkspaceTemplates
templateRouter.get(
  '/ofworkspace/:workspaceId',
  [verifyToken],
  getWorkspaceTemplates
)

// patch  /:id  updateTemplate
templateRouter.patch('/:id', [verifyToken], updateTemplate)

// patch  /delete/:id  deleteTemplate
templateRouter.patch('/delete/:id', [verifyToken], deleteTemplateId)

module.exports = templateRouter
