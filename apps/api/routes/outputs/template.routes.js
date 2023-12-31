const { verifyToken } = require('../../middlewares/auth.js')
const { Router } = require('express')
const templateRouter = Router()
const {
  addTemplate,
  getTemplate,
  getTele,
  getWorkspaceTemplates,
  getScreenComponentJSON
} = require('../../controllers/outputs/template.controllers.js')

// post  /:id  addTemplate
templateRouter.post('/:workspaceId', [verifyToken], addTemplate)
templateRouter.post('/getTeleProject', [verifyToken], getTele)


templateRouter.get('/screen/:component',getScreenComponentJSON)
// get  /:id  getTemplate
templateRouter.get('/:id', [verifyToken], getTemplate)

// get /ofuser/:userId getWorkspaceTemplates
templateRouter.get(
  '/ofworkspace/:workspaceId',
  [verifyToken],
  getWorkspaceTemplates
)

module.exports = templateRouter
