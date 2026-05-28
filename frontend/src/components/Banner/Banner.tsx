import Link from 'next/link';

function Banner() {
  return (
    <header className="px-8 py-16 text-center bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 className="text-5xl font-extrabold mb-4">
        Công nghệ đỉnh cao, <br /> Nằm trong tay bạn.
      </h1>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Khám phá bộ sưu tập điện thoại, laptop và phụ kiện mới nhất với mức giá
        không thể tốt hơn.
      </p>
      <Link href="/login">
        <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition">
          Mua sắm ngay
        </button>
      </Link>
    </header>
  );
}

export default Banner;
