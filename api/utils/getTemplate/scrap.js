const { parse } = require('node-html-parser');
let allproperties = {};
const tagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'button', 'label', 'b'];

function createObject(element, componentsNames, idx) {
  let tag = element.rawTagName;
  if (tag === null) tag = 'div'
  if (tag !== null && tag !== undefined) tag = tag.toLowerCase();
  let rawAttributes = element.rawAttrs ? element.rawAttrs.trim() : null;

  let classList = element.classList ? element.classList.toString() : null;
  if (rawAttributes !== null && rawAttributes !== undefined) {
    if (rawAttributes.includes("{`")) {
      rawAttributes = rawAttributes.replace("{`", '"');
      rawAttributes = rawAttributes.replace("  `}", '"');
    }
  }
  let attributes = {};
  let properties = {};
  if (rawAttributes !== 'className=""' && rawAttributes !== null) {
    let attributesArray = rawAttributes.split('   ');
    attributesArray.forEach(attr => {
      if (attr !== '' && attr !== undefined) {
        if (!attr.includes('className=""')) {
          let [key, value] = attr.split('=');
          if (value !== undefined) {
            key = key.trim();
            if (value.includes("{")) {
              value = value.replace("{", '"');
              value = value.replace("}", '"');
            }
            const aux = value.replaceAll('"', '');
            if (key === 'className') {
              properties = allproperties[aux];
            }
            attributes[key] = aux;
          }
        }
      }
    });
  }
  // Forma los children
  const children = [];
  if (element.childNodes && element.childNodes.length > 0) {
    element.childNodes.forEach((childNode, i) => {
      const tagname = childNode.rawTagName
      if (tagname !== undefined && tagname !== 'meta' && tagname !== 'Helmet') {
        const newChildren = createObject(childNode, componentsNames, i);
        children.push(newChildren);
      }
    });
  }

  if (tag !== undefined && componentsNames !== undefined) {
    if (tag && componentsNames) {
      if (componentsNames[tag]) {
        return {
          tag: 'div',
          name: componentsNames[tag]
        };
      }
    }
  }
  if (tagList.includes(tag) && children.length === 0) {
    if (properties && properties.innerHTML)
      properties.innerHTML = (element.innerText).trim();
  }
  let result = {
    tag,
    properties,
    attributes,
    order: 0,
    children
  };
  if (idx) result.order = idx;
  if (classList !== null && classList !== '') {
    result.clases = classList;
  }
  return result;
}

const scrap = (reactHtml, name, componentsNames, props) => {
  allproperties = props;
  const root = parse(reactHtml);
  const lastresult = createObject(root, componentsNames);
  lastresult.name = name;
  return lastresult;
};

module.exports = scrap;
