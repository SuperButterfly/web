const { models } = require('../../database/connection/database')
const { catchedAsync } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addPresetRelations = async (id) => {
  const preset = await models.PresetModel.findByPk(id)
  if (!preset) throw new ClientError('Preset ID doesnt exist', 400)
  const newColor = await models.ColorModel.create({
    name: 'newColor',
    value: [
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
        types: [
          { value: '#595959' },
          { value: '#999999' },
          { value: '#D9D9D9' }
        ]
      },
      {
        name: 'Success',
        types: [
          { value: '#199033' },
          { value: '#32A94C' },
          { value: '#4CC366' }
        ]
      },
      {
        name: 'Danger',
        types: [
          { value: '#A22020' },
          { value: '#BF2626' },
          { value: '#E14747' }
        ]
      }
    ],
    presetId: id
  })
  if (!newColor) throw new ClientError('Error to create color', 400)
  const newLayaout = await models.LayaoutModel.create({
    name: 'newLayaout',
    value: [
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
    ],
    presetId: id
  })
  if (!newLayaout) throw new ClientError('Error to create layaout', 400)
  const newText = await models.TextModel.create({
    name: 'newText',
    size: '14',
    weigth: '500',
    fontFamily: 'Arial',
    isBold: false,
    isItalic: false,
    haveUnderline: false,
    haveMidline: false,
    presetId: id
  })
  if (!newText) throw new ClientError('Error to create text', 400)
}

module.exports = { addPresetRelations: catchedAsync(addPresetRelations) }
