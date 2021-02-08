const transactionController = require('../controllers/transactionController')

module.exports = async fastify => {
  fastify.post('/transactions', transactionController.create)
}
