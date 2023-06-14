const getMQs = (dataincoming) => {
  const data = dataincoming.split('@').slice(1);
  const result = {};
  data.forEach((item) => {
    let aux1 = item.replace('media(max-width: ', 'mq');
    let aux2 = (aux1.replace('px)', ':')).trim();
    let divide = aux2.indexOf(':');
    let [key, value1] = [aux2.slice(0, divide), aux2.slice(divide + 1)];
    value1 = value1.trim();
    value1 = value1.slice(1, value1.length - 2);
    value1 = value1.trim();
    if (value1[0] === '.' || value1[0] === '#') {
      value1 = value1.slice(1);
    }
    if (value1.length - 1 === value1.indexOf('}')) {
      let props = {};
      let newDivide = value1.indexOf('{') - 1;
      let end = value1.indexOf('}' - 1);
      let [key1, value2] = [value1.slice(0, newDivide), value1.slice(newDivide + 2, end)];
      value2 = value2.trim();
      value2 = (value2.split(';'));
      value2.pop();
      value2.forEach((item) => {
        let aux = item.split(':');
        let [key2, value3] = [aux[0].trim(), aux[1].trim()];
        props[key2] = value3;
      });
      if (result[key1]) result[key1] = { ...result[key1] };
      else result[key1] = {};
      result[key1][key] = props;
    }
    else {
      let props = {};
      value1 = value1.split('}');
      value1.pop();
      value1.forEach((item) => {
        let aux = item.trim();
        if (aux[0] === '.' || aux[0] === '#') {
          aux = aux.slice(1);
        }
        let [key1, value2] = aux.split('{');
        value2 = value2.trim().split(';');
        value2.pop();
        value2.forEach((item) => {
          let aux = item.split(':');
          let [key2, value3] = [aux[0].trim(), aux[1].trim()];
          props[key2] = value3;
        });
        if (result[key1]) result[key1] = { ...result[key1] };
        else result[key1] = {};
        result[key1][key] = props;
      });
    }
  });

  return result;
};

module.exports = getMQs;
