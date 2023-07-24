const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateInstace = async (req, res, next) => {
  const { id } = req.params
  const { name, ipAddress, ipId, volumeId } = req.body
  
  const instance = await models.InstanceModel.findOne({ where: { id } })

  if (!instance) {
    throw new ClientError('Instance Not Found', 404)
  }

  await instance.update({ name, ipAddress, ipId, volumeId })

  await instance.save()

  response(res, 201, instance)
}

module.exports = { updateInstace: catchedAsync(updateInstace) }
