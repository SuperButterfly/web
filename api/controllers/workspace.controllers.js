const { Workspace, Template, Component, User } = require("../database.js");
const componentsList = require("./toCreate.js");

const addWorkspace = async (req, res, next) => {
  const userEmail = req.params.userEmail;
  try {
    const userFound = await User.findOne({
      where: {
        email: userEmail,
        isDeleted: false,
      },
    });
    if (!userFound) throw new Error("User not found or banned");
    const homepage = await Component.create(componentsList["Home"]);
    const newTemplate = await Template.create();
    const newWorkspace = await Workspace.create();

    await newTemplate.addPages(homepage);
    await newWorkspace.addProjects(newTemplate);
    await userFound.addWorkspaces(newWorkspace);

    const userUpdated = await User.findOne({
      where: {
        email: userEmail,
        isDeleted: false,
      },
      include: {
        model: Workspace,
        as: "workspaces",
        include: {
          model: Template,
          as: "projects",
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
      },
    });

    res.json({ workspaces: userUpdated.workspaces });
  } catch (error) {
    return next(error);
  }
};

// getWorkspace  x id  x params
const getWorkspace = async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Template,
          as: "projects",
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
        {
          model: User,
          as: "collaboratorviewer",
        },
        {
          model: User,
          as: "collaboratoreditor",
        },
      ],
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

    if (!workspace) {
      throw new Error("Workspace not found or removed");
    }

    res.json({ workspace });
  } catch (error) {
    return next(error);
  }
};

// getUserWorkspaces x userEmail   x params
const getUserWorkspaces = async (req, res, next) => {
  try {
    const userFound = await User.findOne({
      where: {
        email: req.params.userEmail,
        isDeleted: false,
      },
      include: [
        {
          model: Workspace,
          as: "workspaces",
          //where: {
          //isDeleted: false
          //},
          include: {
            model: Template,
            as: "projects",
            //order: [['name', 'DESC']],
            // where: {
            //   isDeleted: false
            // },
            include: [
              {
                model: Component,
                as: "pages",
                // order: [['name', 'DESC']]
                // where: {
                //   isDeleted: false
                // },
              },
              {
                model: Component,
                as: "components",
                //order: [['name', 'DESC']]
                // where: {
                //   isDeleted: false
                // },
              },
            ],
          },
        },
        {
          model: User,
          as: "collaboratorviewer",
        },
        {
          model: User,
          as: "collaboratoreditor",
        },
      ],
      order: [
        [
          { model: Workspace, as: "workspace" },
          { model: Template, as: "projects" },
          { model: Component, as: "pages" },
          "name",
          "ASC",
        ],
        [
          { model: Workspace, as: "workspace" },
          { model: Template, as: "projects" },
          { model: Component, as: "components" },
          "name",
          "ASC",
        ],
      ],
    });

    if (!userFound) {
      throw new Error("User does not exists or banned");
    }
    if (!userFound.workspaces) {
      throw new Error("User without workspaces");
    }

    res.json({ workspaces: userFound.workspaces });
  } catch (error) {
    return next(error);
  }
};

// updateWorkspace  x id  x params
const updateWorkspace = async (req, res, next) => {
  try {
    await Workspace.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const workspace = await retrieveWorkspace(req.params.id);
    res.json({ workspace });
  } catch (error) {
    return next(error);
  }
};

const addCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id);
    if (!workspaceFound) {
      throw new Error("Workspace not found");
    }

    const userFound = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userFound) {
      throw new Error("User not found");
    }

    if (req.query.collaborator === "viewer") {
      await workspaceFound.addCollaboratorviewer(userFound);
    } else {
      await workspaceFound.addCollaboratoreditor(userFound);
    }

    const workspace = await retrieveWorkspace(req.params.id);
    res.json({ workspace });
  } catch (error) {
    return next(error);
  }
};

const updateCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id);
    if (!workspaceFound) {
      throw new Error("Workspace not found");
    }

    const userFound = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userFound) {
      throw new Error("User not found");
    }

    if (req.query.collaborator === "viewer") {
      await workspaceFound.removeCollaboratoreditor(userFound);
      await workspaceFound.addCollaboratorviewer(userFound);
    } else {
      await workspaceFound.removeCollaboratorviewer(userFound);
      await workspaceFound.addCollaboratoreditor(userFound);
    }

    const workspace = await retrieveWorkspace(req.params.id);
    res.json({ workspace });
  } catch (error) {
    return next(error);
  }
};

const removeCollaborator = async (req, res, next) => {
  try {
    const workspaceFound = await Workspace.findByPk(req.params.id);
    if (!workspaceFound) {
      throw new Error("Workspace not found");
    }

    const userFound = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userFound) {
      throw new Error("User not found");
    }

    workspaceFound.removeCollaboratoreditor(userFound);
    workspaceFound.removeCollaboratorviewer(userFound);

    const workspace = await retrieveWorkspace(req.params.id);
    res.json({ workspace });
  } catch (error) {
    return next(error);
  }
};

//eliminar   x id  x params
const deleteWorkspace = async (req, res, next) => {
  try {
    const workspace = await Workspace.findOne({ where: { id: req.params.id } });

    workspace.isDeleted = true;
    await workspace.save();

    res.json({});
  } catch (error) {
    return next(error);
  }
};

const retrieveWorkspace = async (id) => {
  return await Workspace.findByPk(id, {
    include: [
      {
        model: Template,
        as: "projects",
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
      {
        model: User,
        as: "collaboratorviewer",
      },
      {
        model: User,
        as: "collaboratoreditor",
      },
    ],
    order: [
      [{ model: Template, as: "projects" }, { model: Component, as: "pages" }, "name", "ASC"],
      [{ model: Template, as: "projects" }, { model: Component, as: "components" }, "name", "ASC"],
    ],
  });
};

module.exports = {
  addWorkspace,
  getWorkspace,
  getUserWorkspaces,
  updateWorkspace,
  addCollaborator,
  updateCollaborator,
  removeCollaborator,
  deleteWorkspace,
};
