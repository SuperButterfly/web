import axios from 'axios'

export const listText=(data)=>{ 
  let idData = {};
  data.forEach((item, index) => {
  
      idData[`T${index}`] = {
        order: index,
        type: item.type,
        data: item.data,
        gptAt: '',
        updatedAt: '',
        createdAt: new Date(),
      };
   
  });
   return idData
}


// listCode.js
const relevantInfo = async (info) => {
  const response = await axios.get(`/gpt?message=${info}`);
  return response.data.data;
};

export const listCode = async (data) => {
  const datas = {};
  for (let index = 0; index < data.length; index++) { // Update the loop to start from 0
    const info = await relevantInfo(data[index].data);

    datas[`C${index}`] = {
      order: index,
      type: data[index].type,
      data: {
        docs: info,
      },
      gptAt: '',
      updatedAt: '',
      createdAt: new Date(),
    };
  }

  return datas;
};
