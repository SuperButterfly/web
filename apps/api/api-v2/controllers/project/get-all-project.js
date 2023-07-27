const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { Op } = require('sequelize')

/**
 * Devuelve todos los proyectos de un usuario con filtro por el rol !== owner,
 * esto se puede cambiar mandando el rol a excluir.
 * @param {*} req userId, role: por defecto es Owner pero puede enviarse otro, que se envie sera excluido
 */
const getAllProject = async (req, res, next) => {
  const { userId, role } = req.body
  const queryRole = role || 'Owner'
  const allProjects = await models.ProjectModel.findAll({
    include: [
      {
        model: models.UserModel,
        where: {
          id: userId
        },
        through: {
          model: models.UserToolProjectModel,
          where: {
            role: {
              [Op.not]: queryRole
            }
          }
        }
      }
    ]
  })

  if (!allProjects) throw new ClientError('Error fetching the projects', 404)

  response(res, 200, allProjects)
}

module.exports = { getAllProject: catchedAsync(getAllProject) }
