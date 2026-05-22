const userModel = require('../models/userModel');

class userController {
  async index(req, res, next) {
    try {
      const user = await userModel.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new userController();
