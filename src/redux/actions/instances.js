import axios from 'axios';
// require('dotenv').config();

const SCW_SECRET_KEY = ''
const SCW_DEFAULT_ZONE = 'fr-par-1'
const SCW_PROJECT_ID = ''

//const { SCW_SECRET_KEY, SCW_DEFAULT_ZONE, SCW_PROJECT_ID } = process.env;


const apiUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`;
const headers = {
      'X-Auth-Token': SCW_SECRET_KEY,
      'Content-Type': 'application/json',
    };

export const postInstance = (projectName, comType, image ) => {
  return (dispatch) => {

    const instanceData = {
      name: projectName,
      project: SCW_PROJECT_ID,
      commercial_type: 'GP1-S',
      image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
      enable_ipv6: true,
      volumes: {
        0: {
          name: 'my-volume',
          size: 300000000000,
          volume_type: 'l_ssd',
        },
      },
    };

    axios
      .post('/instance', instanceData, { headers })
      .then((response) => {
        console.log('Instance created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating instance:', error);
      });
  };
};


export const getInstances = (templateId) => {
    return (dispatch) => {

    axios
      .get(`/template/${templateId}/instances`, { headers })
      .then((response) => {
        console.log('Instances list: \n', response.data);
      })
      .catch((error) => {
        console.error('Error getting instances:', error);
      });
    }
}

export const deleteInstance = (templateId, idInstance) => {
  return (dispatch) => {

    axios
      .delete(`/template/${templateId}/instances/${idInstance}`, { headers })
      .then((response) => {
        console.log('Instances deleted: \n', response.data);
      })
      .catch((error) => {
        console.error('Error getting instances:', error);
      });
    }
}