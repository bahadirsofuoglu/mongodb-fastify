const User = require('../models/user')
exports.create = async (req, res) => {
  const user = new User(req.body)
  const result = await user.save()
  res.send(result)
}
exports.user = async (req, res) => {
  const email = req.query.email
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).send()
      } else {
        res.send(user)
      }
    })
    .catch(error => {
      res.status(500).send() // server error
    })
}
exports.delete = async (req, res) => {
  const query = { _id: req.query.email }
  User.deleteOne(query, (err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.json({ success: true, doc })
  })
}
