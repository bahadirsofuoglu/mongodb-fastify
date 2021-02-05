const mongoose = require('mongoose')

const UserToken = mongoose.model(
  'UserToken',
  new mongoose.Schema({
    token: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
)

module.exports = UserToken
