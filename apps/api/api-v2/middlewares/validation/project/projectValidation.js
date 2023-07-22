const Joi = require('joi')

const projectValidationSchema = Joi.object({
  name: Joi.string().min(4).max(30).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name cannot be longer than 30 characters.'
  }),
  role: Joi.string()
    .required()
    .valid('Owner', 'Editor', 'Viewer')
    .default('Viewer')
    .messages({
      'string.base': 'Role must be a string.',
      'string.empty': 'Role is required.',
      'any.only': 'Role must be Owner, Editor, or Viewer.'
    }),
  userToolId: Joi.string(),
  workSpaceId: Joi.string(),
  isDeleted: Joi.boolean().default(false)
})

const projectValidationMiddleware = (req, res, next) => {
  const { error } = projectValidationSchema.validate(req.body, {
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

module.exports = projectValidationMiddleware
