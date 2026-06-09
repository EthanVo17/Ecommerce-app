const refreshTokenModel = require('../models/refreshTokenModel');
const { generateAccessToken } = require('../jwt/authjwt');
const express = require('express');
const router = express.Router();

const userModel = require('../models/userModel');

class authController {
  // [POST] /api/auth/register

  async register(req, res) {
    const SaltHash = 10;
    try {
      const { name, email, password, cfpassword } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
        return;
      }
      // Kiểm tra xem email đã tồn tại chưa
      const EmailExist = await userModel.findOne({ email });

      if (EmailExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const NewUser = await userModel.create({
        name,
        email,
        password,
      });

      // middleware để hash mật khẩu trước khi lưu vào database
      NewUser.pre('save', async function () {
        if (!this.isModified('password')) {
          return;
        }
        const salt = await bcrypt.genSalt(SaltHash);
        this.password = await bcrypt.hash(this.password, salt);
      });

      if (NewUser) {
        res.status(201).json({
          name: NewUser.name,
          email: NewUser.email,
          role: NewUser.role,
          message: 'Đăng ký tài khoản thành công!',
        });
      } else {
        res.status(400).json({
          message: 'Dữ liệu người dùng không hợp lệ.',
        });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Lỗi server. Vui lòng thử lại sau.', err });
    }
  }

  //[POST] /api/auth/login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });

      // phương thức để so sánh mật khẩu khi đăng nhập
      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (!isMatchPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      if (user && (await user.matchPassword(password))) {
        const { accessToken, refreshToken } = generateAccessToken(user);

        await refreshTokenModel.create({
          user: user._id,
          token: refreshToken,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 ngày
        });

        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
          message: 'Login successful',
          accessToken,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
      }
    } catch (err) {
      res.status(500).json({ message: 'Lỗi server', err: err.message });
    }
  }
}

module.exports = new authController();
