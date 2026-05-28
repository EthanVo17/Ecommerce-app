import { ProductInfoType } from 'types/';

function ProductInfo({
  brand,
  name,
  rating,
  numReviews,
  price,
  description,
}: ProductInfoType) {
  return (
    <>
      <div className="mb-2">
        <span className="bg-blue-900 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {brand}
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
        {name}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex text-yellow-400 text-lg">
          {'★'.repeat(Math.floor(rating))}
          {'☆'.repeat(5 - Math.floor(rating))}
        </div>

        <span className="text-gray-400 text-sm">({numReviews} đánh giá)</span>
      </div>

      <div className="text-3xl font-bold text-blue-400 mb-8 pb-8 border-b border-gray-700">
        {price.toLocaleString('vi-VN')} đ
      </div>

      <div className="prose prose-invert mb-8 text-gray-300">
        <h3 className="text-lg font-semibold text-white mb-2">
          Đặc điểm nổi bật:
        </h3>
        <p className="leading-relaxed">{description}</p>
      </div>
    </>
  );
}

export default ProductInfo;
