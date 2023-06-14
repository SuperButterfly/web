import axios from 'axios';

export const getTele = async (body) => {
  try {
    const { data } = await axios.post('/template/getTeleProject', body);
    return data;
  }
  catch (error) {
    return error.message;
  }
};

export const formatTele = async (body) => {
  try {
    const { data } = await axios.post('/template/formatData', body);
    return data;
  }
  catch (error) {
    return error.message;
  }
};

export const saveTele = async (body) => {
  const projectid = localStorage.getItem('projectid')
  try {
    const { data } = await axios.post(`/template/${projectid}`, body);
    return data;
  }
  catch (error) {
    return error.message;
  }
};
/*
module.exports = {
  getTele,
  formatTele,
  saveTele
};*/
