const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng nhập tên hợp lệ'],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Vui lòng nhập định dạng email hợp lệ'],
    },
    password: {
      type: String,
      required: [true, 'Vui lòng nhập mật khẩu'],
      minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'],
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      trim: true,
      default: 'https://your-default-avatar-url.com/avatar.png',
    },
    addresses: [
      {
        street: { type: String, required: true },
        ward: { type: String, required: true },
        district: { type: String, required: true },
        city: { type: String, required: true },
        isDefault: { type: Boolean, default: false },
      },
    ],
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Số lượng tối thiểu là 1'],
          default: 1,
        },
      },
    ],

    loginAttempts: {
      type: Number,
      require: true,
      default: 0,
    },

    lockUntil: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
