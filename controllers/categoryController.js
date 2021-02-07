const Category = require('../models/category')
exports.create = async (req, res) => {
  let category = req.body
  const newCategory = new Category(category)
  newCategory.save()
  res.send(newCategory)
}
