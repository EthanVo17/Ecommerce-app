const userModel = require('../models/userModel');
const refreshTokenModel = require('../models/refreshTokenModel');
const { generateAccessToken } = require('../jwt/authjwt');

class authController {
  // [POST] /api/auth/register
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      // Kiểm tra xem email đã tồn tại chưa
      const EmailExist = await userModel.findOne({ email });
      if (EmailExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const user = await userModel.create({ name, email, password });
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //[POST] /api/auth/login
  async login(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await userModel.findOne({ email });
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
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Lỗi server', err: err.message });
    }
  }
}

module.exports = new authController();
