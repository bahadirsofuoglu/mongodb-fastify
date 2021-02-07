const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product'
    }
  ]
})

// export model user with UserSchema
module.exports = mongoose.model('category', categorySchema)
