const { Router } = require('express')
const routerPage = Router()

const { addPage } = require('../../controllers/page/add-page')
const { updatePage } = require('../../controllers/page/update-page')
const { patchPage } = require('../../controllers/page/patch-page')
const { deletePage } = require('../../controllers/page/delete-page')

routerPage
  .post('/', addPage)
  .put('/:id', updatePage)
  .patch('/:id', patchPage)
  .delete('/:id', deletePage)

module.exports = routerPage
