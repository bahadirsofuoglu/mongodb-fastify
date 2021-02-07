const productController = require('../controllers/productController')

module.exports = async fastify => {
  fastify.get('/products/:id', productController.product)
  fastify.post('/products/create', productController.create)
}
