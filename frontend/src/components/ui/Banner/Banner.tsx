import Link from 'next/link';

function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0c1445] to-[#1a0a2e]" />

      {/* Floating Orbs */}
      <div
        className="absolute top-20 left-[15%] w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full opacity-15"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          animation: 'float-reverse 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-40 right-[30%] w-48 h-48 rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out 1s infinite',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-white/5 border border-white/10 text-sm text-gray-400 mb-8"
          style={{ animation: 'fade-in-up 0.6s ease-out forwards' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Ưu đãi mùa hè — Giảm đến 40%
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          style={{
            animation: 'fade-in-up 0.6s ease-out 0.15s forwards',
            opacity: 0,
          }}
        >
          <span className="text-white">Công nghệ đỉnh cao,</span>
          <br />
          <span className="text-gradient-primary">Nằm trong tay bạn.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            animation: 'fade-in-up 0.6s ease-out 0.3s forwards',
            opacity: 0,
          }}
        >
          Khám phá bộ sưu tập điện thoại, laptop và phụ kiện mới nhất với mức
          giá không thể tốt hơn.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            animation: 'fade-in-up 0.6s ease-out 0.45s forwards',
            opacity: 0,
          }}
        >
          <Link href={`/products`}>
            <button
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-cyan-500 to-indigo-500
                         hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]
                         hover:brightness-110
                         transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="relative z-10">Mua sắm ngay</span>
            </button>
          </Link>
          <Link href="/categories">
            <button
              className="px-8 py-3.5 rounded-xl font-semibold
                         text-gray-300 border border-white/10
                         hover:bg-white/5 hover:border-white/20 hover:text-white
                         transition-all duration-300"
            >
              Xem danh mục
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 max-w-lg mx-auto mt-16 gap-8"
          style={{
            animation: 'fade-in-up 0.6s ease-out 0.6s forwards',
            opacity: 0,
          }}
        >
          {[
            { value: '10K+', label: 'Sản phẩm' },
            { value: '50K+', label: 'Khách hàng' },
            { value: '99%', label: 'Hài lòng' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  );
}

export default Banner;
