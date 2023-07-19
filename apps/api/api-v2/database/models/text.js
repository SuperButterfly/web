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
      allowNull: false,
      defaultValue: 'newText'
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weigth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fontFamily: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isBold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isItalic: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    haveUnderline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    haveMidline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
