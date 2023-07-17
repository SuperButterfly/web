const { Component } = require('../database.js')

const createComplex = async (data, componentTarget) => {
  try {
    const newComponent = await Component.create(data)
    await componentTarget.addChildren(newComponent)
    if (data.children && data.children.length > 0) {
      for (const child of data.children) {
        await createComplex(child, newComponent)
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = createComplex
