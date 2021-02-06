const productController = require('../controllers/productController')

module.exports = async fastify => {
  fastify.post('/products/create', productController.create)
}
