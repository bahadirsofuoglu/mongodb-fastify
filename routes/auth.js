/* const { validatePostLogin, validatePostSignup } = require('../validations/auth') */
const authController = require('../controllers/authController')

module.exports = async fastify => {
  fastify.post('/auth/signup', authController.signup)
  fastify.post('/auth/login', authController.login)
}
