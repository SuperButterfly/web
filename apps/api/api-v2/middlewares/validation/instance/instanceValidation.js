const Joi = require('joi')

// Define el esquema de validación para el registro de Instance con mensajes de error personalizados
const instanceSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Instance name is required.'
  }),
  ipAddress: Joi.string().required().messages({
    'string.empty': 'Instance ipAddress is required.'
  }),
  ipId: Joi.string().required().messages({
    'string.empty': 'Instance ipId is required.'
  }),
  volumeId: Joi.string().required().messages({
    'string.empty': 'Instance volumeId is required.'
  }),
  WorkspaceId: Joi.string().required().messages({
    'string.empty': 'WorkspaceId is required.'
  }),
  ProjectId: Joi.string().required().messages({
    'string.empty': 'ProjectId is required.'
  })
}).options({ abortEarly: false }) // Permite mostrar todos los mensajes de error, no solo el primero

// Middleware de validación para el registro de Instance
function validateInstance(req, res, next) {
  const { error, value } = instanceSchema.validate(req.body, {
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

module.exports = validateInstance
