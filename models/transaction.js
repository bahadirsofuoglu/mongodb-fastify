const mongoose = require('mongoose')
const transactionSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
    product: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Transaction', transactionSchema)
