const userModel = require('../models/userModel');

class userController {
  async register(req, res, next) {
    try {
      const {
        _id,
        name,
        email,
        password,
        password,
        phone,
        avatar,
        addresses,
        role,
      } = req.body;

      if (!name || !password || !email) {
        res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
      }

      const userExist = user.findOne({ email });
      if (userExist) {
        res.status(400).json({
          message: 'Email này đã được sử dụng. Vui lòng dùng email khác.',
        });
        return;
      }

      // middleware để hash mật khẩu trước khi lưu vào database
      const HashedPassword = user.pre('save', async function () {
        if (!this.isModified('password')) {
          return;
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      });

      const NewUser = new userModel.create({
        _id,
        name,
        email,
        password: HashedPassword,
        phone,
        avatar,
        addresses,
        role,
      });

      if (NewUser) {
        res.status(201).json({
          _id: NewUser._id,
          name: NewUser.name,
          email: NewUser.email,
          passwordL: NewUser.password,
          role: NewUser.role,
          avatar: NewUser.avatar,
          address: NewUser.address,
        });
      } else {
        res.status(400).json({ message: 'Dữ liệu người dùng không hợp lệ.' });
      }

      await user.save();
      res.status(201).json({ messgage: 'create user successfully', user });
    } catch (error) {
      res.status(400).json({ message: 'can not create user', error });
    }
  }

  async index(req, res, next) {
    try {
      const user = await userModel.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await userModel.findOne({ name, email, password });
    } catch (error) {
      res
        .status(404)
        .json({ message: 'Đăng nhập thất bại! Vui lòng thử lại', error });
    }
  }
}

module.exports = new userController();

// user.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
