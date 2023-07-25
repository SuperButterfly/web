const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { addComponet } = require('../component/add-component')

const addPage = async (req, res) => {
  const {
    name,
    title,
    metaDescription,
    cssStyles,
    scripts,
    keywords,
    author,
    ogTitle,
    ogDescription,
    ogImage,
    urlSlug,
    canonicalUrl,
    sitemapPriority,
    changeFrequency,
    robotsMeta,
    altTags,
    projectId
  } = req.body

  const project = await models.ProjectModel.findByPk(projectId)

  if (!project) return response(res, 404, 'Project not found')

  const newPage = await models.PageModel.create(
    name,
    title,
    metaDescription,
    cssStyles,
    scripts,
    keywords,
    author,
    ogTitle,
    ogDescription,
    ogImage,
    urlSlug,
    canonicalUrl,
    sitemapPriority,
    changeFrequency,
    robotsMeta,
    altTags,
    projectId
  )

  const componentData = {
    tag: 'body',
    order: 1,
    attributes: {},
    nativeAttributes: {},
    isShow: true,
    pageId: newPage.id,
    projectId: projectId,
    parentId: null,
    cssClasId: null
  }

  if (!newPage) throw new ClientError('Error to create page', 400)

  const component = await models.ComponentModel.create(componentData)

  response(res, 200, { newPage, component })
}

module.exports = { addPage: catchedAsync(addPage) }
