const fastify = require('fastify')({
  logger: true
})
require('dotenv').config()
const AutoLoad = require('fastify-autoload')
const formBody = require('fastify-formbody')
const cors = require('fastify-cors')
const path = require('path')
const mongoose = require('mongoose')
const jsonwebtoken = require('jsonwebtoken')
const db = require('./models')
const Role = db.role
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

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.')
    initial()
  })
  .catch(err => {
    console.error('Connection error', err)
    process.exit()
  })
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
function initial () {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user'
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: 'moderator'
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'moderator' to roles collection")
      })

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}
