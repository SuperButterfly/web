const { Template, Component } = require('../../database.js')
// const componentsList = require("./toCreate.js");

// getComponent  x id  x params
const getComponent = async (req, res, next) => {
  try {
    const component = await retrieveComponent(req.params.id)
    res.json({ component })
  } catch (error) {
    return next(error)
  }
}

// getComponents x projectId   x params
const getProjectComponents = async (req, res, next) => {
  try {
    const template = await Template.findOne({
      where: { id: req.params.projectId },
      include: [
        {
          model: Component,
          as: 'pages',
          where: { isDeleted: false }
        },
        {
          model: Component,
          as: 'components',
          where: { isDeleted: false }
        }
      ]
    })
    let components = []
    if (template && template.components) {
      components = template.components
    }
    let pages = []
    if (template && template.pages) {
      pages = template.pages
    }
    res.json({ components, pages })
  } catch (error) {
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
            }
            // order: [[ 'order', 'ASC']]
          }
          // order: [[ 'order', 'ASC']]
        }
        // order: [[ 'order', 'ASC']]
      }
      // order: [[ 'order', 'ASC']]
    }
    // order: [[ 'order', 'ASC']]
  })
}

const getParentId = async (req, res, next) => {
  const { idChildren } = req.body // Obtiene el ID del componente hijo por el parámetro "id" de la ruta

  try {
    const hijo = await Component.findByPk(idChildren) // Busca el componente hijo por su ID

    if (!hijo) {
      throw new Error('Componente hijo no encontrado')
    }

    const padre = await hijo.getParent() // Obtiene el componente padre utilizando el método "getParent"

    if (!padre) {
      throw new Error('Componente padre no encontrado')
    }

    res.status(200).json({ parentId: padre[0].id }) // Devuelve el ID del componente padre
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

/*
const pasteComponent = async (req,res, next)=>{
  try{
    const copiedComponent = req.body.component//await retrieveComponent(req.body.id)
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
  if(copiedComponent.dataValues&&copiedComponent.dataValues.children&&copiedComponent.dataValues.children.length){
    const componentChildrenPromises=copiedComponent.dataValues.children.map(
      async (currComp)=>await cloneComponents(currComp)
    )
    const componentChildren = await Promise.all(componentChildrenPromises)
    await clonedComponent.addChildren(componentChildren.map(component=>component.dataValues.id))
  }
  return clonedComponent
} */

module.exports = {
  getComponent,
  getProjectComponents,

  getParentId
}
