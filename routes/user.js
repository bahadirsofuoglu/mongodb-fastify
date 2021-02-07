const userController = require('../controllers/userController')

module.exports = async fastify => {
  fastify.post('/users/create', userController.create)
  fastify.get('/users/:id', userController.user)
  fastify.put('/users/:id', userController.put)
  fastify.delete('/users/:id', userController.delete)
}
