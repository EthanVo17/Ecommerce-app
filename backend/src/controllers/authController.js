const bcrypt = require('bcryptjs');
const refreshTokenModel = require('../models/refreshTokenModel');
const { generateAccessToken } = require('../jwt/authjwt');
const express = require('express');
const router = express.Router();

const userModel = require('../models/userModel');

class authController {
  // [POST] /api/auth/register

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
        return;
      }

      // Kiểm tra xem email đã tồn tại chưa
      const EmailExist = await userModel.findOne({ email });

      if (EmailExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const SaltHash = 10;
      const salt = await bcrypt.genSalt(SaltHash);
      const hashedPassword = await bcrypt.hash(password, salt);

      const NewUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
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
      return res.status(500).json({
        message: 'Lỗi server. Vui lòng thử lại sau.',
        err: err.message || err,
      });
    }
  }

  //[POST] /api/auth/login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // phương thức để so sánh mật khẩu khi đăng nhập
      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (!isMatchPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

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
    } catch (err) {
      res.status(500).json({ message: 'Lỗi server', err: err.message });
    }
  }
}

module.exports = new authController();
