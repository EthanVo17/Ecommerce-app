'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { ProductType } from 'types/';
import { useCartStore, useAuthStore } from 'stores/';

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { user } = useAuthStore();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    productToCart: ProductType
  ) => {
    e.preventDefault();

    if (!user) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
      return;
    }

    addToCart({
      productId: productToCart._id,
      name: productToCart.name,
      price: productToCart.price,
      images: productToCart.images,
      countInStock: productToCart.countInStock,
      quantity: 1,
    });
    alert(`Đã thêm ${productToCart.name} vào giỏ!`);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition group cursor-pointer flex flex-col justify-between">
      <div>
        <div className="bg-gray-700 h-48 rounded-lg mb-4 overflow-hidden relative group-hover:scale-[1.02] transition transform duration-300">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition"
          />
        </div>
        <p className="text-xs text-gray-400 mb-1 font-medium">
          {product.brand}
        </p>

        <h3 className="font-bold text-base sm:text-lg mb-2 text-white group-hover:text-blue-400 transition line-clamp-2">
          {product.name}
        </h3>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg sm:text-xl font-bold text-blue-400">
          {product.price.toLocaleString('vi-VN')} đ
        </span>

        <button
          disabled={product.countInStock === 0}
          className={`p-2.5 rounded-lg transition-colors shadow-sm ${
            product.countInStock > 0
              ? 'bg-gray-700 hover:bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-600 cursor-not-allowed'
          }`}
          title={product.countInStock > 0 ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
          onClick={(e) => handleAddToCart(e, product)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}

export default Product;
