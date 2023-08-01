const getOrderNumber = require('./getOrderNumber')    

const createComponentsRecursively = async (node, parentId, models, page, projectId, cssStyles) => {
    for (const childNode of node.children) {
      const component = await models.ComponentModel.create({
        tag: childNode.tag,
        order: await getOrderNumber(parentId),
        attributes: childNode.attributes,
        nativeAttributes: {},
        isShow: true,
        pageId: page.id,
        projectId,
        parentId,
      })
  
      const componentClass = `.${childNode.attributes.class}`
      if (componentClass && cssStyles[componentClass]) {
        const property = await models.PropertyModel.create({
          style: {
            desktop: {
              active: true,
              width: '1920',
              attribute: cssStyles[componentClass],
            },mobile: {
                active: true,
                width: '479',
                attribute: {}
              },
              mobileLandscape: {
                active: true,
                width: '767',
                attribute: {}
              },
              tablet: {
                active: true,
                width: '991',
                attribute: {}
              },
              laptop: {
                active: true,
                width: '1200',
                attribute: {}
              },
              wide: {
                active: true,
                width: '1600',
                attribute: {}
              }
          },
          isDeleted: false,
        })
  
        await component.setProperty(property)
      }
  
      if (childNode.children) {
        await createComponentsRecursively(childNode, component.id, models, page, projectId, cssStyles)
      }
    }
  }
  
  module.exports = createComponentsRecursively