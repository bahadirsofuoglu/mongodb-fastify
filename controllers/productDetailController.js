const ProductDetail = require('../models/productDetail')

exports.create = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new ProductDetail(reqProduct)
  await newProduct.save()
  res.send(newProduct)
}

exports.productDetail = async (req, res) => {
  const id = req.params.id
  const response = await ProductDetail.findOne({ _id: id }).populate('product')
  res.send(response)
}

exports.productDetails = async (req, res) => {
  if (req.query.id == null) {
    ProductDetail.find().then(
      items => {
        res.send(items)
      },
      error => {
        res.status(500).send(error) // server error
      }
    )
  }
  const query = { product: req.query.product }
  ProductDetail.find(query)
    .populate('product')
    .then(item => {
      if (!item) {
        res.status(404).send()
      } else {
        res.send(item)
      }
    })
    .catch(error => {
      res.status(500).send() // server error
    })
}
