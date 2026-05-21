const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    // 1. Khách hàng mua hàng (Liên kết với bảng User)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // 2. Danh sách sản phẩm trong đơn hàng (Áp dụng Data Snapshot)
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: { type: String, required: true }, // Đóng băng tên sản phẩm
        price: { type: Number, required: true }, // Đóng băng giá tại thời điểm mua
        image: { type: String, required: true }, // Đóng băng ảnh đại diện sản phẩm
        quantity: { type: Number, required: true },
      },
    ],

    // 3. Địa chỉ giao hàng (Đóng băng thông tin nhận hàng)
    // Phải lưu cứng, đề phòng trường hợp User sau này vào trang cá nhân đổi địa chỉ khác
    shippingAddress: {
      name: { type: String, required: true }, // Tên người nhận
      phone: { type: String, required: true }, // Số điện thoại nhận hàng
      street: { type: String, required: true },
      ward: { type: String, required: true },
      district: { type: String, required: true },
      city: { type: String, required: true },
    },

    // 4. Thông tin Thanh toán & Vận chuyển
    paymentMethod: {
      type: String,
      required: true,
      enum: ['COD', 'Paypal', 'VNPAY', 'Stripe'], // Các phương thức hỗ trợ
      default: 'COD',
    },
    // Dữ liệu trả về từ cổng thanh toán (nếu thanh toán online)
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    // 5. Thống kê dòng tiền (Tách rõ ràng để làm kế toán)
    itemsPrice: { type: Number, required: true, default: 0.0 }, // Tổng tiền hàng
    shippingPrice: { type: Number, required: true, default: 0.0 }, // Phí vận chuyển
    taxPrice: { type: Number, required: true, default: 0.0 }, // Thuế (nếu có)
    totalPrice: { type: Number, required: true, default: 0.0 }, // Tổng tiền khách phải trả

    // 6. Trạng thái Đơn hàng
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
