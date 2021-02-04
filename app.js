const fastify = require('fastify')({
  logger: true
})
require('dotenv').config()
/* const AutoLoad = require('fastify-autoload') */
const formBody = require('fastify-formbody')
const cors = require('fastify-cors')
const path = require('path')
const mongoose = require('mongoose')

fastify.register(formBody)
/* fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes')
}) */
fastify.register(cors, {
  origin: true
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
