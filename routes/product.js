const productController = require('../controllers/productController')

module.exports = async fastify => {
  fastify.post('/product/create', productController.create)
}
