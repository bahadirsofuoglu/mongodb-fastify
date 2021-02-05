const { authJwt } = require('../middlewares')
const controller = require('../controllers/user')
const verifyToken = authJwt.verifyToken
const isMod = authJwt.isModerator
const isAdmin = authJwt.isAdmin
module.exports = async fastify => {
  /*   fastify.get(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  }) */
  fastify.get('/api/test/all', controller.allAccess)

  fastify.get('/api/test/user', { verifyToken }, controller.userBoard)

  fastify.get(
    '/api/test/mod',
    { verifyToken, isMod },
    controller.moderatorBoard
  )

  fastify.get(
    '/api/test/admin',
    { verifyToken, isAdmin },
    controller.adminBoard
  )
}
