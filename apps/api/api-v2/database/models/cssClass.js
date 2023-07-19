const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('CssClass', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
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
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
