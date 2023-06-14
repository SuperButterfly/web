const { model, Schema } = require("mongoose");

const rowSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  columns: [{
    type: Schema.Types.ObjectId,
    ref: 'column'
  }]
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model("Row", rowSchema);
