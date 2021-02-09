var seeder = require('mongoose-seed')
require('dotenv').config()
// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGO_URI, function () {
  // Load Mongoose models
  seeder.loadModels(['models/category'])

  // Clear specified collections
  seeder.clearModels(['category'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})

/* const categoryArray = []
for (let i = 0; i < 50; i++) {
  const object = {
    name: `Test${i}`
  }
  categoryArray.push(object)
} */
// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'category',
    documents: [
      {
        name: 'Bilgisayar'
      },
      {
        name: 'Beyaz Eşya'
      },
      {
        name: 'Telefon'
      },
      {
        name: 'Araba'
      },
      {
        name: 'Kitap'
      },
      {
        name: 'Konsol'
      },
      {
        name: 'Giyim'
      },
      {
        name: 'Mobilya'
      },
      {
        name: 'Aksesuar'
      },
      {
        name: 'Yiyecek'
      }
    ]
  }
]
