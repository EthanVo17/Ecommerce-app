const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng nhập tên danh mục'],
      trim: true,
      unique: true,
      maxLength: [50, 'Tên danh mục không được vượt quá 50 ký tự'],
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    image: {
      type: String,
      default: 'https://your-default-image-url.com/category-placeholder.png',
    },

    description: {
      type: String,
      trim: true,
      maxLength: [200, 'Mô tả không được vượt quá 200 ký tự'],
    },

    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Category', categorySchema);
