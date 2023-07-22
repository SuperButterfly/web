const Joi = require('joi')

const propertiValidationShcema = Joi.object({
  style: Joi.object().default({}).required().messages({
    'object.base': 'Style must be an object.'
  }),
  event: Joi.string().default('').required().messages({
    'string.base': 'Event must be a string.',
    'string.empty': 'Event is required.'
  }),
  state: Joi.object().default({}).required().messages({
    'object.base': 'State must be an object.'
  }),
  other: Joi.object().default({}).required().messages({
    'object.base': 'Other must be an object.'
  }),
  ComponentId: Joi.string().messages({
    'string.base': 'userId must be a string.'
  })
})

const validatePropertieMiddleware = (req, res, next) => {
  const { error } = propertiValidationShcema.validate(req.body, {
    abortEarly: false
  })

  if (error) {
    const errorMessages = {}
    error.details.forEach((err) => {
      errorMessages[err.context.key] = err.message
    })

    return res.status(400).json({ errors: errorMessages })
  }

  next()
}

module.exports = validatePropertieMiddleware
