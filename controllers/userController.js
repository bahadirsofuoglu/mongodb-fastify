const User = require('../models/user')
exports.create = async (req, res) => {
  /* Example Request Body
   *  {
   *      name: "mongoose",
   *      email: "mongoose@mongodb.com",
   *  }
   */

  const user = new User(req.body)
  const result = await user.save()
  res.send(result)
}
