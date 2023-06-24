const { User, Workspace, Template, Component, Notification } = require("../../database.js");

const getUser = async (req, res, next) => {
  try {
    const user = await retrieveUser(req.params.email);

    if (!user || user.isDeleted === true) {
      throw new Error("User does not exists or banned");
    }

    res.json({ user });
  } catch (error) {
    return next(error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user || user.isDeleted === true) {
      throw new Error("User does not exists or banned");
    }

    res.json({ user });
  } catch (error) {
    return next(error);
  }
};

const retrieveUser = async (email) => {
  return await User.findOne({
    where: { email },

    include: [
      {
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
      } /* {
      model: Workspace,
      as: 'sharedviewer',
      include: {
        model: Template,
        as: 'projects',
        include: [{
          model: Component,
          as: 'pages'
        }, {
          model: Component,
          as: 'components'
        }]
      }
    }, 
    {
      model: Workspace,
      as: 'sharededitor',
      include: {
        model: Template,
        as: 'projects',
        include: [{
          model: Component,
          as: 'pages'
        }, {
          model: Component,
          as: 'components'
        }]
      }
    }, 
    */,
      {
        model: Notification,
        as: "notifications",
      },
    ],
  });
};

module.exports = {
  getUser,

  getSingleUser,
};
