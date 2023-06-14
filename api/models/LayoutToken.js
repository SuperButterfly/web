const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('LayoutToken', {
  name: {
    type: DataTypes.STRING,
    required: true,
    unique: true
  }, 
  value: {
    type: DataTypes.STRING,
    required: true
  }
}, {
  timestamps: false
});
