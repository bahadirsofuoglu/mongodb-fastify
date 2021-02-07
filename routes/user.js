const userController = require('../controllers/userController')

module.exports = async fastify => {
  fastify.post('/users/create', userController.create)
}
