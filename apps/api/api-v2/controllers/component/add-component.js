const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { addNativeStyles } = require('../../utils/helpers/addNativeStyles')
const { addNativeAttributes } = require('../../utils/helpers/addNativeAttributes')
const getOrderNumber = require('../../utils/helpers/getOrderNumber')

const addComponet = async (req, res) =>  {
  const {
    tag,
    // order,
    attributes,
    nativeAttributes,
    isShow,
    pageId,
    projectId,
    parentId,
    } = req.body

  const project = await models.ProjectModel.findByPk(projectId)
  if (!project) throw new ClientError('Error not found project', 400)

  const page = await models.PageModel.findByPk(pageId)
  if (!page) throw new ClientError('Error not found page', 400)

  const parentComponent = await models.ComponentModel.findByPk(parentId)
  if (!parentComponent) {throw new ClientError('Error not found component', 400)}

   const order = await getOrderNumber(parentId)
 
  const defaultAttributes = await addNativeAttributes(tag)
    const component = await models.ComponentModel.create({
    tag,
    order,
    attributes,
    nativeAttributes: { ...nativeAttributes, ...defaultAttributes},
    isShow,
    pageId,
    projectId,
  })
  
           // Associate the parent component as the 'parent' of the new component
  await component.setParent(parentComponent.id)
          // Create the 'children' relationship for the parent component
  await parentComponent.addChild(component.id)
  
  const  cssClass = await models.CssClassModel.findOne({ where: { name: tag } })
  
  if (cssClass && cssClass.activeDefault) {
    
    await models.PropertyModel.create({
      style: cssClass.style,
      ComponentId: component.id,
      grid: {}, 
      event: '', 
      state: {}, 
      other: {} 
    })

  } else {
    
    const defaultStyle = await addNativeStyles(tag)
    
    await models.PropertyModel.create({
      style: { ...component.style,
        desktop: defaultStyle,
      },
      ComponentId: component.id,
      grid: {}, 
      event: '',
      state: {}, 
      other: {} 
    })
  }

  response(res, 200, component)
}

module.exports = { addComponet: catchedAsync(addComponet) }
