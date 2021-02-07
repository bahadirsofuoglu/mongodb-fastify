const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})
const Product = mongoose.model('Product', productSchema)
module.exports = { Product }
