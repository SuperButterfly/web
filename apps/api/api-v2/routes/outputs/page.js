const { Router } = require('express')
const routerPage = Router()

const { getAllPage } = require('../../controllers/pages/get-all-page')
const { getIdPage } = require('../../controllers/pages/get-id-page')

routerPage.get('/', getAllPage).get('/:id', getIdPage)

module.exports = routerPage
