'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { InputField } from '@/src/components';
import { axiosClient } from 'utils/';
import { useAuthStore } from '@/src/stores';

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosClient.post('/auth/login', formData, {
        withCredentials: true,
      });

      const { accessToken, user } = response.data;

      const { setCredentials } = useAuthStore.getState();
      setCredentials(user, accessToken);

      router.push('/');
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message || 'Lỗi vui lòng thử lại sau 10 giây'
        : 'Lỗi vui lòng thử lại sau 10 giây';

      setError(message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-md bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <InputField
          label="Địa chỉ Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          placeholder="nguyenvana@example.com"
        />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            placeholder="••••••••"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
          disabled={isLoading}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
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
  );
}

export default LoginForm;
