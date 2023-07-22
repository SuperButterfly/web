const Joi = require('joi')

const notificationValidationSchema = Joi.object({
  message: Joi.string().min(5).max(50).required().messages({
    'string.base': 'message must be a string.',
    'string.empty': 'message is required.',
    'string.min': 'message must be at least 4 characters long.',
    'string.max': 'message cannot be longer than 50 characters.'
  }),
  userToolId: Joi.string().messages({
    'string.base': 'userId must be a string.'
  })
})

const validateNotificationMiddleware = (req, res, next) => {
  const { error } = notificationValidationSchema.validate(req.body, {
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

module.exports = validateNotificationMiddleware
