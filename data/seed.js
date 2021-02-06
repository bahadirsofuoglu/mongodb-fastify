var seeder = require('mongoose-seed')
require('dotenv').config()
// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGO_URI, function () {
  // Load Mongoose models
  seeder.loadModels(['models/product'])

  // Clear specified collections
  seeder.clearModels(['product'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'product',
    documents: [
      {
        name: 'bahadir',
        category: 'fashion',
        description: 'adsfasd',
        price: '300'
      }
    ]
  }
]
