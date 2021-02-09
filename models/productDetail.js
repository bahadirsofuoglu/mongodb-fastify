const mongoose = require('mongoose')
const productDetailSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  detailName: {
    type: String,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  }
})
module.exports = mongoose.model('ProductDetail', productDetailSchema)
