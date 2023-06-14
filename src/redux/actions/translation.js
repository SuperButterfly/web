import axios from 'axios';
export const createFile = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`/translation/addFile`);
    console.log(data);
  }
  catch (error) {
    console.log(error.message);
  }
}