const { Router } = require('express')
const routerText = Router()

const { getAllText } = require('../../controllers/text/get-all-text')
const { getIdText } = require('../../controllers/text/get-id-text')

routerText.get('/all', getAllText)

routerText.get('/:id', getIdText)

module.exports = routerText
