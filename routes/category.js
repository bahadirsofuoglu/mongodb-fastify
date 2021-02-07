const categoryController = require('../controllers/categoryController')

module.exports = async fastify => {
  fastify.get('/categories/:id', categoryController.category)
  fastify.post('/categories/create', categoryController.create)
}
