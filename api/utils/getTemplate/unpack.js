const JSZip = require('jszip');
const readDownload = require('../../../../../../home/ubuntu/Downloads/index.js');

const danger = 'dangerouslySetInnerHTML'

const searchProps = (data) => {
  let p1 = data.search('{props.') + 7;
  if (p1 < 100) return -1;
  let p2 = p1;
  while (data[p2] !== '}') {
    p2++;
  }
  return data.slice(p1, p2);
};

const replaceWord = (data, word) => {
  if (word === 'rootClassName') {
    let temp = data.replace(' ${props.rootClassName} ', '');
    let p1 = temp.search('className={`') + 12;
    let p2 = p1;
    while (temp[p2] !== '`') {
      p2++;
    }
    let className = temp.slice(p1, p2);
    return data.replace("{`" + className + ' ${props.rootClassName} `}', `"${className}"`);
  }
  else {
    let p1 = data.search(word + ": '") + word.length + 3;
    let p2 = p1;
    while (data[p2] !== "'") {
      p2++;
    }
    let found = (data.slice(p1, p2)).replace((/\\n/g), ' ');
  
    if (word.includes('mage_src') || word.includes('mage_alt') || word.includes('_placeholder')) {
      return data.replace(`{props.${word}}`, '"' + found + '"');
    }
    else return data.replace(`{props.${word}}`, found)  //` innerHTML="${found}">`)  // 
  }
};

const replaceProps = (incoming) => {
  let temp = incoming;

  let word = searchProps(temp);
  while (word !== -1) {
    temp = replaceWord(temp, word);
    word = searchProps(temp);
  }
  return temp;
};

const names = [];
const getName = (key) => {
  const name = key.split('/')[2].split('.')[0];
  const aux = name.split('-');
  let res = '';
  for (const word of aux) {
    res += word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (!names.includes(res)) names.push(res);
  return res;
};

const getData = (aux) => {
  const aux1 = aux.replaceAll('\n', ' ');
  const aux2 = aux1.replaceAll("'", '"');
  if (aux2.includes('<div')) {
    const first = aux2.indexOf('<div');
    const last = aux2.lastIndexOf('</div>');
    return aux2.slice(first - 4, last + 6);
  }
  else return aux2;
};

let result = '';
const quitDanger = (filterString) => {
  let idx1 = filterString.indexOf(danger);
  let first = filterString.slice(0, idx1 - 1);
  let last = filterString.slice(idx1 + 25)
  let idx2 = first.lastIndexOf('<') - 1;
  let idx3 = last.indexOf('>') + 1;
  first = first.slice(0, idx2);
  last = last.slice(idx3, last.length);
  result = first + last;
  if(result.includes(danger)) {
    quitDanger(result)
  }
  return result.trim()
}   

const unpack = async (file) => {
  try {
    const data = readDownload(file);
    const zip = await JSZip.loadAsync(data);
    const res = zip.folder(file);
    const keys = Object.keys(res.files);
    const project = {
      pages: {
        src: [],
        css: []
      },
      components: {
        src: [],
        css: []
      }
    };
    for (const key of keys) {
      if (key.includes('.js') && !key.includes('.json') && key.includes('views')) {
        const name = getName(key);
        const aux = await res.files[key].async('string');
        const aux1 = getData(aux);
        let aux2 = aux1
        if(aux1.includes(danger)) {
          aux2 = quitDanger(aux1)
        }
        project.pages.src.push({ name, data: aux2 });
      }
      else if (key.includes('.css') && key.includes('views')) {
        const name = getName(key);
        const aux = await res.files[key].async('string');
        const aux1 = getData(aux);
        project.pages.css.push({ name, data: aux1 });
      }
      else if (key.includes('.js') && !key.includes('.json') && key.includes('components')) {
        const name = getName(key);
        let aux = await res.files[key].async('string');
        const result = replaceProps(aux);
        const aux1 = getData(result);
        let aux2 = aux1
        if(aux1.includes(danger)) {
          aux2 = quitDanger(aux1)
        }
        project.components.src.push({ name, data: aux2 });
      }
      else if (key.includes('.css') && key.includes('components')) {
        const name = getName(key);
        const aux = await res.files[key].async('string');
        const aux1 = getData(aux);
        project.components.css.push({ name, data: aux1 });
      }
    }

    return [project, names];
  } catch (error) {
    return error.message;
  }
};

module.exports = unpack;
