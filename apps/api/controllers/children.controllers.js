const { Component } = require('../database.js')
// const { readFile } = require('fs/promises');
const componentsList = require('./toCreate.js')
const { readFrom } = require('../utils/HTMLtoJSON.js')
const createComplex = require('../utils/complexComponents.js')
const simples = [
  'Row',
  'Col',
  'Slot',
  'Text',
  'Heading',
  'Link',
  'Image',
  'Video',
  'Iframe',
  'Lottie',
  'Button',
  'Label',
  'Input',
  'Textarea',
  'Checkbox',
  'Radio',
  'Form'
]

const addSection = async (req, res, next) => {
  const { tag } = req.body
  try {
    res.send({ tag })
  } catch (error) {
    return next(error)
  }
}

const addChildren = async (req, res, next) => {
  const { tag, src } = req.body

  try {
    if (!tag) throw new Error('Missing tag')
    const componentTarget = await Component.findByPk(req.params.componentId)
    if (!componentTarget) throw new Error('component not found')

    if (componentTarget.tag === 'img') {
      const src = componentTarget.attributes.src
      await Component.update(
        {
          tag: 'div',
          properties: {
            style: {
              ...componentTarget.properties.style,
              backgroundImage: `url(${src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }
          }
        },
        {
          where: {
            id: componentTarget.id
          }
        }
      )
    } else if (simples.includes(tag)) {
      const newChildren = await Component.create(componentsList[tag])
      if (src) {
        await Component.update(
          {
            attributes: {
              ...newChildren.attributes,
              src
            }
          },
          {
            where: { id: newChildren.id }
          }
        )
      }

      console.log(newChildren)
      await componentTarget.addChildren(newChildren)
    } else {
      let data = ''
      let dir = __dirname
      dir = dir.slice(0, dir.length - 11)
      if (
        tag.includes('feather') ||
        tag.includes('IcoMoon') ||
        tag.includes('fontawesome') ||
        tag.includes('materialIcons') ||
        tag.includes('typicons')
      ) {
        dir += 'icons/' + tag + '.svg'
        data = await readFrom('dir', dir)
      } else {
        data = require(`../componentsJson/${tag}.json`)
      }
      await createComplex(data, componentTarget)
    }

    const component = await Component.findByPk(componentTarget.id, {
      include: {
        model: Component,
        as: 'children',
        include: {
          model: Component,
          as: 'children',
          include: {
            model: Component,
            as: 'children'
          },
          order: [['order', 'ASC']]
        },
        order: [['order', 'ASC']]
      },
      order: [['order', 'ASC']]
    })

    res.json({ component })
  } catch (error) {
    return next(error)
  }
}

// getChildren  x id  x params
const getChildren = async (req, res, next) => {
  try {
    res.send('get children')

    // const children = await Children.findOne({
    //   where: { id: req.params.id },
    // });
    // res.json({ children });
  } catch (error) {
    return next(error)
  }
}

// getChildrenComponents x componentId x params
const getComponentChildrens = async (req, res, next) => {
  try {
    res.send('get childrens by componentId')
    // const childrens = await Component.findOne({
    //   where: { id: req.params.componentId },
    //   include: {
    //     model: Children,
    //     as: ""
    //   }
    // });
    // res.json({ components: childrens });
  } catch (error) {
    return next(error)
  }
}

// updateChildren  x id  x params
const updateChildren = async (req, res, next) => {
  try {
    res.send('update children')
    // await Children.update(req.body, {
    //   where: {
    //     id: req.params.id
    //   }
    // });
    // const children = await Children.findByPk(req.params.id)
    // res.json({ children });
  } catch (error) {
    return next(error)
  }
}

// eliminar   x id  x params
const deleteChildrenId = async (req, res, next) => {
  try {
    res.send('delete children')
    // const children = await Children.findOne({ where: { id: req.params.id } });

    // children.isDeleted = req.query.setdelete;

    // await children.save();

    // res.json({ children });
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  addSection,
  addChildren,
  getChildren,
  getComponentChildrens,
  updateChildren,
  deleteChildrenId
}
