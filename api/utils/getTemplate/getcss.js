const ccss = {};
let data = '';
const getMQs = require('./getMQs.js');

const formatValues = (value) => {
  let aux2 = {};
  let aux1 = value.split(';');
  aux1.forEach((item) => {
    if (item !== '') {
      let aux = item.split(':');
      let key = aux[0];
      let value = aux[1];
      key = key.trim();
      if (key.includes('-')) {
        key = key.split('-')[0] + key.split('-')[1][0].toUpperCase() + key.split('-')[1].slice(1);
      }
      value = value.trim();
      aux2[key] = value;
    }
  });
  return aux2;
};

const getValues = () => {
  let key = '';
  if (data[0] === '@') {      
    const result = getMQs(data);
    const resultKeys = Object.keys(result);
    for (const key of resultKeys) {
      if(ccss[key]) ccss[key] = {...ccss[key], ...result[key]};
    }
    data = '';
  }
  else {
    if (data[0] === '.' || data[0] === '#') {
      key = data.slice(1, data.indexOf(' '));
    } else {
      key = data.slice(0, data.indexOf(' '));
    }

    if (!key.includes(':')) {
      ccss[key] = {};
      ccss[key].style = {};
      ccss[key].states = {};
    }

    let value = (data.slice(data.indexOf('{') + 1, data.indexOf('}') - 1)).trim();
    value = formatValues(value);

    data = (data.slice(data.indexOf('}') + 2)).trim();


    if (key.includes(':')) {
      const [name, state] = key.split(':');
      ccss[name].states[state] = value;
    }
    else ccss[key].style = value;
  }
};

const getcss = (file) => {
  data = file;
  while (data.length > 0) {
    getValues();
  }
  return ccss;
};
module.exports = getcss;
