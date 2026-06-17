const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng nhập tên sản phẩm'],
      trim: true,
      maxLength: [120, 'Tên sản phẩm không được vượt quá 120 ký tự'],
    },

    description: {
      type: String,
      required: [true, 'Vui lòng nhập mô tả sản phẩm'],
    },

    price: {
      type: Number,
      required: [true, 'Vui lòng nhập giá sản phẩm'],
      min: [0, 'Giá sản phẩm không thể là số âm'],
    },

    discountPrice: {
      type: Number,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: 'Giá giảm phải nhỏ hơn giá gốc',
      },
    },

    countInStock: {
      type: Number,
      required: [true, 'Vui lòng nhập số lượng trong kho'],
      min: [0, 'Số lượng trong kho không thể là số âm'],
      default: 0,
    },

    images: [
      {
        type: String,
        required: [true, 'Vui lòng cung cấp ít nhất một hình ảnh'],
      },
    ],

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'Vui lòng nhập tên thương hiệu'],
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    specs: {
      type: Map,
      of: String,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
