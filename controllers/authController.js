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
  if (!userToken) {
    throw new ApiError(USER_DOESNT_EXISTS)
  }

  const userTokenExpiryInSeconds = config.get('app.userTokenExpiryInSeconds')

  if (isExpired(userToken.createdAt, userTokenExpiryInSeconds)) {
    throw new ApiError(TOKEN_EXPIRED)
  }
  const existingUser = await db.user.findOne({
    id: userToken.userId
  })
  if (!existingUser) {
    throw new ApiError(USER_DOESNT_EXISTS)
  }
  existingUser.password = password
  await existingUser.save()
  res.send(existingUser)
}
