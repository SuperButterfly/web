const Joi = require('joi')

// Define the validation schema for user registration
const userValidationSchema = Joi.object({
  username: Joi.string().min(4).max(30).required().messages({
    'string.base': 'Username must be a string.',
    'string.empty': 'Username is required.',
    'string.min': 'Username must be at least 4 characters long.',
    'string.max': 'Username cannot be longer than 30 characters.'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address.',
    'string.empty': 'Email is required.'
  }),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
    .required()
    .messages({
      'string.base': 'Password must be a string.',
      'string.empty': 'Password is required.',
      'string.pattern.base':
        'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, one special character, and one number.'
    }),
  plan: Joi.string().valid('Free', 'Pro', 'Premium').default('Free').messages({
    'any.only': 'Plan must be Free, Pro, or Premium.'
  }),
  resourceslist: Joi.array().items(Joi.object()).default([]),
  theme: Joi.string().default(''),
  billingDates: Joi.object().default({}),
  isDeleted: Joi.boolean().default(false)
})

// Validation middleware for user registration
const validateUserMiddleware = (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body, {
    abortEarly: false // To show all error messages
  })

  if (error) {
    // Build an object with custom error messages
    const errorMessages = {}
    error.details.forEach((err) => {
      errorMessages[err.context.key] = err.message
    })

    // Respond with a 400 Bad Request error and the custom error messages
    return res.status(400).json({ errors: errorMessages })
  }

  // If validation is successful, continue to the next middleware or route
  next()
}

// Export the validation middleware
module.exports = validateUserMiddleware

module.exports = validateUserMiddleware
