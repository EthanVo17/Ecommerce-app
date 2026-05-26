'use client';
import Link from 'next/link';

import { InputField, SubmitButton } from 'components/*';

function RegisterForm() {
  return (
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
          <InputField
            label="Họ và tên"
            id="name"
            type="text"
            required
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div>
          <InputField
            label="Email"
            id="email"
            type="email"
            required
            placeholder="nguyenvana@example.com"
          />
        </div>

        <div>
          <InputField
            label="Mật khẩu"
            id="password"
            type="password"
            required
            placeholder="Ít nhất 6 ký tự"
          />
        </div>

        <div>
          <InputField
            label="Xác nhận mật khẩu"
            id="confirmPassword"
            type="password"
            required
            placeholder="Ít nhất 6 ký tự"
          />
        </div>

        <SubmitButton>
          <p>Đăng ký</p>
        </SubmitButton>
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
  );
}

export default RegisterForm;
