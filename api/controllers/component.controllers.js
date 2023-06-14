const {
  Template,
  Component
} = require("../database.js");
const componentsList = require('./toCreate.js');

const addComponent = async (req, res, next) => {
  const { tag } = req.body;
  try {
    const templateTarget = await Template.findByPk(req.params.projectId)
    if (!templateTarget) throw new Error('template not found')
    const newComponent = await Component.create(componentsList[tag])

    if (req.query.isPage === 'true') {
      await templateTarget.addPages(newComponent)
    }
    else {
      await templateTarget.addComponents(newComponent)
    }
    const template = await retrieveTemplate(templateTarget.id);
    res.json({ template });
  }
  catch (error) {
    return next(error);
  }
};

// getComponent  x id  x params
const getComponent = async (req, res, next) => {
  try {
    const component = await retrieveComponent(req.params.id)
    res.json({ component })
  }
  catch (error) {
    return next(error);
  }
}

// getComponents x projectId   x params
const getProjectComponents = async (req, res, next) => {
  try {
    const template = await Template.findOne({
      where: { id: req.params.projectId },
      include: [{
          model: Component,
          as: "pages",
          where: { isDeleted: false }
        },
        {
          model: Component,
          as: "components",
          where: { isDeleted: false }
        }
      ]
    });
    let components = []
    if (template && template.components) {
      components = template.components
    }
    let pages = []
    if (template && template.pages) {
      pages = template.pages
    }
    res.json({ components, pages });
  }
  catch (error) {
    return next(error);
  }
}

// updateComponent  x id  x params
const updateComponent = async (req, res, next) => {
  try {
    await Component.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    const component = await retrieveComponent(req.params.id)
    res.json({ component });
  }
  catch (error) {
    return next(error);
  }
};

const deleteComponentId = async (req, res, next) => {
  try {
    const componentDeleted = await Component.findByPk(req.params.id,{
      include:[{
        model:Component,  /**************************************************************************************************/
        as:'parent',
        attributes:['id']
      }]
    });

    if (!componentDeleted) {
      throw new Error('Component not found')
    }
    else if (componentDeleted.name == "Home") {
      throw new Error('no se puede borrar este componente');
    }
    else {
      const idParent = componentDeleted.parent[0].id
      //const component = componentDeleted;
      await componentDeleted.update({isDeleted : true});
      const target = await Component.findByPk(idParent,{
        include: [{
          model: Component,
          as: 'children'
        }]
      })
      res.json({ component: target });
      //res.json({component})
    }
  }
  catch (error) {
    return next(error);
  }
};

const retrieveComponent = async (id) => {
  return await Component.findByPk(id, {
    include: {
      model: Component,
      as: 'children',
      include: {
        model: Component,
        as: 'children',
        include: {
          model: Component,
          as: 'children',
          include: {
            model: Component,
            as: 'children',
            include: {
              model: Component,
              as: 'children'
            },
            //order: [[ 'order', 'ASC']]
          },
          // order: [[ 'order', 'ASC']]
        },
        // order: [[ 'order', 'ASC']]
      },
      // order: [[ 'order', 'ASC']]
    },
    //order: [[ 'order', 'ASC']]
  });
};

const retrieveTemplate = async (templateId) => {
  return await Template.findByPk(templateId, {
    include: {
      model: Template,
      as: "projects",
      where: { isDeleted: false },
      include: [{
        model: Component,
        as: 'pages'
      }, {
        model: Component,
        as: 'components'
      }]
    }
  });
};

module.exports = {
  addComponent,
  getComponent,
  getProjectComponents,
  updateComponent,
  deleteComponentId
};
