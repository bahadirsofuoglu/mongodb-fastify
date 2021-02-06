const User = require('../models/User')
const bcrypt = require('bcryptjs')

const config = require('config')
exports.signup = async (req, res) => {
  const { firstname, lastname, role, email, password } = req.body
  try {
    let user = await User.findOne({
      email
    })
    if (user) {
      return res.status(400).send({
        msg: 'User Already Exists'
      })
    }

    user = new User({
      firstname,
      lastname,
      role,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

    const id = user.id

    const jwtExpiry = config.get('app.userJwtExpiry')
    const token = await res.jwtSign(
      { id, role },
      {
        expiresIn: jwtExpiry
      }
    )

    return res.send({
      token,
      user: { id, role, firstname, lastname, email }
    })
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Error in Saving')
  }
}
