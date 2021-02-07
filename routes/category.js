const categoryController = require('../controllers/categoryController')

module.exports = async fastify => {
  fastify.post('/categories/create', categoryController.create)
}
