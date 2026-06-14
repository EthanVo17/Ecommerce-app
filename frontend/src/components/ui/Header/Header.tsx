'use client';

import Link from 'next/link';
import React from 'react';
import { useAuthStore, useCartStore } from 'stores/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import {
  faCartShopping,
  faUser,
  faSignOutAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { user, logout } = useAuthStore();
  const totalItem = useCartStore((state) => state.totalItem);

  const [isClient, setIsClient] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-gradient-primary">Tech</span>
                <span className="text-white group-hover:text-gray-200 transition">
                  Store
                </span>
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-5 pr-12 py-2.5 text-sm
                           placeholder-gray-500
                           focus:outline-none focus:border-cyan-500/50 focus:bg-white/8
                           focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                           transition-all duration-300"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-lg
                           text-gray-500 hover:text-cyan-400 hover:bg-white/5
                           transition-all duration-200"
              >
                <FontAwesomeIcon icon={faSistrix} className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl
                         hover:bg-white/5 text-gray-400 hover:text-cyan-400
                         transition-all duration-200"
            >
              <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
              {isClient && totalItem > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px]
                             bg-gradient-to-r from-cyan-500 to-indigo-500
                             text-white text-[10px] font-bold
                             flex items-center justify-center
                             rounded-full px-1
                             shadow-lg shadow-cyan-500/30"
                  style={{ animation: 'badge-pop 0.3s ease-out' }}
                >
                  {totalItem}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                             hover:bg-white/5 text-gray-300 hover:text-white
                             transition-all duration-200"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500
                                flex items-center justify-center text-white text-sm font-bold"
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.name}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3 text-gray-500 group-hover:text-gray-300 transition"
                  />
                </button>

                {/* Dropdown */}
                <div
                  className="absolute right-0 mt-2 w-56 glass rounded-xl shadow-2xl shadow-black/40
                             opacity-0 invisible translate-y-2
                             group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                             transition-all duration-300 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300
                                 hover:bg-white/5 hover:text-cyan-400 transition-all"
                    >
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                      Tài khoản của tôi
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm
                                 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
                      Đăng Xuất
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-300
                             hover:text-white rounded-xl hover:bg-white/5
                             transition-all duration-200"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white
                             bg-gradient-to-r from-cyan-500 to-indigo-500
                             rounded-xl hover:shadow-lg hover:shadow-cyan-500/25
                             hover:brightness-110
                             transition-all duration-300"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
