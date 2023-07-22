const Joi = require('joi')

// Define el esquema de validación para el registro de Datatable con mensajes de error personalizados
const datatableSchema = Joi.object({
  row: Joi.object()
    .default({
      example: ['example', 'example2']
    })
    .messages({
      'object.base': 'Row must be a valid JSON object.'
    }),
  workSpaceId: Joi.string().required().messages({
    'string.empty': 'WorkspaceId is required.'
  })
}).options({ abortEarly: false }) // Permite mostrar todos los mensajes de error, no solo el primero

// Middleware de validación para el registro de Datatable
function validateDatatable(req, res, next) {
  const { error, value } = datatableSchema.validate(req.body, {
    presence: 'required'
  })
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(' ')
    return res.status(400).json({ error: errorMessage })
  }

  // Asignar los valores actualizados a req.body
  req.body = value
  next()
}

module.exports = validateDatatable
