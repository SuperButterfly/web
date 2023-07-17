const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Property', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    style: {
      type: DataTypes.JSONB,
      defaultValue: {
        desktop: {
          active: true,
          attribute: {}
        },
        mobile: {
          active: true,
          attribute: {}
        },
        mobileLandscape: {
          active: true,
          attribute: {}
        },
        tablet: {
          active: true,
          attribute: {}
        },
        laptop: {
          active: true,
          attribute: {}
        },
        wide: {
          active: true,
          attribute: {}
        }
      }
    },
    event: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    state: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    other: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
