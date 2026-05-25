// file: src/app/(auth)/register/page.tsx
'use client';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Tạo tài khoản mới
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Gia nhập cộng đồng mua sắm công nghệ{' '}
            <span className="text-blue-500 font-semibold">TechStore</span>
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-1"
              htmlFor="name"
            >
              Họ và tên
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-1"
              htmlFor="email"
            >
              Địa chỉ Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="nguyenvana@example.com"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-1"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Ít nhất 6 ký tự"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition-colors mt-6"
          >
            Đăng ký
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Đã có tài khoản?{' '}
          <Link
            href="/login"
            className="font-medium text-blue-500 hover:text-blue-400 transition"
          >
            Đăng nhập tại đây
          </Link>
        </div>
      </div>
    </div>
  );
}
