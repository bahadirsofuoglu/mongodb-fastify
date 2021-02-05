const mongoose = require('mongoose')

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: String
  })
)
User.beforeUpdate(instance => {
  if (instance.password) {
    return hashPassword(instance.password).then(hashedPassword => {
      instance.password = hashedPassword
    })
  }
})

User.methods = {
  comparePassword: async (candidatePassword, hashedPassword) => {
    const isMatch = await comparePassword(candidatePassword, hashedPassword)
    return isMatch
  },
  hashPassword: async password => {
    const hashedPassword = await hashPassword(password)
    return hashedPassword
  }
}
module.exports = User
