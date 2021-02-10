const Product = require('../models/product')
const { ObjectID } = require('mongoose')

exports.create = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new Product(reqProduct)
  await newProduct.save()
  res.send(newProduct)
}

exports.products = async (req, res) => {
  if (req.query.id == null) {
    Product.find().then(
      items => {
        res.send(items)
      },
      error => {
        res.status(500).send(error) // server error
      }
    )
  }
  const query = { category: req.query.category }
  Product.find(query)
    .populate('category')
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
exports.product = async (req, res) => {
  const id = req.params.id

  const response = await Product.findOne({ _id: id }).populate('category')
  res.send(response)
}

exports.put = async (req, res) => {
  const id = req.body._id
  if (!ObjectID.isValid(id)) {
    res.status(404).send()
    return
  }
  Product.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.json({ success: true, doc })
  })
}

exports.delete = async (req, res) => {
  const id = req.params.id
  if (!ObjectID.isValid(id)) {
    res.status(404).send()
    return
  }
  Product.findByIdAndRemove(id)
    .then(product => {
      if (!product) {
        res.status(404).send()
      } else {
        res.send(product)
      }
    })
    .catch(error => {
      res.status(500).send() // server error, could not delete.
    })
}
