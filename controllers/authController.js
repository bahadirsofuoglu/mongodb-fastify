const db = require('../models')
const config = require('config')
const {
  INVALID_PASSWORD,
  USER_DOESNT_EXISTS,
  USER_EXISTS,
  USER_EXISTS_AND_ACTIVE,
  RESET_PASSWORD_TOKEN_EXPIRED,
  USER_IS_NOT_ACTIVE,
  TOKEN_EXPIRED
} = require('../data/errors')
exports.signup = async (req, res) => {
  const { token, password } = req.body

  const userToken = await db.userToken.findOne({
    token
  })
  /*   if (!userToken) {
    throw new ApiError(USER_DOESNT_EXISTS)
  } */

  const userTokenExpiryInSeconds = config.get('app.userTokenExpiryInSeconds')

  /*  if (isExpired(userToken.createdAt, userTokenExpiryInSeconds)) {
    throw new ApiError(TOKEN_EXPIRED)
  } */
  const existingUser = await db.user.findOne({
    id: userToken.userId
  })
  /*   if (!existingUser) {
    throw new ApiError(USER_DOESNT_EXISTS)
  } */
  existingUser.password = password
  await existingUser.save()
  res.send(existingUser)
}

/* exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err })
            return
          }

          user.roles = roles.map(role => role._id)
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err })
              return
            }

            res.send({ message: 'User was registered successfully!' })
          })
        }
      )
    } else {
      Role.findOne({ name: 'user' }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        user.roles = [role._id]
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err })
            return
          }

          res.send({ message: 'User was registered successfully!' })
        })
      })
    }
  })
}

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return
      }

      if (!user) {
        return res.status(404).send({ message: 'User Not found.' })
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        })
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      })

      var authorities = []

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase())
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      })
    })
} */
