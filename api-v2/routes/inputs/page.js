const { Router } = require('express')
const routerPage = Router()

const { addPage } = require('../../controllers/pages/add-page')
const { updatePage } = require('../../controllers/pages/update-page')
const { modifyPage } = require('../../controllers/pages/patch-page')
const { deletePage } = require('../../controllers/pages/delete-page')

routerPage.post('/', addPage)

routerPage.put('/:id', updatePage)

routerPage.patch('/:id', modifyPage)

routerPage.delete('/:id', deletePage)

module.exports = routerPage
