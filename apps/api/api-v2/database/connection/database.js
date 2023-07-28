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

// relations
loadedModels.UserModel.hasMany(loadedModels.NotificationModel, {
  foreignKey: 'userToolId'
})
loadedModels.NotificationModel.belongsTo(loadedModels.UserModel, {
  foreignKey: 'userToolId'
})

loadedModels.UserModel.belongsToMany(loadedModels.WorkSpaceModel, {
  through: loadedModels.UserWorkSpaceModel,
  foreignKey: 'userId',
  otherKey: 'workSpaceId'
})
loadedModels.WorkSpaceModel.belongsToMany(loadedModels.UserModel, {
  through: loadedModels.UserWorkSpaceModel,
  foreignKey: 'workSpaceId',
  otherKey: 'userId'
})

loadedModels.UserModel.belongsToMany(loadedModels.ProjectModel, {
  through: loadedModels.UserProjectModel,
  foreignKey: 'userId',
  otherKey: 'projectId'
})

loadedModels.ProjectModel.belongsToMany(loadedModels.UserModel, {
  through: loadedModels.UserProjectModel,
  foreignKey: 'projectId',
  otherKey: 'userId'
})

loadedModels.UserModel.hasMany(loadedModels.CssClassModel, {
  foreignKey: 'userToolId'
})
loadedModels.CssClassModel.belongsTo(loadedModels.UserModel, {
  foreignKey: 'userToolId'
})

loadedModels.WorkSpaceModel.hasMany(loadedModels.DatatableModel, {
  foreignKey: 'workSpaceId'
})
loadedModels.DatatableModel.belongsTo(loadedModels.WorkSpaceModel, {
  foreignKey: 'workSpaceId'
})

loadedModels.WorkSpaceModel.hasOne(loadedModels.InstanceModel)
loadedModels.InstanceModel.belongsTo(loadedModels.WorkSpaceModel, {
  foreignKey: 'WorkspaceId'
})

loadedModels.WorkSpaceModel.hasMany(loadedModels.ProjectModel, {
  foreignKey: 'workSpaceId'
})
loadedModels.ProjectModel.belongsTo(loadedModels.WorkSpaceModel, {
  foreignKey: 'workSpaceId'
})

loadedModels.ProjectModel.hasOne(loadedModels.InstanceModel)
loadedModels.InstanceModel.belongsTo(loadedModels.ProjectModel)

loadedModels.ProjectModel.hasMany(loadedModels.PageModel, {
  foreignKey: 'projectId'
})
loadedModels.PageModel.belongsTo(loadedModels.ProjectModel, {
  foreignKey: 'projectId'
})

loadedModels.ProjectModel.hasMany(loadedModels.ComponentModel, {
  foreignKey: 'projectId'
})
loadedModels.ComponentModel.belongsTo(loadedModels.ProjectModel, {
  foreignKey: 'projectId'
})

loadedModels.ProjectModel.hasOne(loadedModels.PresetModel)
loadedModels.PresetModel.belongsTo(loadedModels.ProjectModel)

loadedModels.PageModel.hasMany(loadedModels.ComponentModel, {
  foreignKey: 'pageId'
})
loadedModels.ComponentModel.belongsTo(loadedModels.PageModel, {
  foreignKey: 'pageId'
})

loadedModels.CssClassModel.hasMany(loadedModels.ComponentModel, {
  foreignKey: 'cssClassId'
})
loadedModels.ComponentModel.belongsTo(loadedModels.CssClassModel, {
  foreignKey: 'cssClassId'
})

loadedModels.ComponentModel.hasOne(loadedModels.PropertyModel)
loadedModels.PropertyModel.belongsTo(loadedModels.ComponentModel)

loadedModels.ComponentModel.hasMany(loadedModels.ComponentModel, {
  as: 'children',
  foreignKey: 'parentId',
})

loadedModels.ComponentModel.belongsTo(loadedModels.ComponentModel,  {
  as: 'parent',
  foreignKey: 'parentId',
})

loadedModels.PresetModel.hasMany(loadedModels.ColorModel, {
  foreignKey: 'presetId'
})
loadedModels.ColorModel.belongsTo(loadedModels.PresetModel, {
  foreignKey: 'presetId'
})

loadedModels.PresetModel.hasMany(loadedModels.TextModel, {
  foreignKey: 'presetId'
})
loadedModels.TextModel.belongsTo(loadedModels.PresetModel, {
  foreignKey: 'presetId'
})

loadedModels.PresetModel.hasMany(loadedModels.LayaoutModel, {
  foreignKey: 'presetId'
})
loadedModels.LayaoutModel.belongsTo(loadedModels.PresetModel, {
  foreignKey: 'presetId'
})

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connection to PostgreSQL 2 has been established successfully.')
    console.log('Models synchronized successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to PostgreSQL database:', error)
  })

module.exports = { db: sequelize, models: loadedModels }
