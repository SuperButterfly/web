const Joi = require('joi')

const textValidationSchema = Joi.object({
  name: Joi.string().min(4).max(15).default('newText').required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name cannot be longer than 15 characters.'
  }),
  size: Joi.string().min(1).max(3).default('14').required().messages({
    'string.base': 'size must be a string.',
    'string.empty': 'size is required.',
    'string.min': 'size must be at least 4 characters long.',
    'string.max': 'size cannot be longer than 3 characters.'
  }),
  weigth: Joi.string().min(1).max(6).default('500').required().messages({
    'string.base': 'weigth must be a string.',
    'string.empty': 'weigth is required.',
    'string.min': 'weigth must be at least 1 characters long.',
    'string.max': 'weigth cannot be longer than 6 characters.'
  }),
  fontFamily: Joi.string().min(4).max(30).default('Arial').required().messages({
    'string.base': 'fontFamily must be a string.',
    'string.empty': 'fontFamily is required.',
    'string.min': 'fontFamily must be at least 4 characters long.',
    'string.max': 'fontFamily cannot be longer than 30 characters.'
  }),
  isBold: Joi.boolean().default(false).required(),
  isItalic: Joi.boolean().default(false).required(),
  haveUnderline: Joi.boolean().default(false).required(),
  haveMidline: Joi.boolean().default(false).required(),
  ProjectId: Joi.string().required(),
  presetId: Joi.string().required(),
  isDeleted: Joi.boolean().default(false)
})

const textValidationMiddleware = (req, res, next) => {
  const { error } = textValidationSchema.validate(req.body, {
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

module.exports = textValidationMiddleware
