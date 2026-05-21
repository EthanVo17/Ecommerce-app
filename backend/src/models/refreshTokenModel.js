const mongoose = require('mongoose');

// Mô hình Refresh Token sẽ lưu trữ các token được cấp phát cho người dùng, cùng với thông tin về thời gian hết hạn, thiết bị sử dụng, và trạng thái của token (còn hiệu lực hay đã bị thu hồi).
const refreshTokenModel = new mongoose.Schema(
  {
    // 1. Thuộc về ai? (Liên kết với bảng User)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    token: {
      type: String,
      required: true,
      unique: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    isRevoked: {
      type: Boolean,
      default: false,
    },

    ipAddress: {
      type: String,
    },

    deviceInfo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Tính năng cực hay của MongoDB: TTL Index (Time-To-Live)
// Database sẽ tự động xóa document này khi thời gian hiện tại vượt qua thời gian expiresAt
refreshTokenModel.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('RefreshToken', refreshTokenModel);
