const { Template, Component } = require("../database.js");
const componentsList = require("./toCreate.js");

const addComponentOrPage = async (req, res, next) => {
  const { projectId } = req.params;
  const { name, tag } = req.body;
  const isPage = req.query.isPage === "true";

  try {
    const templateTarget = await Template.findByPk(projectId);
    if (!templateTarget) {
      throw new Error("Template not found");
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
    const component = await retrieveComponent(req.params.id);
    res.json({ component });
  } catch (error) {
    return next(error);
  }
};

// getComponents x projectId   x params
const getProjectComponents = async (req, res, next) => {
  try {
    const template = await Template.findOne({
      where: { id: req.params.projectId },
      include: [
        {
          model: Component,
          as: "pages",
          where: { isDeleted: false },
        },
        {
          model: Component,
          as: "components",
          where: { isDeleted: false },
        },
      ],
    });
    let components = [];
    if (template && template.components) {
      components = template.components;
    }
    let pages = [];
    if (template && template.pages) {
      pages = template.pages;
    }
    res.json({ components, pages });
  } catch (error) {
    return next(error);
  }
};

// updateComponent  x id  x params
const updateComponent = async (req, res, next) => {
  try {
    await Component.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const component = await retrieveComponent(req.params.id);
    res.json({ component });
  } catch (error) {
    return next(error);
  }
};

const deleteComponentId = async (req, res, next) => {
  try {
    const componentDeleted = await Component.findByPk(req.params.id, {
      include: [
        {
          model: Component,
          as: "parent",
          attributes: ["id"],
        },
      ],
    });

    if (!componentDeleted) {
      throw new Error("Component not found");
    } else if (componentDeleted.name == "Home") {
      throw new Error("no se puede borrar este componente");
    } else {
      const idParent = componentDeleted.parent[0].id;
      await componentDeleted.update({ isDeleted: true });
      const target = await Component.findByPk(idParent, {
        include: [
          {
            model: Component,
            as: "children",
          },
        ],
      });
      res.json({ component: target });
    }
  } catch (error) {
    return next(error);
  }
};

const deletedMultipleComponents = async (req, res, next) => {
  try {
    console.log("Llegué");
    if (!req.body.componentsId || !req.body.targetId)
      throw new Error("All parameters are required");

    const components = req.body.componentsId.map(async (id) => await Component.findByPk(id));
    const componentsFound = await Promise.all(components);
    if (!componentsFound) throw new Error("Ocurrió un error en la busqueda de componentes");
    console.log(componentsFound);
    componentsFound.forEach(async (component) => {
      await component.update({ isDeleted: true });
    });
    const targetComponent = await Component.findByPk(req.body.targetId, {
      include: [
        {
          model: Component,
          as: "children",
        },
      ],
    });
    /*await targetComponent.reload({
      include:[{
        model:Component,  
        as:'children',
      }]
    });*/
    res.status(200).json({ component: targetComponent });
  } catch (error) {
    return next(error);
  }
};

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
}*/

const pasteComponent = async (req, res, next) => {
  try {
    if (!req.body.component) {
      throw new Error("Component not found");
    }
    const copiedComponent = req.body.component;
    const clonedComponents = await cloneComponents(copiedComponent);
    console.log("Despues de clonar los componentes");
    const parentComponent = await Component.findByPk(req.body.parentId, {
      include: [
        {
          model: Component,
          as: "children",
        },
      ],
    });
    if (!parentComponent) {
      throw new Error("Component Parent not found");
    }
    await parentComponent.addChildren(clonedComponents);
    await parentComponent.reload({
      include: [
        {
          model: Component,
          as: "children",
        },
      ],
    });
    res.json({
      component: parentComponent,
    });
  } catch (error) {
    return next(error);
  }
};

const cloneComponents = async (copiedComponent) => {
  let aux = {};
  for (const prop in copiedComponent) {
    if (prop !== "id" && prop !== "children") aux[prop] = copiedComponent[prop];
  }
  const clonedComponent = await Component.create(aux, {
    include: [
      {
        model: Component,
        as: "children",
      },
    ],
  });

  await clonedComponent.save();
  console.log("antes de if de los children");
  if (copiedComponent && copiedComponent.children && copiedComponent.children.length) {
    console.log("Entré al if de los children");
    const componentChildrenPromises = copiedComponent.children.map(
      async (currComp) => await cloneComponents(currComp)
    );
    const componentChildren = await Promise.all(componentChildrenPromises);
    await clonedComponent.addChildren(
      componentChildren.map((component) => component.dataValues.id)
    );
  }
  ("antes de retornar los componentes clonados?");
  return clonedComponent;
};

const copyStylesComponent = async (req, res, next) => {
  try {
    const { idCopied, idPaste } = req.body;
    const componentCopied = await Component.findByPk(idCopied, { attributes: ["properties"] });
    if (!componentCopied) {
      throw new Error("Component Copied not found");
    }
    const pastedComponent = await retrieveComponent(idPaste);
    if (!pastedComponent) {
      throw new Error("Component Pasted not found");
    }
    const stylesCopied = componentCopied.properties.style;
    pastedComponent.properties = { ...pastedComponent.properties, style: stylesCopied };
    const savedComponent = await pastedComponent.save();
    if (!savedComponent) {
      throw new Error("Error to Saved Component");
    }
    res.json({ component: pastedComponent });
  } catch (error) {
    return next(error);
  }
};

const retrieveComponent = async (id) => {
  return await Component.findByPk(id, {
    include: {
      model: Component,
      as: "children",
      include: {
        model: Component,
        as: "children",
        include: {
          model: Component,
          as: "children",
          include: {
            model: Component,
            as: "children",
            include: {
              model: Component,
              as: "children",
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
      include: [
        {
          model: Component,
          as: "pages",
        },
        {
          model: Component,
          as: "components",
        },
      ],
    },
  });
};

const getParentId = async (req, res, next) => {
  const { idChildren } = req.body; // Obtiene el ID del componente hijo por el parámetro "id" de la ruta

  try {
    const hijo = await Component.findByPk(idChildren); // Busca el componente hijo por su ID

    if (!hijo) {
      throw new Error("Componente hijo no encontrado");
    }

    const padre = await hijo.getParent(); // Obtiene el componente padre utilizando el método "getParent"

    if (!padre) {
      throw new Error("Componente padre no encontrado");
    }

    res.status(200).json({ parentId: padre[0].id }); // Devuelve el ID del componente padre
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  addComponentOrPage,
  getComponent,
  getProjectComponents,
  updateComponent,
  pasteComponent,
  copyStylesComponent,
  deleteComponentId,
  getParentId,
};
