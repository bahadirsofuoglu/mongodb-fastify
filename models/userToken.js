const mongoose = require('mongoose')

const UserToken = mongoose.model(
  'User',
  new mongoose.Schema({
    token: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
)

module.exports = User
