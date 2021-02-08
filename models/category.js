const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

// export model user with UserSchema
module.exports = mongoose.model('category', categorySchema)
