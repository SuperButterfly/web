// require('dotenv').config();
const axios = require('axios');
const { Instance, Template } = require("../../database.js");

const SCW_SECRET_KEY = '';
const SCW_DEFAULT_ZONE = 'fr-par-1';
const SCW_PROJECT_ID = '';

//const { SCW_SECRET_KEY, SCW_DEFAULT_ZONE, SCW_PROJECT_ID } = process.env;

const apiUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`;
const headers = {
  'X-Auth-Token': SCW_SECRET_KEY,
  'Content-Type': 'application/json',
};

const postInstance = async (req, res, next) => {
  try {
    const { instanceData, idTemplate } = req.body;

    const response = await axios.post(apiUrl, instanceData, { headers });
    const { id, name } = response.data.server;
    const newInstance = await Instance.create({id, name});
    const template = await Template.findByPk(idTemplate);

    if (!template) throw new Error('Template not found');

    await template.addInstance(newInstance);

    res.status(200).json({ message: 'Instance created successfully', data: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Error creating instance' });
  }
};

module.exports = { postInstance };
