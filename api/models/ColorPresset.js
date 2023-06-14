const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('ColorPresset', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    required: true
  }
}, {
  timestamps: false
});
