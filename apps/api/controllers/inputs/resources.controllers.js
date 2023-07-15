const axios = require('axios')
const { Template, Folder, Asset } = require('../../database.js')
const cloudinary = require('../../utils/cloudinary.js')

const addAsset = async (req, res, next) => {
  const { quality } = req.query
  try {
    const { data } = await axios()
    if (!data) {
      throw new Error('Error getting photos')
    }
    const photo = { url: data.urls[quality], id: data.id }
    res.json({ photo })
  } catch (error) {
    next(error)
  }
}

/*
        FOLDERS AND ASSETS
*/

const uploadAsset = async (req, res, next) => {
  const { folderName } = req.params
  try {
    const folderFound = await Folder.findOne({
      where: { folderName }
    })
    if (!folderFound) throw new Error('Folder not found')
    // SUBIR IMAGEN
    const pathFile = req.files.asset.tempFilePath
    let key = req.files.asset.name
    key = key.split('.')[0]
    const { url } = await cloudinary.uploader.upload(pathFile, {
      public_id: key
    })

    // GUARDAR ASSET
    const newAsset = await Asset.create({ assetUrl: url })
    // AGREGAR ASSET A FOLDER
    await folderFound.addImg(newAsset)
    res.send('Image saved ok')
  } catch (error) {
    next(error)
  }
}

const createFolder = async (req, res, next) => {
  const { templateId } = req.params
  const { folderName } = req.body
  try {
    const templateFound = await Template.findByPk(templateId)
    const newFolder = await Folder.create({ folderName })
    await templateFound.addImages(newFolder)
    res.send('Folder created')
  } catch (error) {
    next(error)
  }
}

const addFolderToFolder = async (req, res, next) => {
  const { folderName } = req.params
  const subfolderName = req.body.folderName
  try {
    const folderFound = await Folder.findOne({ where: { folderName } })
    if (!folderFound) throw new Error('Folder not found')
    const newFolder = await Folder.create({ folderName: subfolderName })
    await folderFound.addSubfolder(newFolder)
    res.send('Folder created')
  } catch (error) {
    next(error)
  }
}

const updateFolder = async (req, res, next) => {
  const { folderName } = req.params
  const { newFolderName } = req.body
  try {
    const folderUpdated = await Folder.update(
      {
        folderName: newFolderName
      },
      {
        where: { folderName }
      }
    )
    if (!folderUpdated) throw new Error('Folder not found')
    res.send('Folder updated')
  } catch (error) {
    next(error)
  }
}

const deleteFolder = async (req, res, next) => {
  const { folderName } = req.params
  try {
    const folderDeleted = await Folder.update(
      {
        isDeleted: true
      },
      {
        where: { folderName }
      }
    )
    if (!folderDeleted) throw new Error('Folder not found')
    res.send('Folder deleted ok')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addAsset,
  uploadAsset,
  createFolder,
  updateFolder,
  deleteFolder,
  addFolderToFolder
}
