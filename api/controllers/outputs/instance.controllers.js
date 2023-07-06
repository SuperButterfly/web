const axios = require('axios');
const { Instance } = require("../../database.js");

const SCW_SECRET_KEY = '8aa89c17-476c-41d4-a4d3-803a70206145';
const SCW_DEFAULT_ZONE = 'fr-par-1';
// const SCW_PROJECT_ID = '030e41cc-5a02-4791-a551-d3f1d5848e8e';

// //const { SCW_SECRET_KEY, SCW_DEFAULT_ZONE, SCW_PROJECT_ID } = process.env;

const apiUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`;
const volumeUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/volumes`;

const headers = {
  'X-Auth-Token': SCW_SECRET_KEY,
  'Content-Type': 'application/json',
};

const getOneInstance = async (req, res) => {
  try {
    const { idInstance } = req.params;


    const instance = await Instance.findOne({
        where: {
              instanceId:  idInstance
        }
    });
    if (!instance) throw new Error('The project doesn\'t have an instance');

    res.status(200).json({ instance, success: true });
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error', message: error.message });
  }
};

const deleteInstance = async (req, res) => {
  try {
    const { idInstance } = req.params;

    const instanceToDelete = await Instance.findByPk(idInstance);
    if (!instanceToDelete) throw new Error('Instance not found.');

    console.log(instanceToDelete.volumeId);

    const volumeResponse = await axios.delete(`${volumeUrl}/${instanceToDelete.volumeId}`, { headers });
    console.log(volumeResponse.data);

    const instanceResponse = await axios.delete(`${apiUrl}/${idInstance}`, { headers });
    console.log(instanceResponse.data);
    

    await instanceToDelete.destroy();

    res.status(200).json({ message: 'Instance and volume deleted', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getOneInstance, deleteInstance };