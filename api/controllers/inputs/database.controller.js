// const { next } = require("cheerio/lib/api/traversing.js");
const { Template } = require('../../database.js')

const postDatabaseToProject = async (req, res, next) => {
  try {
    const { idProject } = req.params
    if (!idProject) throw new Error('idProject is required')

    const { databases } = req.body

    if (!databases) throw new Error('Databases are required')

    const project = await Template.update(
      {
        databases
      },
      {
        where: {
          id: idProject
        }
      }
    )
    if (!project) throw new Error('Project not found')
    res.send('ok')
  } catch (error) {
    return next(error)
  }
}

const deleteDatabasesToProjects = async (req, res, next) => {
  try {
    const { idProject } = req.params
    if (!idProject) throw new Error('idProject is required')

    const project = await Template.update(
      {
        databases: []
      },
      {
        where: {
          id: idProject
        }
      }
    )
    if (!project) throw new Error('Project not found')
    res.send(project)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  postDatabaseToProject,
  deleteDatabasesToProjects
}
