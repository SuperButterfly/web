const { Router } = require('express')
const routerPage = Router()

const { getAllPages } = require('../../controllers/pages/get-all-page')
const { getPageById } = require('../../controllers/pages/get-id-page')

routerPage.get('/', getAllPages)

routerPage.get('/:id', getPageById)

module.exports = routerPage
