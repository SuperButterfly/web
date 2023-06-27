const { Asset, ClassSaved, Component, Folder, Template } = require("../../database.js");

const addClass = async (req, res, next) => {
  //res.send(req.body)
  try {
    const templateTarget = await Template.findByPk(req.params.projectId);
    if (!templateTarget) throw new Error("template not found");

    const newClass = await ClassSaved.create(req.body);

    await templateTarget.addClassList(newClass);

    const templateSaved = await retrieveTemplate(req.params.projectId);
    res.json({ template: templateSaved });
  } catch (error) {
    return next(error);
  }
};

const editClass = async (req, res, next) => {
  const { nameClass } = req.body;

  try {
    const newClass = await ClassSaved.update(req.body, {
      where: { nameClass },
    });
    if (!newClass) throw new Error("ClassSaved not found");

    const templateSaved = await retrieveTemplate(req.params.projectId);
    res.json({ template: templateSaved });
  } catch (error) {
    return next(error);
  }
};

const deleteClass = async (req, res, next) => {
  try {
    const newClass = await ClassSaved.update(
      { isDeleted: true },
      {
        where: { nameClass: req.body.nameClass },
      }
    );
    if (!newClass) throw new Error("ClassSaved not found");

    const templateSaved = await retrieveTemplate(req.params.projectId);
    res.json({ template: templateSaved });
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
      {
        model: Folder,
        as: "images",
        include: {
          model: Asset,
          as: "imgs",
        },
      },
      {
        model: ClassSaved,
        as: "classList",
      },
    ],
  });
};

module.exports = {
  addClass,
  editClass,
  deleteClass,
};
