const { parse } = require('node-html-parser');
let allproperties = {};
const tagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'button', 'label', 'b'];

function createObject(element, componentsNames) {
  let tag = element.tagName;
  if (tag !== null) tag = tag.toLowerCase();
  let rawAttributes = element.rawAttrs ? element.rawAttrs.trim() : null;
  let classList = element.classList ? element.classList.toString() : null;
  if (rawAttributes !== null && rawAttributes.includes("{`")) {
    rawAttributes = rawAttributes.replace("{`", '"');
    rawAttributes = rawAttributes.replace("  `}", '"');
  }
  let attributes = {};
  let properties = {};
  if (rawAttributes !== 'className=""' && rawAttributes !== null) {
    let attributesArray = rawAttributes.split('   ');
    attributesArray.forEach(attr => {
      if (attr !== '' && !attr.includes('className=""')) {
        let [key, value] = attr.split('=');
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
    });
  }
  // Forma los children
  const children = [];
  if (element.childNodes && element.childNodes.length > 0) {
    element.childNodes.forEach((childNode,i) => {
      if (childNode.nodeType === 1) {
        const childObject = createObject(childNode, componentsNames);
        
        children.push({...childObject,order:children.length+1});
      }
    });
  }
  console.log({children})
  if (tag && componentsNames) {
    if (componentsNames[tag]) {
      return {
        tag: 'div',
        name: componentsNames[tag]
      };
    }
  }
  if (tagList.includes(tag) && children.length === 0) {
    if(properties&&properties.innerHTML)
      properties.innerHTML = (element.innerText).trim();
  }
  let result = {
    tag,
    properties,
    attributes,
    children//: children&&children.length?children.sort((prev,next)=>prev.order-next.order):[]
  };
  if (classList !== null && classList !== '') {
    result.clases = classList;
  }
  return result;
}

const scrap = (reactHtml, name, componentsNames, props) => {
  allproperties = props;
  const root = parse(reactHtml);
  const result = createObject(root, componentsNames).children[0];
  result.name = name;
  return result;
};

module.exports = scrap;
