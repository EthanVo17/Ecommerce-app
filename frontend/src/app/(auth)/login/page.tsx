// file: src/app/(auth)/login/page.tsx
'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        {/* Tiêu đề */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Đăng nhập tài khoản
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Chào mừng bạn quay trở lại với{' '}
            <span className="text-blue-500 font-semibold">TechStore</span>
          </p>
        </div>

        {/* Form đăng nhập (Hiện tại chỉ là UI, chưa gọi API) */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-500 hover:text-blue-400 transition"
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition-colors"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Chưa có tài khoản?{' '}
          <Link
            href="/register"
            className="font-medium text-blue-500 hover:text-blue-400 transition"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
