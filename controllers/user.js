const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.register = function (req, res) {
  const newUser = new User(req.body)
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      })
    } else {
      user.hash_password = undefined
      return res.send(user)
    }
  })
}

exports.login = function (req, res) {
  User.findOne(
    {
      email: req.body.email
    },
    function (err, user) {
      if (err) throw err
      if (!user || !user.comparePassword(req.body.password)) {
        return res
          .status(401)
          .send({ message: 'Authentication failed. Invalid user or password.' })
      }
      return res.send({
        token: jwt.sign(
          { email: user.email, fullName: user.fullName, _id: user._id },
          'RESTFULAPIs'
        )
      })
    }
  )
}

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next()
  } else {
    return res.status(401).send({ message: 'Unauthorized user!!' })
  }
}
exports.profile = function (req, res, next) {
  if (req.user) {
    res.send(req.user)
    next()
  } else {
    return res.status(401).send({ message: 'Invalid token' })
  }
}
