/* const { validatePostLogin, validatePostSignup } = require('../validations/auth') */
const authController = require('../controllers/authController')

module.exports = async fastify => {
  fastify.post('/auth/login', authController.login)
  fastify.post('/auth/signup', authController.signup) // TODO: validatePostSignup
  fastify.post('/auth/forgotpassword', authController.forgotPassword)
  fastify.post('/auth/resetpassword', authController.resetPassword)
}
