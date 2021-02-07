const Product = require('../models/product')
const Category = require('../models/category')
exports.create = async (req, res) => {
  let reqProduct = req.body
  const newProduct = new Product(reqProduct)
  await newProduct.save()
  res.send(newProduct)
}

exports.product = async (req, res) => {
  if (req.query.id == null) {
    Product.find().then(
      items => {
        res.send(items)
      },
      error => {
        res.status(500).send(error) // server error
      }
    )
  } else {
    if (!ObjectID.isValid(req.query.id)) {
      // check if its a valid object id
      res.status(404).send()
      return
    }
    const query = { _id: req.query.id }
    Product.findOne(query)
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
