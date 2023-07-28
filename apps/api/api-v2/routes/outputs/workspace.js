const { Router } = require('express')
const {
  getAllWorkSpace
} = require('../../controllers/workspace/get-all-workspace')
const {
  getIdWorkSpace
} = require('../../controllers/workspace/get-id-workspace')

const routerWorkSpace = Router()

routerWorkSpace.get('/all/:id', getAllWorkSpace).get('/:id', getIdWorkSpace)

module.exports = routerWorkSpace
