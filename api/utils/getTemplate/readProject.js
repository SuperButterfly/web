const { readdir } = require('fs').promises;
const { readFileSync } = require('fs');
const path = require("path");

// OBTENER PATH's DE PAGES Y COMPONENTS
let projectpath = __dirname;
projectpath = projectpath.slice(0, projectpath.length - 17);

const compPath = path.join(projectpath, 'project/components/');
const pagesPath = path.join(projectpath, 'project/pages/');

// OBTENER DATA DE CADA UNO
const getData = (files, base) => {
  return files.map(file => {
    const filepath = path.join(base, file);
    const text = readFileSync(filepath, 'utf8');
    return { data: JSON.parse(text) };
  });
};

const readComponents = async () => {
  try {
    const compFiles = await readdir(compPath);
    return getData(compFiles, compPath);
  } catch (e) {
    return e.message;
  }
};

const readPages = async () => {
  try {
    const pagesFiles = await readdir(pagesPath);
    return getData(pagesFiles, pagesPath);
  } catch (e) {
    return e.message;
  }
};

module.exports = { readComponents, readPages };
