const Joi = require('joi')

// Define el esquema de validación para el registro de CssClass con mensajes de error personalizados
const cssClassSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'CssClass name is required.'
  }),
  style: Joi.object().default({
    desktop: {
      active: true,
      attribute: {}
    },
    mobile: {
      active: true,
      attribute: {}
    },
    mobileLandscape: {
      active: true,
      attribute: {}
    },
    tablet: {
      active: true,
      attribute: {}
    },
    laptop: {
      active: true,
      attribute: {}
    },
    wide: {
      active: true,
      attribute: {}
    }
  }),
  userToolId: Joi.string().required().messages({
    'string.empty': 'CssClass userId is required.'
  })
}).options({ abortEarly: false }) // Permite mostrar todos los mensajes de error, no solo el primero

// Middleware de validación para el registro de CssClass
function validateCssClass(req, res, next) {
  const { error, value } = cssClassSchema.validate(req.body, {
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

module.exports = validateCssClass
