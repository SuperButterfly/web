const Joi = require('joi')

const colorValidationSchema = Joi.object({
  name: Joi.string().min(4).max(10).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name cannot be longer than 10 characters.'
  }),
  value: Joi.array()
    .default([
      {
        name: 'Primary',
        types: [
          { value: '#003EB3' },
          { value: '#0074F0' },
          { value: '#14A9FF' },
          { value: '#85DCFF' }
        ]
      },
      {
        name: 'Gray',
        types: [
          { value: '#595959' },
          { value: '#999999' },
          { value: '#D9D9D9' }
        ]
      },
      {
        name: 'Success',
        types: [
          { value: '#199033' },
          { value: '#32A94C' },
          { value: '#4CC366' }
        ]
      },
      {
        name: 'Danger',
        types: [
          { value: '#A22020' },
          { value: '#BF2626' },
          { value: '#E14747' }
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

const colorValidationMiddleware = (req, res, next) => {
  const { error } = colorValidationSchema.validate(req.body, {
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

module.exports = colorValidationMiddleware
