const { Workspace, Template, Component } = require("../database.js");

const createComplex = require("./complexComponents.js");
const downProject = require('./getTemplate/download.js');
const makeJsons = require('./getTemplate/makeJsons.js');
const { readComponents, readPages } = require('./getTemplate/readProject.js');

const getTeleProject = async (URL) => {
  try {
    const downRes = await downProject(URL);
    if (downRes !== 'ok') throw new Error(downRes);
    return downRes;
  }
  catch (e) {
    return e.message;
  }
};

const formatData = async (name) => {
  // IMPORTAR TEMPLATES DE TELEPORT
  const getTemplateRes = await makeJsons(name);
  if (getTemplateRes !== 'ok') throw new Error(getTemplateRes);
  // CONFIRMAR 
  return 'ok';
};

const makeProject = async (name, templateId, homeId) => {
  try {
    // TRAER LA INFORMACION DE PAGES Y DE COMPONENTS
    const compData = await readComponents();
    const pagesData = await readPages();

    // CREAR TEMPLATE Y AGREGAR A WORKSPACE
    const templateFound = await Template.findByPk(
      templateId, {
        include: [{
          model: Component,
          as: 'pages'
        }, {
          model: Component,
          as: 'components'
        }]
      });
    if (!templateFound) throw new Error('Project not found');
    const components = templateFound.components;
    if (components.length > 0) {
      components.forEach(async ({ id }) => {
        const componentFound = await Component.findByPk(id);
        await templateFound.removeComponent(componentFound);
        await componentFound.destroy();
      });
    }
    const pages = templateFound.pages;
    if (pages.length > 0) {
      pages.forEach(async ({ id }) => {
        const pageFound = await Component.findByPk(id);
        await templateFound.removeComponent(pageFound);
        await pageFound.destroy();
      });
    }

    // CREAR PAGES Y AGREGAR A TEMPLATES
    pagesData.forEach(async ({ data }) => {
      const newComponent = await Component.create(data);
      
      if (data.children && data.children.length > 0) {
        for (let child of data.children) {
          await createComplex(child, newComponent);
        }
      }
      await templateFound.addPages(newComponent);
    });
    
    // CREAR COMPONENTS Y AGREGAR A TEMPLATES
    compData.forEach(async ({ data }) => {
      const newComponent = await Component.create(data);
      if (data.children && data.children.length > 0) {
        for (let child of data.children) {
          await createComplex(child, newComponent);
        }
      }
      await templateFound.addComponents(newComponent);
    });
    
    return 'ok';
  }
  catch (e) {
    return e.message;
  }
}

module.exports = { getTeleProject, formatData, makeProject };
