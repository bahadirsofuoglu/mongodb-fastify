const productDetailController = require('../controllers/productDetailController')

module.exports = async fastify => {
  fastify.post('/productDetails', productDetailController.create)
  fastify.get('/productDetails', productDetailController.productDetails)
  fastify.get('/productDetails/:id', productDetailController.productDetail)
}
