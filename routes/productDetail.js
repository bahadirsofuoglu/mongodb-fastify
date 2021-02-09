const productDetailController = require('../controllers/productDetailController')

module.exports = async fastify => {
  fastify.post('/productDetails', productDetailController.create)
  fastify.get('/productDetails/:id', productDetailController.productDetail)
}
