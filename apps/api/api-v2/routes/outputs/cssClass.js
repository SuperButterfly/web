const { Router } = require('express')
const {
  getAllCssClass
} = require('../../controllers/cssClass/get-all-css-class')
const { getIdCssClass } = require('../../controllers/cssClass/get-id-css-class')

const routerCssClass = Router()

routerCssClass.get('/', getAllCssClass).get('/:id', getIdCssClass)

module.exports = routerCssClass
