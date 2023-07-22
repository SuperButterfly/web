const Joi = require('joi')

const presetValidationSchema = Joi.object({
  name: Joi.string().min(4).max(10).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name cannot be longer than 10 characters.'
  }),
  ProjectId: Joi.string().required(),
  isDeleted: Joi.boolean().default(false)
})

const presetValidationMiddleware = (req, res, next) => {
  const { error } = presetValidationSchema.validate(req.body, {
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

module.exports = presetValidationMiddleware
