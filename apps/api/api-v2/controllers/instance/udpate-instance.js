const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateInstace = async (req, res, next) => {
  const { id } = req.params
  const { body } = req
  const instance = await models.InstanceModel.findOne({ where: { id } })
  if (!instance) {
    throw new ClientError('Instance Not Found', 404)
  }
  await instance.update(body)
  await instance.save()
  response(res, 201, notification)
}

module.exports = { updateInstace: catchedAsync(updateInstace) }
