import Link from 'next/link';

const categories = [
  {
    name: 'Điện thoại',
    icon: '📱',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'hover:shadow-cyan-500/10',
    href: '/categories/dien-thoai',
  },
  {
    name: 'Laptop',
    icon: '💻',
    gradient: 'from-indigo-500/20 to-purple-600/20',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'hover:shadow-indigo-500/10',
    href: '/categories/laptop',
  },
  {
    name: 'Phụ kiện',
    icon: '🎧',
    gradient: 'from-emerald-500/20 to-teal-600/20',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'hover:shadow-emerald-500/10',
    href: '/categories/phu-kien',
  },
  {
    name: 'Smartwatch',
    icon: '⌚',
    gradient: 'from-orange-500/20 to-rose-600/20',
    borderHover: 'hover:border-orange-500/40',
    glowColor: 'hover:shadow-orange-500/10',
    href: '/categories/smartwatch',
  },
];

function Category() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Danh mục nổi bật
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Khám phá sản phẩm theo danh mục yêu thích
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition font-medium"
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link href={category.href} key={category.name}>
              <div
                className={`group relative overflow-hidden rounded-2xl p-6 lg:p-8
                           bg-gradient-to-br ${category.gradient}
                           glass-card ${category.borderHover} ${category.glowColor}
                           hover:shadow-2xl
                           cursor-pointer transition-all duration-300
                           hover:-translate-y-1`}
                style={{
                  animation: `fade-in-up 0.5s ease-out ${0.1 * (index + 1)}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div className="text-4xl lg:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white group-hover:text-gradient-primary transition-colors">
                  {category.name}
                </h3>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <span className="text-xs text-white">→</span>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 60%)',
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;