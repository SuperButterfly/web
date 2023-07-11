const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config.json')
const { readdirSync } = require('fs')
const path = require('path')

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

const basename = path.basename(__filename)
const modelDefiners = []
readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })
// console.log(sequelize)
modelDefiners.forEach((model) => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1]
])
sequelize.models = Object.fromEntries(capsEntries)

/*
 Associations
 */
const {
  Asset,
  ClassSaved,
  Component,
  Folder,
  Notification,
  Template,
  User,
  Workspace,
  PressetsGroups,
  Pressets,
  ColorToken,
  FontPresset,
  LayoutToken,
  ColorPresset,
  Instance
  // ComponentChildren
} = sequelize.models

User.belongsToMany(Workspace, {
  as: 'workspaces',
  through: 'user_workspace',
  scope: {
    isDeleted: false
  }
})
Workspace.belongsToMany(User, {
  as: 'owner',
  through: 'user_workspace',
  scope: {
    isDeleted: false
  }
})

//  user  <=>  workspace compartido
User.belongsToMany(Workspace, {
  as: 'sharedviewer',
  through: 'workspace_viewer',
  scope: {
    isDeleted: false
  }
})
Workspace.belongsToMany(User, {
  as: 'collaboratorviewer',
  through: 'workspace_viewer',
  scope: {
    isDeleted: false
  }
})

//  user  <=>  workspace compartido
User.belongsToMany(Workspace, {
  as: 'sharededitor',
  through: 'workspace_editor',
  scope: {
    isDeleted: false
  }
})
Workspace.belongsToMany(User, {
  as: 'collaboratoreditor',
  through: 'workspace_editor',
  scope: {
    isDeleted: false
  }
})

//  workspace  <=>  Templates
Workspace.belongsToMany(Template, {
  as: 'projects',
  through: 'WorkspaceTemplate',
  scope: {
    isDeleted: false
  }
})
Template.belongsToMany(Workspace, {
  as: 'works',
  through: 'WorkspaceTemplate',
  scope: {
    isDeleted: false
  }
})

//  Templates  <=>  Component pages
Template.belongsToMany(Component, {
  as: 'pages',
  through: 'TemplatePage',
  onDelete: 'cascade',
  scope: {
    isDeleted: false
  }
})

Component.belongsToMany(Template, {
  as: 'project',
  through: 'TemplatePage',
  onDelete: 'cascade',
  scope: {
    isDeleted: false
  }
})

//  Templates  <=>  Component components
Template.belongsToMany(Component, {
  as: 'components',
  through: 'TemplateComponent',
  onDelete: 'cascade',
  scope: {
    isDeleted: false
  }
})
Component.belongsToMany(Template, {
  as: 'template',
  through: 'TemplateComponent',
  onDelete: 'cascade',
  scope: {
    isDeleted: false
  }
})

Component.belongsToMany(Component, {
  as: 'children',
  foreignKey: 'parentId',
  onDelete: 'cascade',
  through: 'ComponentChildren',
  scope: {
    isDeleted: false
  },
  order: [['order', 'ASC']]
})

Component.belongsToMany(Component, {
  as: 'parent',
  foreignKey: 'childrenId',
  onDelete: 'cascade',
  through: 'ComponentChildren',
  scope: {
    isDeleted: false
  }
})

/* const ComponentChildren = sequelize.define('ComponentChildren',{
    order:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  })
  ComponentChildren.beforeCreate((async (children, options) => {
    const maxChildrenOrder = await ComponentChildren.max('order',{
      where: {parentId: children.parentId}
    });
    children.order=maxChildrenOrder?maxChildrenOrder+1:1
  }) */

/* Component.addHook('beforeCreate', async (component, options) => {
    if (component.parentId) {
      const maxOrder = await Component.max('order', {
        where: { parentId: component.parentId },
        //include: { association: 'children' }
      });
      //component.ComponentChildren = { order: (maxOrder || 0) + 1 };
      component.ComponentChildren = {order: (maxOrder !== null ? maxOrder + 1 : 1)}
    }
  }) */

Asset.belongsToMany(Folder, {
  as: 'folderImg',
  foreignKey: 'imgId',
  through: 'folder_image',
  scope: {
    isDeleted: false
  }
})
Folder.belongsToMany(Asset, {
  as: 'imgs',
  foreignKey: 'folderId',
  through: 'folder_image',
  scope: {
    isDeleted: false
  }
})

