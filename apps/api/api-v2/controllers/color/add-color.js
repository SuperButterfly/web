const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addColor = async (req, res, next) => {
  const { name, value, presetId, ProjectId } = req.body

  const preset = await models.PresetModel.findByPk(presetId)

  if (!preset) throw new ClientError('Error not found preset', 400)

  const project = await models.ProjectModel.findByPk(ProjectId)

  if (!project) throw new ClientError('Error not found project', 400)

  const defaultValue = [
    {
      name: 'Primary',
      types: [
        { value: '#003EB3' },
        { value: '#0074F0' },
        { value: '#14A9FF' },
        { value: '#85DCFF' }
      ]
    },
    {
      name: 'Gray',
      types: [{ value: '#595959' }, { value: '#999999' }, { value: '#D9D9D9' }]
    },
    {
      name: 'Success',
      types: [{ value: '#199033' }, { value: '#32A94C' }, { value: '#4CC366' }]
    },
    {
      name: 'Danger',
      types: [{ value: '#A22020' }, { value: '#BF2626' }, { value: '#E14747' }]
    }
  ]

  const newValue = value.length === 0 ? defaultValue : value

  const newColor = await models.ColorModel.create({
    name,
    value: newValue,
    presetId
  })

  if (!newColor) throw new ClientError('Error to create color', 400)

  response(res, 200, newColor)
}

module.exports = { addColor: catchedAsync(addColor) }
