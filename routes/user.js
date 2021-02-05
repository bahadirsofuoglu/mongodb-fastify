const user = require('../controllers/user.js')

module.exports = async fastify => {
  fastify.post('/auth/login', user.profile)
  fastify.post('/auth/signup', user.register)
  fastify.post('/auth/forgotpassword', user.login)
}
