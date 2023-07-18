const { Router } = require('express')
const { addCssClass } = require('../../controllers/cssClass/add-css-class')
const {
  updateCssClass
} = require('../../controllers/cssClass/update-css-class')
const { patchCssClass } = require('../../controllers/cssClass/patch-css-class')
const {
  deleteCssClass
} = require('../../controllers/cssClass/delete-css-class')

const routerCssClass = Router()

routerCssClass
  .post('/', addCssClass)
  .put('/:id', updateCssClass)
  .patch('/:id', patchCssClass)
  .delete('/:id', deleteCssClass)

module.exports = routerCssClass
