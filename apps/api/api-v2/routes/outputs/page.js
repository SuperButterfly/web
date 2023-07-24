const { Router } = require('express')
const routerPage = Router()

const { getAllPage } = require('../../controllers/page/get-all-page')
const { getIdPage } = require('../../controllers/page/get-id-page')

routerPage.get('/', getAllPage).get('/:id', getIdPage)

module.exports = routerPage
