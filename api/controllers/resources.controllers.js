const axios = require("axios");
const ACCESS_KEY = 'GizofLYquxqsuyHn73T5AGNsNIq4YEvjlmqVUZLWKKo';
const {
  Template,
  Folder,
  Asset
} = require("../database.js");
const cloudinary = require('../utils/cloudinary.js');
const { readdirSync, readFileSync } = require('fs');

/*          
        UNSPLASH
*/
const getPhotos = async (req, res, next) => {
  const { word, page, quality } = req.query;
  try {
    const num = page ? page : 1;
    const size = quality ? quality : 'thumb';
    let URL = '';
    if (word) {
      URL = `https://api.unsplash.com/search/photos/?page=${num}&query=${word}&client_id=${ACCESS_KEY}`
    }
    else URL = `https://api.unsplash.com/photos/?page=${num}&client_id=${ACCESS_KEY}`
    const { data } = await axios(URL);
    if (!data) {
      throw new Error('Error getting photos');
    }
    if (!word) {
      const photos = data.map(item => {
        return { url: item.urls.thumb, id: item.id };
      });
      res.json({ photos });
    }
    else {
      const photos = data.results.map(item => {
        return { url: item.urls[size], id: item.id };
      });
      res.json({ totalPages: data.total_pages, photos });
    }
  }
  catch (error) {
    next(error);
  }
};

const getPhoto = async (req, res, next) => {
  let { quality } = req.query;
  if (!quality) quality = 'thumb';
  try {
    const { data } = await axios(`https://api.unsplash.com/photos/${req.params.id}?client_id=${ACCESS_KEY}`);
    if (!data) {
      throw new Error('Error getting photos');
    }
    const photo = { url: data.urls[quality], id: data.id };
    res.json({ photo });
  }
  catch (error) {
    next(error);
  }
};

const addAsset = async (req, res, next) => {
  const { quality } = req.query;
  try {
    const { data } = await axios();
    if (!data) {
      throw new Error('Error getting photos');
    }
    const photo = { url: data.urls[quality], id: data.id };
    res.json({ photo });
  }
  catch (error) {
    next(error);
  }
};

/*          
        FOLDERS AND ASSETS
*/

const uploadAsset = async (req, res, next) => {
  const { folderName } = req.params;
  try {
    const folderFound = await Folder.findOne({
      where: { folderName }
    });
    if (!folderFound) throw new Error('Folder not found');
    // SUBIR IMAGEN
    const pathFile = req.files.asset.tempFilePath;
    let key = req.files.asset.name;
    key = key.split('.')[0];
    const { url } = await cloudinary.uploader.upload(pathFile, { public_id: key })

    // GUARDAR ASSET
    const newAsset = await Asset.create({ assetUrl: url })
    // AGREGAR ASSET A FOLDER
    await folderFound.addImg(newAsset);
    res.send('Image saved ok');
  }
  catch (error) {
    next(error);
  }
};

const createFolder = async (req, res, next) => {
  const { templateId } = req.params;
  const { folderName } = req.body;
  try {
    const templateFound = await Template.findByPk(templateId);
    const newFolder = await Folder.create({ folderName });
    await templateFound.addImages(newFolder);
    res.send('Folder created');
  }
  catch (error) {
    next(error);
  }
};

const addFolderToFolder = async (req, res, next) => {
  const { folderName } = req.params;
  const subfolderName = req.body.folderName;
  try {
    const folderFound = await Folder.findOne({ where: { folderName } });
    if (!folderFound) throw new Error('Folder not found');
    const newFolder = await Folder.create({ folderName: subfolderName });
    await folderFound.addSubfolder(newFolder);
    res.send('Folder created');
  }
  catch (error) {
    next(error);
  }
};

const updateFolder = async (req, res, next) => {
  const { folderName } = req.params;
  const { newFolderName } = req.body;
  try {
    const folderUpdated = await Folder.update({
      folderName: newFolderName
    }, {
      where: { folderName }
    });
    if (!folderUpdated) throw new Error('Folder not found');
    res.send('Folder updated');
  }
  catch (error) {
    next(error);
  }
};

const deleteFolder = async (req, res, next) => {
  const { folderName } = req.params;
  try {
    const folderDeleted = await Folder.update({
      isDeleted: true
    }, {
      where: { folderName }
    });
    if (!folderDeleted) throw new Error('Folder not found');
    res.send('Folder deleted ok');
  }
  catch (error) {
    next(error);
  }
};

const getIcons = (req, res, next) => {
  try {
    let { source, search, page } = req.query;
    const isSearch = search == null || search == ''
    let dir = __dirname
    dir = dir.slice(0, dir.length - 11)
    dir += 'icons/'
    const dirs = {
      feather: dir + 'feather',
      fontawesome: dir + 'fontawesome',
      IcoMoon: dir + 'IcoMoon',
      materialIcons: dir + 'materialIcons',
      typicons: dir + 'typicons',
    };

    let result = [];
    if (source !== null && source !== undefined) {
      const from = dirs[source] !== undefined ? dirs[source] : dirs.feather;
      const aux = getSourceIcon(from, isSearch, search);
      result = [ ...aux ];
    }
    else {
      let aux = getSourceIcon(dirs.feather, isSearch, search);
      result = [...aux];
      aux = getSourceIcon(dirs.fontawesome, isSearch, search);
      result = [...result, ...aux];
      aux = getSourceIcon(dirs.IcoMoon, isSearch, search);
      result = [...result, ...aux];
      aux = getSourceIcon(dirs.materialIcons, isSearch, search);
      result = [...result, ...aux];
      aux = getSourceIcon(dirs.typicons, isSearch, search);
      result = [...result, ...aux];
    }
    
    page = parseInt(page);
    page = page === null || page === undefined || page < 0? 0 : page;
    page = result.length - 1 <= page ? result.length - 1 : page;
    const svgs = result.slice(page, page + 19);
    res.send({ count: result.length, svgs });
  }
  catch (error) {
    next(error);
  }
};

const getSourceIcon = (dir, isSearch, search) => {
  const files = readdirSync(dir).filter(file => isSearch || file.includes(search.toLowerCase()));
  return files.map((p, idx) => {
      const data = (readFileSync(dir + '/' + p)).toString();
      const name = p.split('.')[0];
      return { name, data };
    });
};

module.exports = {
  getPhotos,
  getPhoto,
  addAsset,
  uploadAsset,
  createFolder,
  updateFolder,
  deleteFolder,
  addFolderToFolder,
  getIcons
};
