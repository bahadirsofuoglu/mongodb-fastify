const userController = require('../controllers/userController')

module.exports = async fastify => {
  fastify.post('/users', userController.create)
  fastify.get('/users', userController.user)
  fastify.put('/users/:id', userController.put)
  fastify.delete('/users/:id', userController.delete)
}
