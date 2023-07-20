const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchInstance = async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  const instance = await models.InstanceModel.findOne({ where: { id } })

  if (!instance) {
    throw new ClientError('Instance Not Found', 404)
  }

  await instance.update(body, { fields: Object.keys(body) })

  await instance.save()

  response(res, 200, instance)
}

module.exports = { patchInstance: catchedAsync(patchInstance) }
