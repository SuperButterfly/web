const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdPreset = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findOne({
    where: { id },
    include: [
      {
        model: models.ColorModel,
        where: {
          presetId: id
        }
      },
      {
        model: models.TextModel,
        where: {
          presetId: id
        }
      },
      {
        model: models.LayaoutModel,
        where: {
          presetId: id
        }
      }
    ]
  })

  if (!preset) throw new ClientError('Failed to find preset by ID', 404)

  response(res, 200, preset)
}

module.exports = { getIdPreset: catchedAsync(getIdPreset) }
