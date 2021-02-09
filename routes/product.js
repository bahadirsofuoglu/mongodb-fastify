const productController = require('../controllers/productController')

module.exports = async fastify => {
  fastify.post('/products', productController.create)
  fastify.get('/products/:id', productController.product)
  fastify.put('/products/:id', productController.put)
  fastify.delete('/products/:id', productController.delete)
}
