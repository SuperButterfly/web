// require('dotenv').config();
const axios = require('axios');
const { Instance, Template } = require("../../database.js");

const SCW_SECRET_KEY = '8aa89c17-476c-41d4-a4d3-803a70206145';
const SCW_DEFAULT_ZONE = 'fr-par-1';
const SCW_PROJECT_ID = '1fa38384-68ca-4f39-ad98-25c13ea6a241';

//const { SCW_SECRET_KEY, SCW_DEFAULT_ZONE, SCW_PROJECT_ID } = process.env;

const apiUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`;
const headers = {
  'X-Auth-Token': SCW_SECRET_KEY,
  'Content-Type': 'application/json',
};

const postInstance = async (req, res) => {
  try {
    const { instanceData, idTemplate } = req.body;
    instanceData.project = SCW_PROJECT_ID;

    const response = await axios.post(apiUrl, instanceData, { headers });
    console.log(response.data);
    const { id, name } = response.data.server;

    const template = await Template.findByPk(idTemplate);
    if (!template) throw new Error("Template not found");

    const newInstance = await Instance.create({id, name});
    console.log(newInstance.__proto__);
    await newInstance.setTemplate(template.id);
    newInstance.save();

    res.status(201).json({ message: 'Instance created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating instance', message: error.message });
  }
};

// const updateInstance = async (req, res, next) => {
//   try {
//     const { instanceData, instanceId} = req.body;
//     const response = await axios.patch(apiUrl, instanceData, { headers });

//     const instanceToUpd = await Instance.findByPk(instanceData.instanceId);
//     instanceToUpd.update(instanceData);
//   } catch(e) {

//   }

// }

module.exports = { postInstance };
