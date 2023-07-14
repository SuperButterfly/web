const { Sequelize } = require('sequelize')
const config = require('../../config.json')
const models = require('../models/index')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false
  }
)

const loadedModels = {}
Object.entries(models).forEach(([modelName, modelDefinition]) => {
  loadedModels[modelName] = modelDefinition(sequelize)
})

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.')
    console.log('Models synchronized successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to PostgreSQL database:', error)
  })

module.exports = { db: sequelize, models: loadedModels }
