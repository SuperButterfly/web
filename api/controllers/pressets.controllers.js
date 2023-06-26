const {
  Template,
  PressetsGroups,
  // ColorToken,
  // FontPresset,
  // LayoutToken,
  // ColorPresset
} = require("../database.js");

const savePressets = require("../utils/savePressets.js");

const addTemplateDefaults = async (req, res, next) => {
  const { tempalteId } = req.params;
  try {
    const result = await savePressets(tempalteId);
    if (result !== "ok") throw new Error(result);
    const pressets = await retrievePressets(tempalteId);
    res.json({ pressets });
  } catch (error) {
    return next(error);
  }
};

const addColors = async (req, res, next) => {
  const { tempalteId } = req.params;
  // const { name } = req.body;
  try {
    const templateFound = await Template.findByPk(tempalteId);
    if (!templateFound) throw new Error("Template not found");

    // const newColorPresset = await ColorPresset.create({name});
    // await templateFound.
    // const pressets = await retrievePressets(tempalteId);
    // res.json({ pressets });
    res.json(templateFound);
  } catch (error) {
    return next(error);
  }
};

const retrievePressets = async (id) => {
  try {
    const templateFound = await Template.findByPk(id, {
      include: {
        model: PressetsGroups,
        as: "pressets",
      },
    });
    return templateFound.pressets;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  addTemplateDefaults,
  addColors,
};
