const { writeFileSync } = require('fs')
const downProject = require('./download.js')
const unpack = require('./unpack.js')
const getcss = require('./getcss.js')
const scrap = require('./scrap.js')

const makeJsons = async (name) => {
  const componentsNames = {}
  const properties = {}

  try {
    const file = name + '-react.zip'
    const [unpackedSources, files] = await unpack(file)
    for (const file of files) {
      const key = file.toUpperCase()
      componentsNames[key] = file
    }
    unpackedSources.components.css.forEach(({ name, data }) => {
      properties[name] = getcss(data)
    })

    unpackedSources.pages.css.forEach(({ name, data }) => {
      properties[name] = getcss(data)
    })

    let projectpath = __dirname
    projectpath = projectpath.slice(0, projectpath.length - 17)
    projectpath += 'project/'
    unpackedSources.components.src.forEach(({ name, data }) => {
      const aux = scrap(data, name, componentsNames, properties[name])
      aux.name = name
      writeFileSync(
        projectpath + `/components/${name}.json`,
        JSON.stringify(aux)
      )
    })

    unpackedSources.pages.src.forEach(({ name, data }) => {
      const aux = scrap(data, name, componentsNames, properties[name])
      aux.children.shift()
      aux.name = name
      writeFileSync(projectpath + `/pages/${name}.json`, JSON.stringify(aux))
    })

    return 'ok'
  } catch (error) {
    return error.message
  }
}

module.exports = makeJsons
