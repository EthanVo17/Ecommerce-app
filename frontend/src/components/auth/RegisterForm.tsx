'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { api } from 'utils/';
import { InputField, SubmitButton } from 'components/*';
import { PasswordInput } from 'components/';

function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = React.useState({
    name: '',
    email: '',
    password: '',
    general: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '', general: '' });
  };

  const regexp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newError = { name: '', email: '', password: '', general: '' };

    if (!formData.name.trim()) {
      newError.name = 'Vui lòng nhập họ tên.';
      isValid = false;
    }

    if (!formData.email.trim() || !regexp.test(formData.email)) {
      newError.email = 'Email không hợp lệ.';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newError.password = 'Mật khẩu phải có ít nhất 8 ký tự.';
      isValid = false;
    }

    setError(newError);
    if (!isValid) return;

    try {
      setIsLoading(true);
      await api.post('/auth/register', formData);
      // console.log('data:', formData);

      router.push('/login');
    } catch (error: any) {
      setError({
        ...newError,
        general: error.response?.data?.message || 'Đăng ký thất bại.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Tạo tài khoản mới
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Gia nhập cộng đồng mua sắm công nghệ
          <span className="text-blue-500 font-semibold">TechStore</span>
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {error.general && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error.general}
          </div>
        )}
        <div>
          <InputField
            label="Họ và tên"
            id="name"
            name="name"
            value={formData.name}
            error={error.name}
            onChange={handleChange}
            autoFocus={true}
            type="text"
            required
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div>
          <InputField
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            error={error.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="nguyenvana@example.com"
          />
        </div>

        <div>
          <PasswordInput
            id="password"
            name="password"
            value={formData.password}
            error={error.password}
            onChange={handleChange}
            required
            placeholder="Ít nhất 6 ký tự"
          />
        </div>

        {/* <div>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            value={formData.password}
            error={error.password}
            onChange={handleChange}
            type="password"
            required
            placeholder="Ít nhất 6 ký tự"
          />
        </div> */}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 text-white font-semibold rounded-md transition-colors ${
            isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
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
  );
}

export default RegisterForm;
