const { model, Schema } = require('mongoose')

const columnSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    },
    data: {
      data: Buffer,
      contentType: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Column', columnSchema)
