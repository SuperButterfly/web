const { Router } = require('express')
const {
  getAllProperty
} = require('../../controllers/property/get-all-property')
const { getIdProperty } = require('../../controllers/property/get-id-property')

const routerProperty = Router()

routerProperty.get('/', getAllProperty).get('/:id', getIdProperty)

module.exports = routerProperty
