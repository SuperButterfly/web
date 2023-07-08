const { Router } = require('express')
const domainsRouter = Router()
const {
  searchDomains
} = require('../../controllers/inputs/domains.controllers.js')

domainsRouter.post('/', searchDomains)

module.exports = domainsRouter
