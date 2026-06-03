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
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { user, logout } = useAuthStore();
  const totalItem = useCartStore((state) => state.totalItem);

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 text-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold tracking-wider text-white"
              >
                <span className="text-blue-500">Tech</span>Store
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:border-blue-500"
                />

                <button
                  className="absolute right-0 top-0 mt-2 mr-4 text-gray-400 hover:text-white"
                  //handleSearch here
                >
                  <FontAwesomeIcon icon={faSistrix} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/cart"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                {isClient && totalItem > 0 && (
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {totalItem}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 hover:text-blue-400 transition font-medium">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Xin Chào, ${user.name}</span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-blue-400"
                      >
                        Tài khoản của tôi
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 flex items-center gap-2"
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} /> Đăng Xuất
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="text-gray-300 hover:text-white font-medium transition"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
