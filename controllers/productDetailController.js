const ProductDetail = require('../models/productDetail')

exports.create = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new Product(reqProduct)
  await newProduct.save()
  res.send(newProduct)
}

exports.productDetail = async (req, res) => {
  const id = req.params.id
  const response = await Product.findOne(id).populate('product')
  res.send(response)
}
