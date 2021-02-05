const user = require('../controllers/user.js')

module.exports = async fastify => {
  fastify.post('/tasks', {}, user.loginRequired, user.profile)
  fastify.post('/auth/signup', user.register)
  fastify.post('/auth/login', user.login)
}
