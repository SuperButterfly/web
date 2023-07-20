const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteInstance = async (req, res, next) => {
  const { id } = req.params

  const instance = await models.InstanceModel.findOne({ where: { id } })

  if (!instance) throw new ClientError('Instance not found', 404)

  await instance.update({ isDeleted: true })

  await instance.save()

  response(res, 200, instance)
}

module.exports = { deleteInstance: catchedAsync(deleteInstance) }
