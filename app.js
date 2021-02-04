const fastify = require('fastify')({
  logger: true
})
require('dotenv').config()
const AutoLoad = require('fastify-autoload')
const formBody = require('fastify-formbody')
const cors = require('fastify-cors')
const path = require('path')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
fastify.register(formBody)
fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes')
})
fastify.register(cors, {
  origin: true
})
;async (req, res, next) => {
  if (req.headers['x-access-token']) {
    try {
      const accessToken = req.headers['x-access-token']
      const { userId, exp } = await jwt.verify(
        accessToken,
        process.env.JWT_SECRET
      )
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: 'JWT token has expired, please login to obtain a new one'
        })
      }
      res.locals.loggedInUser = await User.findById(userId)
      next()
    } catch (error) {
      next(error)
    }
  } else {
    next()
  }
}
// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
