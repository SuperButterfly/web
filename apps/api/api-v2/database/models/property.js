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
          width: '1920',
          attribute: {
          }
        },
        mobile: {
          active: true,
          width: '479',
          attribute: {}
        },
        mobileLandscape: {
          active: true,
          width: '767',
          attribute: {}
        },
        tablet: {
          active: true,
          width: '991',
          attribute: {}
        },
        laptop: {
          active: true,
          width: '1200',
          attribute: {}
        },
        wide: {
          active: true,
          width: '1600',
          attribute: {}
        }
      }
    },
    grid:{type: DataTypes.JSONB,
      defaultValue: {
        x: '',
        y: '',
        w: '',
        h: '',
      }},
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
