const { verifySignUp } = require('../middlewares')
const controller = require('../controllers/auth')
const checkdublicate = verifySignUp.checkDuplicateUsernameOrEmail
const checRoles = verifySignUp.checkRolesExisted
module.exports = async fastify => {
  /*  fastify.get(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  }) */
  fastify.post(
    '/api/auth/signup',
    {
      checkdublicate,
      checRoles
    },
    controller.signup
  )

  fastify.post('/api/auth/signin', controller.signin)
}
