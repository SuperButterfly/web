const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Color', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'newColor'
    },
    value: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      defaultValue: [
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
      ]
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
