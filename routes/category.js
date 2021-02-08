const categoryController = require('../controllers/categoryController')

module.exports = async fastify => {
  fastify.get('/categories/:id', categoryController.category)
  fastify.post('/categories', categoryController.create)
  fastify.get('/categories', categoryController.categories)
}
