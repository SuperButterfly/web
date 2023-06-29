import axios from 'axios';

export const postInstance = (instanceData, idTemplate) => {
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


export const getInstances = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`/instances/${id}`);
      console.log('Instances list: \n', response.data);
    } catch (error) {
      console.error('Error getting instances:', error);
    }
  };
};

export const deleteInstance = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/instances/${id}`);
      console.log('Instances deleted: \n', response.data);
    } catch (error) {
      console.error('Error deleting instance:', error);
    }
  };
};
