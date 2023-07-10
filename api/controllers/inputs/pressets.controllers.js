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

  try {
    const config = await Pressets.create(body)
    res.status(200).json(config)
  } catch (error) {
    res.status(400).json({ message: 'Error al crear pressets', error })
  }
}

const updateConfig = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  try {
    const pressetsFinded = await Pressets.findByPk(id)

    if (!pressetsFinded) {
      throw new Error('No se encontró el pressets')
    } else {
      await Pressets.update(body, {
        where: { id: id }
      })

      const updatedPressets = await Pressets.findByPk(id)
      res.status(200).json(updatedPressets)
    }
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar pressets', error })
  }
}

const deleteConfig = async (req, res, next) => {
  const { isDeleted } = req.body
  const { id } = req.params

  try {
    const pressetsFinded = await Pressets.findByPk(id)

    if (!pressetsFinded) {
      throw new Error('No se encontro el pressets')
    } else {
      await Pressets.update({ isDeleted: isDeleted }, { where: { id: id } })
      const deletedConfig = await Pressets.findByPk(id)
      res.status(200).json(deletedConfig)
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al actualizar la activacion de pressets', error })
  }
}

const destroyConfig = async (req, res, next) => {
  const { id } = req.params

  try {
    const pressetsFinded = await Pressets.findByPk(id)

    if (!pressetsFinded) {
      throw new Error('No se encontro el pressets')
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
