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
fastify.register(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(' ')[1],
      'RESTFULAPIs',
      function (err, decode) {
        if (err) req.user = undefined
        req.user = decode
        next()
      }
    )
  } else {
    req.user = undefined
    next()
  }
})
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
