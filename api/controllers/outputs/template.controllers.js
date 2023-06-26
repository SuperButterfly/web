const {
  Workspace,
  Template,
  Component,
  // Folder,
  // Asset,
  // ClassSaved
} = require("../../database.js");

const { getTeleProject, formatData, makeProject } = require("../../utils/getTemplate.js");
const { clearTeleDirectory } = require("../../utils/clearTeleDirectory");
const { componentsList } = require("../toCreate.js");

const addTemplate = async (req, res, next) => {
  try {
    const homepage = await Component.create(componentsList["Home"]);
    const workspacefound = await Workspace.findByPk(req.params.workspaceId);
    if (!workspacefound || !workspacefound.id) {
      throw new Error("Workspace not found");
    }
    const newTemplate = await Template.create(req.body);
    await workspacefound.addProjects(newTemplate);
    await newTemplate.addPages(homepage);
    const template = await retrieveTemplate(req.params.id);
    res.json({ template });
  } catch (error) {
    return next(error);
  }
};

// getTemplate  x id  x params
const getTemplate = async (req, res, next) => {
  try {
    const template = await retrieveTemplate(req.params.id);
    res.json({ template });
  } catch (error) {
    return next(error);
  }
};

// getWorkspaceTemplates x workspaceId x params
const getWorkspaceTemplates = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findOne({
      where: { id: req.params.workspaceId },
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
      order: [
        [{ model: Template, as: "projects" }, { model: Component, as: "pages" }, "name", "ASC"],
        [
          { model: Template, as: "projects" },
          { model: Component, as: "components" },
          "name",
          "ASC",
        ],
      ],
    });
    if (!workspaceFound) throw new Error("Workspace not found");
    res.json({ templates: workspaceFound.projects });
  } catch (error) {
    return next(error);
  }
};

const getTele = async (req, res, next) => {
  const { URL } = req.body;
  try {
    if (!URL) throw new Error("URL missed");
    const getTeleProjectRes = await getTeleProject(URL);
    if (getTeleProjectRes !== "ok") throw new Error(getTeleProjectRes);
    res.send(getTeleProjectRes);
  } catch (error) {
    return next(error);
  }
};

const formatTele = async (req, res, next) => {
  const { name } = req.body;
  try {
    if (!name) throw new Error("Name missed");
    const formatDataRes = await formatData(name);
    if (formatDataRes !== "ok") throw new Error(formatDataRes);
    res.send(formatDataRes);
  } catch (error) {
    return next(error);
  }
};

const saveTele = async (req, res, next) => {
  const { name, homeId } = req.body;
  const { templateId } = req.params;
  try {
    if (!name || !templateId) throw new Error("Parameter/s missed");
    const makeProjectRes = await makeProject(name, templateId, homeId);
    if (makeProjectRes !== "ok") throw new Error(makeProjectRes);
    const clearImportTeleRes = await clearTeleDirectory("/var/www/web/api/project");
    if (clearImportTeleRes !== "ok") throw new Error(clearImportTeleRes);
    res.send(makeProjectRes);
  } catch (error) {
    return next(error);
  }
};

const retrieveTemplate = async (templateId) => {
  return await Template.findByPk(templateId, {
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
    order: [
      [/*{ model: Template, as: "projects" },*/ { model: Component, as: "pages" }, "name", "ASC"],
      [
        /*{ model: Template, as: 'projects' },*/ { model: Component, as: "components" },
        "name",
        "ASC",
      ],
    ],
    //order:[[{model:Component,as:"components"},{model:Component,as:"pages"},'name','ASC']]
  });
};

module.exports = {
  getTemplate,
  getWorkspaceTemplates,
  addTemplate,
  getTele,
  formatTele,
  saveTele,
};
