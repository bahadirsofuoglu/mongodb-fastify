const fastify = require('fastify')({
  logger: true
})
require('dotenv').config()
const AutoLoad = require('fastify-autoload')
const formBody = require('fastify-formbody')
const cors = require('fastify-cors')
const jwt = require('fastify-jwt')
const path = require('path')
const mongoose = require('mongoose')

fastify.register(formBody)
fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes')
})
fastify.register(cors, {
  origin: true
})
fastify.register(jwt, {
  secret: process.env.JWT
})
const authenticate = async request => {
  const auth = await request.jwtVerify()
  request.auth = auth
}

fastify.decorate('authenticate', async function (request) {
  await authenticate(request)
})

fastify.decorate('admin', async function (request) {
  await authenticate(request)
  if (request.auth.role !== 'admin') {
    throw new ApiError(NO_AUTHORIZATION)
  }
})

fastify.decorate('supervisor', async function (request) {
  await authenticate(request)
  const role = request.auth.role
  if (role !== 'supervisor' && role !== 'admin') {
    throw new ApiError(NO_AUTHORIZATION)
  }
})

fastify.decorate('agent', async function (request) {
  await authenticate(request)
  const role = request.auth.role
  if (role !== 'agent' && role !== 'supervisor' && role !== 'admin') {
    throw new ApiError(NO_AUTHORIZATION)
  }
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.')
  })
  .catch(err => {
    console.error('Connection error', err)
    process.exit()
  })
const port = process.env.PORT || 8080
fastify.listen(port, '0.0.0.0', err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
