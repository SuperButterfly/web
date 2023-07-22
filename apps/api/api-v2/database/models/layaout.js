const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Layaout', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'newLayaout'
    },
    value: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      defaultValue: [
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
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
