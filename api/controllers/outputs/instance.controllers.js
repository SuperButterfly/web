const axios = require('axios');
const { Instance } = require("../../database.js");

const getOneInstance = async (req, res) => {
  try {
    const { idTemplate } = req.params;


    const instance = await Instance.findOne({
        where: {
            TemplateId:  idTemplate
        }
    });
    if (!instance) throw new Error('The project doesn\'t have an instance');

    res.status(200).json({ instance, success: true });
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error', message: error.message });
  }
};

module.exports = { getOneInstance };