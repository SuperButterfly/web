const axios = require('axios')
const path = require('path')
const ACCESS_KEY = 'GizofLYquxqsuyHn73T5AGNsNIq4YEvjlmqVUZLWKKo'
// const { Template, Folder, Asset } = require("../database.js");
// const cloudinary = require("../utils/cloudinary.js");
const { readdirSync, readFileSync } = require('fs')

/*
        UNSPLASH
*/

const getPhotos = async (req, res, next) => {
  const { word, page, quality } = req.query
  try {
    const num = page || 1
    const size = quality || 'thumb'
    let URL = ''
    if (word) {
      URL = `https://api.unsplash.com/search/photos/?page=${num}&query=${word}&client_id=${ACCESS_KEY}`
    } else {
      URL = `https://api.unsplash.com/photos/?page=${num}&client_id=${ACCESS_KEY}`
    }
    const { data } = await axios(URL)
    if (!data) {
      throw new Error('Error getting photos')
    }
    if (!word) {
      const photos = data.map((item) => {
        return { url: item.urls.thumb, id: item.id }
      })
      res.json({ photos })
    } else {
      const photos = data.results.map((item) => {
        return { url: item.urls[size], id: item.id }
      })
      res.json({ totalPages: data.total_pages, photos })
    }
  } catch (error) {
    next(error)
  }
}

const getPhoto = async (req, res, next) => {
  let { quality } = req.query
  if (!quality) quality = 'thumb'
  try {
    const { data } = await axios(
      `https://api.unsplash.com/photos/${req.params.id}?client_id=${ACCESS_KEY}`
    )
    if (!data) {
      throw new Error('Error getting photos')
    }
    const photo = { url: data.urls[quality], id: data.id }
    res.json({ photo })
  } catch (error) {
    next(error)
  }
}

const getIcons = (req, res, next) => {
  try {
    let { source, search, page } = req.query
    const isSearch = search == null || search === ''
    let dir = __dirname
    dir = dir.slice(0, dir.length - 11)
    dir += 'icons/'
    const rootDir = path.resolve(__dirname, '../..')
    const dirs = {
      feather: path.join(rootDir, 'icons', 'feather'),
      fontawesome: path.join(rootDir, 'icons', 'fontawesome'),
      IcoMoon: path.join(rootDir, 'icons', 'IcoMoon'),
      materialIcons: path.join(rootDir, 'icons', 'materialIcons'),
      typicons: path.join(rootDir, 'icons', 'typicons')
    }

    let result = []
    if (source !== null && source !== undefined) {
      const from = dirs[source] !== undefined ? dirs[source] : dirs.feather
      const aux = getSourceIcon(from, isSearch, search)
      result = [...aux]
    } else {
      let aux = getSourceIcon(dirs.feather, isSearch, search)
      result = [...aux]
      aux = getSourceIcon(dirs.fontawesome, isSearch, search)
      result = [...result, ...aux]
      aux = getSourceIcon(dirs.IcoMoon, isSearch, search)
      result = [...result, ...aux]
      aux = getSourceIcon(dirs.materialIcons, isSearch, search)
      result = [...result, ...aux]
      aux = getSourceIcon(dirs.typicons, isSearch, search)
      result = [...result, ...aux]
    }

    page = parseInt(page)
    page = page === null || page === undefined || page < 0 ? 0 : page
    page = result.length - 1 <= page ? result.length - 1 : page
    const svgs = result.slice(page, page + 19)
    res.send({ count: result.length, svgs })
  } catch (error) {
    next(error)
  }
}

const getSourceIcon = (dir, isSearch, search) => {
  const files = readdirSync(dir).filter(
    (file) => isSearch || file.includes(search.toLowerCase())
  )
  return files.map((p, idx) => {
    const data = readFileSync(dir + '/' + p).toString()
    const name = p.split('.')[0]
    return { name, data }
  })
}

module.exports = {
  getPhotos,
  getPhoto,
  getIcons
}
