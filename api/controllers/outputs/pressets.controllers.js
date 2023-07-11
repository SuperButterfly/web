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
    res.status(200).json(allPressets)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener todos los Pressets', error })
  }
}

const getConfigById = async (req, res, next) => {
  const { id } = req.params

  try {
    const pressetsFinded = await Pressets.findByPk(id)

    if (!pressetsFinded) {
      throw new Error('No se encontro el pressets')
    } else {
      res.status(200).json({ pressetsFinded })
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener el Pressets por ID', error })
  }
}

const getAllConfigDefaults = async (req, res, next) => {
  //Esta funcion debe de ser dinamica, y filtrar en base a las query que se pasen, como por ejemplo las de Default
  try {
    const allPressets = await Pressets.findAll()
    const defaultsFiltered = allPressets.filter(
      (presset) =>
        presset.color.hasOwnProperty('defaults') &&
        presset.layout.hasOwnProperty('defaults') &&
        presset.text.hasOwnProperty('defaults')
    )
    res.status(200).json(defaultsFiltered)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener todos los Pressets', error })
  }
}

const getAllConfigNotDefaults = async (req, res, next) => {
  //Esta funcion debe de ser dinamica, y filtrar en base a las query que se pasen, como por ejemplo las de Default
  try {
    const allPressets = await Pressets.findAll()
    const defaultsFiltered = allPressets.filter(
      (presset) =>
        presset.color.hasOwnProperty('notDefaults') &&
        presset.layout.hasOwnProperty('notDefaults') &&
        presset.text.hasOwnProperty('notDefaults')
    )
    res.status(200).json(defaultsFiltered)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error al obtener todos los Pressets', error })
  }
}

module.exports = {
  getAllConfig,
  getAllConfigDefaults,
  getAllConfigNotDefaults,
  getConfigById
}
