const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

// export model user with UserSchema
module.exports = mongoose.model('product', ProductSchema)
