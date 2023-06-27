const { Workspace, Template, Component, User } = require("../../database.js");

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

module.exports = {
  getWorkspace,
  getUserWorkspaces,
};
