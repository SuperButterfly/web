import axios from 'axios';
require('dotenv').config();

const { SCW_SECRET_KEY, SCW_DEFAULT_ZONE, SCW_PROJECT_ID } = process.env;

const apiUrl = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`;

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

    const headers = {
      'X-Auth-Token': SCW_SECRET_KEY,
      'Content-Type': 'application/json',
    };

    axios
      .post(apiUrl, instanceData, { headers })
      .then((response) => {
        console.log('Instance created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating instance:', error);
      });
  };
};


export const getInstances = () => {
    return (dispatch) => {

    }
}