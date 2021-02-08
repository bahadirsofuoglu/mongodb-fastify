const mongoose = require('mongoose')
const Product = require('./product')
const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  history: {
    type: [Product.schema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// export model user with UserSchema
module.exports = mongoose.model('user', UserSchema)
