const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { addNativeStyles } = require('../../utils/helpers/addNativeStyles')
const {
  addNativeAttributes
} = require('../../utils/helpers/addNativeAttributes')
const getOrderNumber = require('../../utils/helpers/getOrderNumber')

const addComponentFatherByGroup = async (req, res) => {
  const {
    componentIds, // An array containing the IDs of the components to group together
    tag: divTag = 'div', // Tag name for the new div container (you can change this as needed)
    divAttributes = {}, // Attributes for the new div container (if any)
    divNativeAttributes = {}, // Native attributes for the new div container (if any)
    divOrder = 0, // Order for the new div container (you can set this as needed)
    divIsShow = true, // Visibility for the new div container (you can set this as needed)
    pageId,
    projectId
  } = req.body

  const project = await models.ProjectModel.findByPk(projectId)
  if (!project) throw new ClientError('Error not found project', 400)

  const page = await models.PageModel.findByPk(pageId)
  if (!page) throw new ClientError('Error not found page', 400)

  // Find all the components from the provided IDs
  const components = await models.ComponentModel.findAll({
    where: {
      id: componentIds
    }
  })

  // Check if all the components exist and have the same parent
  const parentId = components[0]?.parentId
  if (
    !parentId ||
    components.some((component) => component.parentId !== parentId)
  ) {
    throw new ClientError('All components must have the same parent', 400)
  }

  // Create the new div container component
  const defaultAttributes = await addNativeAttributes(divTag)
  const divContainer = await models.ComponentModel.create({
    tag: divTag,
    order: divOrder,
    attributes: divAttributes,
    nativeAttributes: { ...divNativeAttributes, ...defaultAttributes },
    isShow: divIsShow,
    pageId,
    projectId
  })

  // Associate the parent as the 'parent' of the new div container
  await divContainer.setParent(parentId)

  // Create the 'children' relationship for the parent
  await models.ComponentModel.addChild(parentId, divContainer.id)

  // Set the selected components as children of the new div container
  for (const component of components) {
    await component.setParent(divContainer.id)
  }

  response(res, 200, divContainer)
}

module.exports = {
  addComponentFatherByGroup: catchedAsync(addComponentFatherByGroup)
}
