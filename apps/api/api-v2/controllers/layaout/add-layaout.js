const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addLayaout = async (req, res, next) => {
  const { name, value, presetId, ProjectId } = req.body

  const preset = await models.PresetModel.findByPk(presetId)

  if (!preset) throw new ClientError('Error not found preset', 400)

  const project = await models.ProjectModel.findByPk(ProjectId)

  if (!project) throw new ClientError('Error not found project', 400)

  const defaultValue = [
    {
      name: 'Size',
      types: [
        { name: 'XS', size: '16px' },
        { name: 'SM', size: '48px' },
        { name: 'MD', size: '96px' },
        { name: 'LG', size: '144px' },
        { name: 'XL', size: '192px' },
        { name: 'XXL', size: '288px' },
        { name: 'MAX', size: '1400px' }
      ]
    },
    {
      name: 'Space',
      types: [
        { name: 'Half', size: '8px' },
        { name: 'One', size: '16px' },
        { name: 'One and half', size: '24px' },
        { name: 'Two', size: '32px' },
        { name: 'Three', size: '48px' },
        { name: 'Four', size: '64px' },
        { name: 'Five', size: '80px' },
        { name: 'Six', size: '96px' }
      ]
    },
    {
      name: 'Radius',
      types: [
        { name: 'Three', size: '2px' },
        { name: 'Four', size: '4px' },
        { name: 'Five', size: '8px' },
        { name: 'Six', size: '100px' }
      ]
    }
  ]

  const newValue = value.length === 0 ? defaultValue : value

  const newLayaout = await models.LayaoutModel.create({
    name,
    value: newValue,
    presetId
  })

  if (!newLayaout) throw new ClientError('Error to create layaout', 400)

  response(res, 200, newLayaout)
}

module.exports = { addLayaout: catchedAsync(addLayaout) }
