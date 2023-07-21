const Joi = require('joi')

const layaoutValidationSchema = Joi.object({
  name: Joi.string().min(4).max(15).default('newLayaout').required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name cannot be longer than 10 characters.'
  }),
  value: Joi.array()
    .default([
      {
        name: 'Size',
        types: [
          { name: 'XS', size: '16px' },
          { name: 'SM', size: '48px' },
          { name: 'MD', size: '96px' },
          { name: 'LG', size: '144px' },
          { name: 'XL', size: '192px' },
          { name: 'XXL', size: '288px' },
          { name: 'MAX', size: '1400px' }
        ]
      },
      {
        name: 'Space',
        types: [
          { name: 'Half', size: '8px' },
          { name: 'One', size: '16px' },
          { name: 'One and half', size: '24px' },
          { name: 'Two', size: '32px' },
          { name: 'Three', size: '48px' },
          { name: 'Four', size: '64px' },
          { name: 'Five', size: '80px' },
          { name: 'Six', size: '96px' }
        ]
      },
      {
        name: 'Radius',
        types: [
          { name: 'Three', size: '2px' },
          { name: 'Four', size: '4px' },
          { name: 'Five', size: '8px' },
          { name: 'Six', size: '100px' }
        ]
      }
    ])
    .required()
    .messages({
      'array.base': 'Value must be a array.',
      'array.empty': 'Value is required.'
    }),
  ProjectId: Joi.string().required(),
  presetId: Joi.string().required(),
  isDeleted: Joi.boolean().default(false)
})

const layaoutValidationMiddleware = (req, res, next) => {
  const { error } = layaoutValidationSchema.validate(req.body, {
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

module.exports = layaoutValidationMiddleware
