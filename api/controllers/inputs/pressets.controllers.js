const {
  Template,
  Pressets
  // ColorToken,
  // FontPresset,
  // LayoutToken,
  // ColorPresset
} = require('../../database.js')

const savePressets = require('../../utils/savePressets.js')

const addConfig = async (req, res, next) => {
  const body = req.body
  const { id } = req.params

  try {
    const projectFinded = await Pressets.findOne({ where: { templateId: id } })

    if (!projectFinded) {
      throw new Error('No se encontro el proyecto asociado')
    } else {
      const config = await Pressets.create(body)
      res.status(200).json(config)
    }
  } catch (error) {
    res.status(400).json({ message: 'Error al crear pressets', error })
  }
}

const updateConfig = async (req, res, next) => {
  const { templateId } = req.body
  const { id } = req.params

  try {
    const projectFinded = await Pressets.findOne({
      where: {
        id: id,
        templateId: templateId
      }
    })

    if (!projectFinded) {
      throw new Error('No se encontro el pressets')
    } else if (!projectFinded.templateId) {
      throw new Error('No se encontro el proyecto asociado')
    } else {
      const configUpdated = await Pressets.update(body, {
        where: { id: id }
      })
      res.status(200).json(configUpdated)
    }
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar pressets', error })
  }
}

const deleteConfig = async (req, res, next) => {
  const { isDeleted, templateId } = req.body
  const { id } = req.params

  try {
    const projectFinded = await Pressets.findOne({
      where: {
        id: id,
        templateId: templateId
      }
    })

    if (!projectFinded) {
      throw new Error('No se encontro el pressets')
    } else if (!projectFinded.templateId) {
      throw new Error('No se encontro el proyecto asociado')
    } else {
      const configDeleted = await Pressets.update(
        { isDeleted: isDeleted },
        { where: { id: id } }
      )
      res.status(200).json(configDeleted)
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al actualizar la activacion de pressets', error })
  }
}

const destroyConfig = async (req, res, next) => {
  const { templateId } = req.body
  const { id } = req.params

  try {
    const projectFinded = await Pressets.findOne({
      where: {
        id: id,
        templateId: templateId
      }
    })

    if (!projectFinded) {
      throw new Error('No se encontro el pressets')
    } else if (!projectFinded.templateId) {
      throw new Error('No se encontro el proyecto asociado')
    } else {
      const configDestroyed = await Pressets.destroy({ where: { id: id } })
      res
        .status(200)
        .json({ message: 'Pressets destruido correctamente', configDestroyed })
    }
  } catch (error) {
    res.status(400).json({ message: 'Error al destruit el pressets', error })
  }
}

module.exports = {
  addConfig,
  updateConfig,
  deleteConfig,
  destroyConfig
}
