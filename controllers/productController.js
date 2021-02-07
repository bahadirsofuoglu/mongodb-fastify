const Product = require('../models/product')
const Category = require('../models/category')
exports.create = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new Product(reqProduct)
  await newProduct.save()
  res.send(newProduct)
}

exports.product = async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id
  }).populate('category')
  res.send(product)
}

exports.products = async (req, res) => {
  const products = await Product.find().populate('category')
  res.send(products)
}
