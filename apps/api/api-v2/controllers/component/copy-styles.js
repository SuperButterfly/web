const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const copyStyles = async(req,res)=>{
    const { id } = req.body

    const componentFinded = await models.ComponentModel.findByPk(id, {
      include: [
        {
          model: models.PropertyModel, // Nombre del modelo "Property"
          as: 'property', // Nombre de la asociación definida en el modelo ComponentModel
        },
      ],
    })
  
    if (!componentFinded) throw new ClientError('Error not found component', 400)
  
    if (!componentFinded.property || !componentFinded.property.styles) throw new ClientError('Error: Property styles not found', 400)
          
    const stylesToCopy = componentFinded.property.styles 
    
    response(res, 200, stylesToCopy)
}


module.exports = { copyStyles: catchedAsync(copyStyles) }