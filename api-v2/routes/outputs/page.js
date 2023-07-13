const { Router } = require('express')
const pageRouter = Router()

const { getAllPages } = require('../../controllers/pages/get-page-all')
const { getPageById } = require('../../controllers/pages/get-page-id')

pageRouter.get('/', getAllPages)

pageRouter.get('/:id', getPageById)

module.exports = pageRouter
