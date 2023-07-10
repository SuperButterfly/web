const {
  Template,
  Pressets
  // ColorToken,
  // FontPresset,
  // LayoutToken,
  // ColorPresset
} = require('../../database.js')

const savePressets = require('../../utils/savePressets.js')

const getAllConfig = async (req, res, next) => {
  try {
    const allPressets = await Pressets.findAll()
    res.status(200).json({ allPressets: allPressets })
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener todos los Pressets', error })
  }
}

const getConfigById = async (req, res, next) => {
  const { templateId } = req.body
  const { id } = req.params

  try {
    const pressetsFinded = await Pressets.findOne({
      where: {
        id: id,
        templateId: templateId
      }
    })

    if (!pressetsFinded) {
      throw new Error('No se encontro el pressets')
    } else if (!pressetsFinded.templateId) {
      throw new Error('No se encontro el proyecto asociado')
    } else {
      res.status(200).json({ pressetsFinded })
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener el Pressets por ID', error })
  }
}

module.exports = {
  getAllConfig,
  getConfigById
}
