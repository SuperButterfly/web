const axios = require('axios');
const { Instance } = require("../../database.js");
const { API_URL, VOLUME_URL, HEADERS  } = require('../../utils/consts.js')


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

    const volumeResponse = await axios.delete(`${VOLUME_URL}/${instanceToDelete.volumeId}`, { HEADERS });
    console.log(volumeResponse.data);

    const instanceResponse = await axios.delete(`${API_URL}/${idInstance}`, { HEADERS });
    console.log(instanceResponse.data);
    

    await instanceToDelete.destroy();

    res.status(200).json({ message: 'Instance and volume deleted', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getOneInstance, deleteInstance };