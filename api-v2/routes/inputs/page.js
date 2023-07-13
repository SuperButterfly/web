const { Router } = require('express')
const pageRouter = Router()

const { addPage } = require('../../controllers/pages/add-page')
const { updatePage } = require('../../controllers/pages/update-page')
const { modifyPage } = require('../../controllers/pages/patch-page')
const { deletePage } = require('../../controllers/pages/delete-page')

pageRouter.post('/', addPage)

pageRouter.put('/:id', updatePage)

pageRouter.patch('/:id', modifyPage)

pageRouter.delete('/:id', deletePage)

module.exports = pageRouter
