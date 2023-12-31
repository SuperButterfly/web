const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Text', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'newText'
    },
    size: {
      type: DataTypes.STRING,
      defaultValue: '14'
    },
    weigth: {
      type: DataTypes.STRING,
      defaultValue: '500'
    },
    fontFamily: {
      type: DataTypes.STRING,
      defaultValue: 'Arial'
    },
    isBold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isItalic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    haveUnderline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    haveMidline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
