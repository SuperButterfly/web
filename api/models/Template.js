const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('Template', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'New Project'
  },
  url: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  favicon: {
    type: DataTypes.BLOB
  },
  assets: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  seo: {
    type: DataTypes.JSON,
    defaultValue: {
      lang: 'en',
      meta: 'Strong Earnest Coyote',
      metaDescription: 'Description of your project'
    }
  },
  hosting: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  integration: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  experimental: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  fonts: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  social: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
