import axios from 'axios';
import { createNewInstance } from '../slices/instancesSlices';

export const postInstance = (idTemplate, projectName) => {

  const instanceData = {
      name: projectName,
      project: '',
      commercial_type: 'GP1-S',
      image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
      enable_ipv6: true,
      volumes: {
        0: {
          name: 'my-volume',
          size: 300000000000,
          volume_type: 'l_ssd',
        },
      }
    }

  return async (dispatch) => {
    try {
      const response = await axios.post('/instance', { instanceData, idTemplate });
      console.log(response.data);
      dispatch(postInstance(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const getInstance = (idTemplate) => {
  return async (dispatch) => {
    try {
      const response = await axios(`/instance/${idTemplate}`);
      const { success, instance } = response.data;

      if (success) {
        dispatch(createNewInstance(instance));
      }
    } catch (error) {
      console.error('Error getting instance:', error);
    }
  };
};


export const deleteInstance = (idInstance) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/instances/${idInstance}`);
      console.log('Instances deleted: \n', response.data);
    } catch (error) {
      console.error('Error deleting instance:', error);
    }
  };
};
