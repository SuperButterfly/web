const Joi = require('joi')

const componentValidationSchema = Joi.object({
  tag: Joi.string().max(10).required().messages({
    'string.base': 'Tag must be a string.',
    'string.empty': 'Tag is required.',
    'string.max': 'Tag cannot be longer than 10 characters.'
  }),
  order: Joi.number().messages({
    'number.base': 'order must be a number.'
  }),
  attributes: Joi.object().messages({
    'object.base': 'attributes must be a object.'
  }),
  nativeAttributes: Joi.object().messages({
    'object.base': 'nativeAttributes must be a object.'
  }),
  isShow: Joi.bool().default(true).messages({
    'bool.base': 'isShow must be a bool.'
  }),
  pageId: Joi.string().messages({
    'string.base': 'pageId must be a string.'
  }),
  projectId: Joi.string().messages({
    'string.base': 'projectId must be a string.'
  }),
  cssClassId: Joi.string().messages({
    'string.base': 'cssClassId must be a string.'
  }),
  parentId: Joi.string().messages({
    'string.base': 'parentId must be a string.'
  })
})

const validateComponentMiddleware = (req, res, next) => {
  const { error } = componentValidationSchema.validate(req.body, {
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

module.exports = validateComponentMiddleware
