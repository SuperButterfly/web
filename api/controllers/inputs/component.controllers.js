const { Template, Component } = require("../../database.js");
const { getParentIdService } = require("../../services/getParentId.js");
const TAGS_WITHOUT_CHILDREN = require("../../utils/data/tagsWithoutChildren.js");
// const componentsList = require("./toCreate.js");

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
    } else if (componentDeleted.name === "Home") {
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
    if (!req.body.componentsId || !req.body.targetId)
      throw new Error("All parameters are required");
    await Component.update(
      { isDeleted: true }, 
      { where: { id: req.body.componentsId } }
    )
    const targetComponent = await Component.findByPk(req.body.targetId, {
      include: [
        {
          model: Component,
          as: "children",
        },
      ],
    });
    await targetComponent.reload({
      include: [
        {
          model: Component,
          as: "children",
        },
      ],
    });
    res.status(200).json({ component: targetComponent });
  } catch (error) {
    return next(error);
  }
};

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
    if (TAGS_WITHOUT_CHILDREN.includes(parentComponent.tag)) {
      throw new Error("Component Parent not allow");
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
    res.status(400).json({ error: error.message });
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
  if (copiedComponent && copiedComponent.children && copiedComponent.children.length) {
    const componentChildrenPromises = copiedComponent.children.map(
      async (currComp) => await cloneComponents(currComp)
    );
    const componentChildren = await Promise.all(componentChildrenPromises);
    await clonedComponent.addChildren(
      componentChildren.map((component) => component.dataValues.id)
    );
  }
  console.log("antes de retornar los componentes clonados?");
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
      throw new Error("Error saving Component");
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
  const { idChildren } = req.body;
  try {
    const parentID = await getParentIdService(idChildren);
    res.status(200).json({ parentId: parentID });
  } catch (error) {
    res.status(400).send({ error: error.message });
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

/**
 * Agrupa los componentes en un nuevo componente llamado group.
 * @param  req array de componentes a agrupar
 *
 */
const groupComponents = async (req, res, next) => {
  const { components } = req.body;
  const parentId = await getParentIdService(components[0].id);

  try {
    const newGroup = await Component.create({
      name: "group",
      tag: "div",
    });
    const parentComponent = await Component.findByPk(parentId);
    if (!parentComponent) {
      parentComponent = await Template.findByPk(parentId);
    }
    if (!parentComponent) {
      throw new Error("Componente padre no encontrado");
    }
    await newGroup.setParent(parentComponent);
    // Utilizar map para buscar y agregar los componentes como hijos del nuevo componente
    const childComponents = await Promise.all(
      components.map(async (component) => {
        const childComponent = await Component.findByPk(component.id);
        if (childComponent) {
          // Eliminar la relación con el padre anterior
          await childComponent.removeParent();
          await parentComponent.removeChildren(childComponent);
          await newGroup.addChild(childComponent);
          return childComponent;
        }
      })
    );

    res.status(200).json({ newGroup });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

/**
 * Elimina componente de grupo y los componentes agrupados en el.
 * @param  req array de componentes a agrupar
 *
 */
const unGroupComponents = async (req, res, next) => {
  const { groupId } = req.body;

  try {
    const groupComponent = await Component.findByPk(groupId);
    if (!groupComponent) {
      throw new Error("Grupo de componentes no encontrado");
    }
    const parentID = await getParentIdService(groupId);
    const parentComponent = await Component.findByPk(parentID);
    if (!parentComponent) {
      throw new Error("Componente padre no encontrado");
    }

    const childComponents = await groupComponent.getChildren();
    if (childComponents.length === 0) {
      throw new Error("El grupo de componentes no tiene hijos");
    }

    await Promise.all(
      childComponents.map(async (childComponent) => {
        await parentComponent.addChild(childComponent);
        await childComponent.setParent(parentComponent);
      })
    );

    await groupComponent.destroy();

    res.status(200).json({ parentComponent, childComponents });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  addComponentOrPage,
  updateComponent,
  pasteComponent,
  copyStylesComponent,
  deleteComponentId,
  deletedMultipleComponents,
  getParentId,
  groupComponents,
  unGroupComponents,
};
