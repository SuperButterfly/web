import axios from 'axios';

export const postInstance = () => {
  const instanceData = {
      name: 'test-instance-29-06',
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

  const idTemplate = '744fedb9-4cca-4a03-aaa1-2346f8a713c5';

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
