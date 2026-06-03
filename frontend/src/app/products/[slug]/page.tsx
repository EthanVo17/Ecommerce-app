import Link from 'next/link';
import {
  ProductGallery,
  ProductAction,
  ProductInfo,
} from 'components/Product/';

const mockProduct = {
  id: '1',
  name: 'Iphone 15 promax',
  price: 25000000,
  description:
    'iPhone 15 Pro Max. Được đúc từ titan với chip A17 Pro mang tính đột phá, nút Tác Vụ có thể tùy chỉnh và hệ thống camera iPhone mạnh mẽ nhất từ trước đến nay.',
  images: ['mock', 'mock', 'mock', 'mock'],
  category: 'Điện thoại',
  brand: 'Apple',
  countInStock: 15,
  rating: 4.8,
  numReviews: 124,
};

function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <nav className="flex text-sm text-gray-400 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-500 transition">
            TRANG CHỦ
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/category/${mockProduct.category}`}
            className="hover:text-blue-500 transition"
          >
            {mockProduct.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">{mockProduct.name}</span>
        </nav>

        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 lg:p-10 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery images={mockProduct.images} />
          </div>

          <div className="flex flex-col justify-center">
            <ProductInfo
              brand={mockProduct.brand}
              name={mockProduct.name}
              description={mockProduct.description}
              price={mockProduct.price}
              rating={mockProduct.rating}
              numReviews={mockProduct.numReviews}
            />

            <ProductAction
              productId={mockProduct.id}
              name={mockProduct.name}
              countInStock={mockProduct.countInStock}
              images={mockProduct.images}
              price={mockProduct.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
