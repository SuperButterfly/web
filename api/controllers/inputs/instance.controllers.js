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
    const { instanceData, idTemplate, sendFiles } = req.body;
    instanceData.project = SCW_PROJECT_ID;

    const response = await axios.post(apiUrl, instanceData, { headers });
    const { id, name } = response.data.server;

    const template = await Template.findByPk(idTemplate);
    if (!template) throw new Error("Template not found");

    if (sendFiles) {
      await uploadProjectFilesToInstance(id, name, template);
    }

    res.status(201).json({ message: 'Instance created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating instance', message: error.message });
  }
};


const uploadProjectFilesToInstance = async (instanceId, instanceName, projectFiles) => {
  const formData = new FormData();

  projectFiles.forEach((file) => {
    formData.append('files', file, file.name);
  });


  try {
    const response = await axios.put(`${apiUrl}/${instanceId}/user_data`, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(`Files uploaded to instance ${instanceName}:`, response.data);
  } catch (error) {
    console.error(`Error uploading files to instance ${instanceName}:`, error.message);
  }
};

const updateInstance = async (req, res) => {
  try {
    const { instanceData, instanceId } = req.body;
    const response = await axios.patch(apiUrl, instanceData, { headers });
    console.log(response.data);

    const instanceToUpd = await Instance.findByPk(instanceId);
    if (!instanceToUpd) throw new Error('Instance not found');

    await instanceToUpd.update(instanceData);

    res.status(200).json({ message: 'Instance updated successfully', instance: instanceToUpd });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postInstance, updateInstance };