Folder.belongsToMany(Folder, {
  as: 'folder',
  foreignKey: 'folderId',
  through: 'folder_subfolder',
  scope: {
    isDeleted: false
  }
})
Folder.belongsToMany(Folder, {
  as: 'subfolder',
  foreignKey: 'subfolderId',
  through: 'folder_subfolder',
  scope: {
    isDeleted: false
  }
})

Folder.belongsToMany(Template, {
  as: 'templateFolder',
  foreingKey: 'folderId',
  through: 'templates_folder',
  scope: {
    isDeleted: false
  }
})
Template.belongsToMany(Folder, {
  as: 'images',
  foreingKey: 'templateId',
  through: 'templates_folder',
  scope: {
    isDeleted: false
  }
})

ClassSaved.belongsToMany(Template, {
  as: 'templateClassList',
  foreingKey: 'classSavedId',
  through: 'templates_classes',
  scope: {
    isDeleted: false
  }
})
Template.belongsToMany(ClassSaved, {
  as: 'classList',
  foreingKey: 'templateId',
  through: 'templates_classes',
  scope: {
    isDeleted: false
  }
})

User.belongsToMany(Notification, {
  as: 'notifications',
  through: 'user_notification',
  scope: {
    isDeleted: false
  }
})
Notification.belongsToMany(User, {
  as: 'note',
  through: 'user_notification',
  scope: {
    isDeleted: false
  }
})

//       COLORES <=> TOKENS DE COLORES
ColorPresset.belongsToMany(ColorToken, {
  as: 'colortokens',
  through: 'color_tokens',
  onDelete: 'cascade'
})

ColorToken.belongsToMany(ColorPresset, {
  as: 'tokencolor',
  through: 'color_tokens',
  onDelete: 'cascade'
})

//       PRESSETS <=> COLORES
PressetsGroups.belongsToMany(ColorPresset, {
  as: 'colors',
  through: 'pressets_color',
  onDelete: 'cascade'
})

ColorPresset.belongsToMany(PressetsGroups, {
  as: 'colorgroup',
  through: 'pressets_color',
  onDelete: 'cascade'
})

//       PRESSETS <=> FONTS
PressetsGroups.belongsToMany(FontPresset, {
  as: 'fonts',
  through: 'pressets_font',
  onDelete: 'cascade'
})

FontPresset.belongsToMany(PressetsGroups, {
  as: 'fontstoken',
  through: 'pressets_font',
  onDelete: 'cascade'
})

//       PRESSETS <=> LAYOUTS SIZES
PressetsGroups.belongsToMany(LayoutToken, {
  as: 'layoutsizes',
  through: 'pressets_layoutsizes',
  onDelete: 'cascade'
})

LayoutToken.belongsToMany(PressetsGroups, {
  as: 'spacessizes',
  through: 'pressets_layoutsizes',
  onDelete: 'cascade'
})

//       PRESSETS <=> LAYOUTS SPACES
PressetsGroups.belongsToMany(LayoutToken, {
  as: 'layoutspaces',
  through: 'pressets_layoutspaces',
  onDelete: 'cascade'
})

LayoutToken.belongsToMany(PressetsGroups, {
  as: 'spacestokens',
  through: 'pressets_layoutspaces',
  onDelete: 'cascade'
})

//       PRESSETS <=> LAYOUTS RADIUS
PressetsGroups.belongsToMany(LayoutToken, {
  as: 'layoutradius',
  through: 'pressets_layoutradius',
  onDelete: 'cascade'
})

LayoutToken.belongsToMany(PressetsGroups, {
  as: 'radiustokens',
  through: 'pressets_layoutradius',
  onDelete: 'cascade'
})

//       TEMPLATE <=> PRESSETSGROUP
Template.belongsToMany(PressetsGroups, {
  as: 'pressets_groups',
  through: 'template_pressets_groups',
  onDelete: 'cascade'
})

PressetsGroups.belongsToMany(Template, {
  as: 'temp_settings',
  through: 'template_pressets_groups',
  onDelete: 'cascade'
})

//       TEMPLATE <=> PRESSETS
Template.belongsTo(Pressets, {
  as: 'pressets',
  through: 'template_pressets',
  onDelete: 'cascade'
})

Pressets.hasOne(Template, {
  as: 'tempSettings',
  through: 'template_pressets',
  onDelete: 'cascade'
})

//      TEMPLATE <=> INSTANCE

Template.hasOne(Instance)
Instance.belongsTo(Template)

// RELATION BETWEEN USERS AND SHARED PROYECTS
// {CODE HERE}

module.exports = {
  ...sequelize.models,
  db: sequelize
}
