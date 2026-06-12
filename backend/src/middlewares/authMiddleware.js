const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

class authMiddleware {
  async protect(req, res, next) {
    let token;

    // Bước 1: Trích xuất token từ header Authorization
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Bước 2: Nếu không tìm thấy token → dừng ngay
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Bước 3: Verify token và gán user vào request
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  async admin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized as an admin' });
    }
  }
}

module.exports = new authMiddleware();
