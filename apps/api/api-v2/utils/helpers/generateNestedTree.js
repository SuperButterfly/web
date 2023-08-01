const generateNestedTree = (element) => {
    // Ignorar elementos con el tag "image"
    if (element.tagName === 'image') {
      return null
    }
  
    const tagObject = {
      tag: element.tagName,
      attributes: {},
      children: [],
    }
    
    const attributes = element.attribs
    if (attributes) {
      Object.keys(attributes).forEach((attr) => {
        tagObject.attributes[attr] = attributes[attr]
      })
    }
  
    element.children.forEach((child) => {
      if (child.type === 'tag' || child.type === 'script') {
        const nestedChild = generateNestedTree(child)
        if (nestedChild) {
          tagObject.children.push(nestedChild)
        }
      }
    })
  
    return tagObject
  }
  
  module.exports = generateNestedTree