const { Template, PressetsGroups, ColorToken, FontPresset, LayoutToken, ColorPresset } = require("../database.js");
const { colorGroup, fontGroup, layoutGroup } = require("./pressetsDefaults.js");

const savePressets = async (id) => {
  try {
    const templateFound = await Template.findByPk(id);
    if(!templateFound) return 'template not found';
    const pressetsDefault = await PressetsGroups.create();
    await templateFound.addPressets(pressetsDefault);
    
    colorGroup.forEach( async ({name, tokens}) => {
      const newColorPresset = await ColorPresset.create({name});
      tokens.forEach( async (tok) => {
        const newColorToken = await ColorToken.create(tok);
        await newColorPresset.addColortokens(newColorToken);
      });
      await pressetsDefault.addColors(newColorPresset);
    });
    
    fontGroup.forEach(async (font) => {
      const newFontPresset = await FontPresset.create(font);
      await pressetsDefault.addFonts(newFontPresset);
    });
    
    layoutGroup.size.forEach(async (token) => {
      const newLayoutToken = await LayoutToken.create(token);
      await pressetsDefault.addLayoutsizes(newLayoutToken);
    });
    
    layoutGroup.space.forEach(async (token) => {
      const newLayoutToken = await LayoutToken.create(token);
      await pressetsDefault.addLayoutspaces(newLayoutToken);
    });
    
    layoutGroup.radius.forEach(async (token) => {
      const newLayoutToken = await LayoutToken.create(token);
      await pressetsDefault.addLayoutradius(newLayoutToken);
    });
    
    return 'ok';
  } catch (error) {
    return error.message;
  }
};

module.exports = savePressets;
