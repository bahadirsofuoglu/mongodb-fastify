const Category = require('../models/category')
exports.create = async (req, res) => {
  let category = req.body
  const newCategory = new Category(category) //sor
  newCategory.save()
  res.send(newCategory)
}
exports.category = async (req, res) => {
  const category = await Category.findOne({
    _id: req.params.id
  }).populate('products')
  res.send(category)
}

exports.categories = async (req, res) => {
  const categories = await Category.find()
  res.send(categories)
}
