const { User } = require('../models/user')
const { Transaction } = require('../models/transaction')

exports.create = async (req, res) => {
  const { product, paymentData, user_id } = req.body
  const transactionData = {
    email: paymentData.email,
    data: paymentData,
    product: product
  }
  // Update user purchase history
  User.findByIdAndUpdate(
    user_id,
    {
      $push: {
        history: [
          {
            paymentId: paymentData.paymentID,
            dateOfPurchase: Date.now(),
            item: product
          }
        ]
      }
    },
    { new: true },
    err => {
      if (err) return res.send({ success: false, err })
    }
  )
  const payment = new Transaction(transactionData)
  payment.save().then(
    result => {
      res.send(result)
    },
    error => {
      res.status(400).send(error) // 400 for bad request
    }
  )
}
