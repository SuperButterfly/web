// const { next } = require("cheerio/lib/api/traversing.js");
const { Template } = require('../../database.js')

const getDatabaseByProject = async (req, res, next) => {
  try {
    if (!req.params.idProject) throw new Error('idProject is required')
    const project = await Template.findByPk(req.params.idProject)

    if (!project) throw new Error('Project not found')
    res.send(project.databases)
  } catch (error) {
    return next(error)
  }
}

// const getDatabasesAllProjects = async(req,res)

module.exports = {
  getDatabaseByProject
}
