'use client';
import Link from 'next/link';

import { InputField, SubmitButton } from '@/src/components';

function LoginForm() {
  return (
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
        <InputField
          label="Địa chỉ Email"
          id="email"
          type="email"
          required
          placeholder="nguyenvana@example.com"
        />

        <InputField
          label="Mật khẩu"
          id="password"
          type="password"
          required
          placeholder="••••••••"
        />

        <InputField
          label="Xác Nhận Mật khẩu"
          id="password"
          type="password"
          required
          placeholder="••••••••"
        />

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

        <SubmitButton>
          <p>Đăng nhập</p>
        </SubmitButton>
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
  );
}

export default LoginForm;
