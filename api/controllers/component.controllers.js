const {
  Template,
  Component
} = require("../database.js");
const componentsList = require('./toCreate.js');

const addComponentOrPage = async (req, res, next) => {
  const { projectId } = req.params;
  const { name, tag } = req.body;
  const isPage = req.query.isPage === "true";

  try {
    const templateTarget = await Template.findByPk(projectId);
    if (!templateTarget) {
      throw new Error('Template not found');
    }

    const newComponent = await Component.create({
      name: name,
      tag,
    });

    if (isPage) {
      await templateTarget.addPages(newComponent);
    } else {
      await templateTarget.addComponents(newComponent);
    }

    const template = await retrieveTemplate(templateTarget.id);
    res.json({ template });
  } catch (error) {
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
        model:Component,
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
      await componentDeleted.update({isDeleted : true});
      const target = await Component.findByPk(idParent,{
        include: [{
          model: Component,
          as: 'children'
        }]
      })
      res.json({ component: target });
    }
  }
  catch (error) {
    return next(error);
  }
};

const pasteComponent = async (req,res, next)=>{
  try{
    const copiedComponent = await retrieveComponent(req.body.id)
    if(!copiedComponent){
      throw new Error('Component not found')
    }
    const clonedComponents = await cloneComponents(copiedComponent)
    const parentComponent = await Component.findByPk(req.body.parentId,{
      include: [{
        model: Component,
        as: 'children'
      }]
    })
    if(!parentComponent){
      throw new Error('Component Parent not found')
    }
    await parentComponent.addChildren(clonedComponents)
    await parentComponent.reload({
      include: [{
        model: Component,
        as: 'children'
      }]
    });
    res.json({
      "component":parentComponent
    })
  }catch(error){
    return next(error);
  }
}

const cloneComponents = async (copiedComponent)=>{
  let aux = {}
  for(const prop in copiedComponent.dataValues){
    if(prop!=="id"&&prop!=="children")
      aux[prop]=copiedComponent.dataValues[prop]
  }
  const clonedComponent = await Component.create(aux,{
    include: [{ 
      model: Component,
      as: 'children'
    }]
  })
  
  await clonedComponent.save()
  if(copiedComponent.dataValues.children&&copiedComponent.dataValues.children.length){
    const componentChildrenPromises=copiedComponent.dataValues.children.map(
      async (currComp)=>await cloneComponents(currComp)
    )
    const componentChildren = await Promise.all(componentChildrenPromises)
    await clonedComponent.addChildren(componentChildren.map(component=>component.dataValues.id))
  }     
  return clonedComponent
}

const copyStylesComponent = async (req,res,next)=>{
  try{
    const {idCopied, idPaste} = req.body;
    const componentCopied = await Component.findByPk(idCopied,{attributes:["properties"]})
    if(!componentCopied){
      throw new Error('Component Copied not found')
    }
    const pastedComponent = await retrieveComponent(idPaste)
    if(!pastedComponent){
      throw new Error('Component Pasted not found')
    }
    const stylesCopied = componentCopied.properties.style
    pastedComponent.properties={...pastedComponent.properties,style:stylesCopied}
    const savedComponent = await pastedComponent.save()
    if(!savedComponent){
      throw new Error('Error to Saved Component')
    }
    res.json({component:pastedComponent})
  }catch(error){
    return next(error)
  }
}

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
  addComponentOrPage,
  getComponent,
  getProjectComponents,
  updateComponent,
  pasteComponent,
  copyStylesComponent,
  deleteComponentId
};
