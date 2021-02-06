const Product = require('../models/product')
exports.login = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new Product(reqProduct)
  newProduct.save()
  res.send(newProduct)
}
