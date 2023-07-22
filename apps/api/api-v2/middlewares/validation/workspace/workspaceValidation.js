const Joi = require('joi')

// Define el esquema de validación para el registro de Workspace con mensajes de error personalizados
const workspaceSchema = Joi.object({
  name: Joi.string().min(5).default('New Workspace').allow(null, '').messages({
    'string.min': 'Workspace name must be at least 5 characters long.'
  }),
  description: Joi.string()
    .min(11)
    .default('New Description')
    .allow(null, '')
    .messages({
      'string.min': 'Workspace description must be at least 11 characters long.'
    }),
  role: Joi.string().default('owner').required().messages({
    'string.empty': 'Workspace role is required.'
  }),
  userToolId: Joi.string().required().messages({
    'string.empty': 'Workspace userToolId is required.'
  })
}).options({ abortEarly: false }) // Permite mostrar todos los mensajes de error, no solo el primero

// Middleware de validación para el registro de Workspace
function validateWorkspace(req, res, next) {
  const { error, value } = workspaceSchema.validate(req.body)
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(' ')
    return res.status(400).json({ error: errorMessage })
  }

  // Aplicar los valores predeterminados solo si los campos son nulos
  if (value.name === null) value.name = 'New Workspace'
  if (value.description === null) value.description = 'New Description'

  // Asignar los valores actualizados a req.body
  req.body = value
  next()
}

module.exports = validateWorkspace
