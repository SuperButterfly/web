const Joi = require('joi')

const pageValidationSchema = Joi.object({
  name: Joi.string().min(5).max(40).required().messages({
    'string.base': 'Projec Name must be a string.',
    'string.empty': 'Projec Name is required.',
    'string.min': 'Projec Name must be at least 4 characters long.',
    'string.max': 'Projec Name cannot be longer than 30 characters.'
  }),
  userToolId: Joi.string().messages({
    'string.base': 'userId must be a string.'
  }),
  workSpaceId: Joi.string().messages({
    'string.base': 'workSpaceId must be a string.'
  }),
  role: Joi.string()
    .valid('Owner', 'Editor', 'Viewer')
    .default('Owner')
    .messages({
      'any.only': 'Role must be Owener, Editor, or Viewer.'
    })
})

const validatePageMiddleware = (req, res, next) => {
  const { error } = pageValidationSchema.validate(req.body, {
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

module.exports = validatePageMiddleware
