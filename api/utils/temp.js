const { Router } = require('express');
const admin = Router();
const { Workspace, Template, Component, User } = require("../database.js");
const { PressetsGroups, ColorToken, FontPresset, LayoutToken, ColorPresset } = require("../database.js");
const { colorGroup, fontGroup, layoutGroup } = require("./pressetsDefaults.js");
const connectMongodb = require("../database2.js");
const {deleteDirectory} = require("./clearTeleDirectory")
const { getTeleProject, formatData, makeProject } = require("./getTemplate.js");
const Column = require("../datamodels/Column.js")

admin.get('/mongo', async (req, res) => {
  const { name } = req.body;
  try {
    // const newColumn = new Column({ name });
    //const result = await Column.find({ name });
    const result = await Template.findAll({where:{name:name} });
    res.json({result});
  } catch (e) {
    res.send(e.message);
  }
});

/*
admin.post('/:id', async (req, res, next) => {

  try {
    const Component = await Component.findByPk(req.params, {
      include: {
        model: Component,
        as: 'children',
        include: {
          model: Component,
          as: 'children',
          include: {
            model: Component,
            as: 'children',
            include: {
              model: Component,
              as: 'children'
            }
          }
        }
      }
    });
    res.json({ Component });
  }
  catch (error) {
    res.send(error.message);
  }
});
*/
admin.post('/pressets/:id', async (req, res) => {
  try {
    const pressets = await retrievePressets(req.params.id);
    const newColorPresset = await ColorPresset.findOne({ where: { name: colorGroup[0].name } });
    await pressets.addColors(newColorPresset);

    const pressetsSaved = await retrievePressets(req.params.id);
    res.json({ pressetsSaved });
  }
  catch (error) {
    res.json({ error: error.message });
  }
});

const retrievePressets = async (id) => {
  try {
    const template = await Template.findByPk(id, {
      include: {
        model: PressetsGroups,
        as: 'pressets'
        /* ,
               include: [{
                 model: ColorPresset,
                 as: 'colors'
               }] */ //{ all: true }
      }
    });
    if (!template) throw new Error('template not found');

    return template.pressets[0];
  }
  catch (e) {
    return e.message;
  }
};

admin.post("/user", async (req, res, next) => {
  const { userdata } = req.body;
  try {
    const newUser = await User.destroy({
      where: userdata
    });
    res.json({ newUser });
  }
  catch (e) {
    res.json(e);
  }
});

admin.post('/getTeleProject', async (req, res, next) => {
  const { URL } = req.body;
  try {
    if (!URL) throw new Error('URL missed');
    const getTeleProjectRes = await getTeleProject(URL);
    if (getTeleProjectRes !== 'ok') throw new Error(getTeleProjectRes);
    res.send(getTeleProjectRes);
  }
  catch (e) {
    res.send(e.message);
  }
});

admin.post('/formatData', async (req, res, next) => {
  const { name } = req.body;
  try {
    if (!name) throw new Error('Name missed');
    const formatDataRes = await formatData(name);
    if (formatDataRes !== 'ok') throw new Error(formatDataRes);
    res.send(formatDataRes);
  }
  catch (e) {
    res.send(e.message);
  }
});

admin.post('/makeProject/:templateId', async (req, res, next) => {
  const { name } = req.body;
  const { templateId } = req.params;
  try {
    if (!name || !templateId) throw new Error('Parameter/s missed');
    const makeProjectRes = await makeProject(name, templateId);
    // if (makeProjectRes !== 'ok') throw new Error(makeProjectRes);
    res.send(makeProjectRes);
  }
  catch (e) {
    res.send(e.message);
  }
});

admin.delete('/removeChildren/:padre', async (req, res, next) => {
  try {
    const padre = await Workspace.findByPk(req.params.padre);
    const hijo = await Template.findByPk(req.query.hijo);
    await padre.removeProjects(hijo);
    await hijo.destroy();
    res.send('ok');
  }
  catch (error) {
    res.send(error.message);
  }
});

admin.delete('/clearTeleDirectory',async(req,res)=>{
  try{
    //const response = await deleteDirectory('/www/web/api/project')
    const response = await deleteDirectory('/var/www/web/api/project')
    res.send(response)
  }catch(error){
    res.send(error.message)
  }
})

module.exports = admin;
  