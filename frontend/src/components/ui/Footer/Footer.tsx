'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const footerLinks = {
  products: {
    title: 'Sản phẩm',
    links: [
      { name: 'Điện thoại', href: '/categories/dien-thoai' },
      { name: 'Laptop', href: '/categories/laptop' },
      { name: 'Phụ kiện', href: '/categories/phu-kien' },
      { name: 'Smartwatch', href: '/categories/smartwatch' },
      { name: 'Khuyến mãi', href: '/deals' },
    ],
  },
  support: {
    title: 'Hỗ trợ',
    links: [
      { name: 'Chính sách đổi trả', href: '/policy/return' },
      { name: 'Chính sách bảo hành', href: '/policy/warranty' },
      { name: 'Hướng dẫn mua hàng', href: '/guide' },
      { name: 'Câu hỏi thường gặp', href: '/faq' },
      { name: 'Liên hệ', href: '/contact' },
    ],
  },
  company: {
    title: 'Về chúng tôi',
    links: [
      { name: 'Giới thiệu', href: '/about' },
      { name: 'Tuyển dụng', href: '/careers' },
      { name: 'Tin tức', href: '/blog' },
      { name: 'Điều khoản sử dụng', href: '/terms' },
      { name: 'Chính sách bảo mật', href: '/privacy' },
    ],
  },
};

const socialLinks = [
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faTwitter, href: '#', label: 'Twitter' },
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faYoutube, href: '#', label: 'Youtube' },
];

function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="bg-[#080814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-gradient-primary">Tech</span>
                  <span className="text-white">Store</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                Nền tảng mua sắm công nghệ hàng đầu Việt Nam. Cam kết sản phẩm
                chính hãng, giá tốt nhất thị trường.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/5
                               flex items-center justify-center
                               text-gray-500 hover:text-cyan-400
                               hover:bg-cyan-500/10 hover:border-cyan-500/20
                               transition-all duration-200"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} TechStore. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-xs text-gray-600 hover:text-gray-400 transition"
              >
                Điều khoản
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-gray-600 hover:text-gray-400 transition"
              >
                Bảo mật
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-gray-600 hover:text-gray-400 transition"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
