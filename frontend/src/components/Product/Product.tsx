'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

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
    e.stopPropagation();

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

  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discountPrice!) / product.price) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <div
        className="group relative glass-card rounded-2xl overflow-hidden
                   card-hover cursor-pointer flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d1a]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full
                     opacity-90 group-hover:opacity-100
                     group-hover:scale-105
                     transition-all duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#16162a] via-transparent to-transparent opacity-60" />

          {/* Discount Badge */}
          {hasDiscount && (
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold
                         bg-gradient-to-r from-rose-500 to-pink-500
                         text-white shadow-lg shadow-rose-500/25"
            >
              -{discountPercent}%
            </div>
          )}

          {/* Out of stock overlay */}
          {product.countInStock === 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-300 bg-black/50 px-4 py-2 rounded-lg">
                Hết hàng
              </span>
            </div>
          )}

          {/* Quick Add Button (appears on hover) */}
          <button
            disabled={product.countInStock === 0}
            onClick={(e) => handleAddToCart(e, product)}
            className={`absolute bottom-3 right-3
                       w-10 h-10 rounded-xl
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       translate-y-2 group-hover:translate-y-0
                       transition-all duration-300
                       ${
                         product.countInStock > 0
                           ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110'
                           : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                       }`}
          >
            <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Brand */}
          <p className="text-[11px] uppercase tracking-wider text-cyan-400/70 font-semibold mb-1.5">
            {product.brand}
          </p>

          {/* Product Name */}
          <h3
            className="font-semibold text-sm sm:text-[15px] text-gray-200
                       group-hover:text-white line-clamp-2
                       transition-colors duration-200 mb-3 flex-1 leading-snug"
          >
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating !== undefined && product.rating > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating ?? 0)
                        ? 'text-amber-400'
                        : 'text-gray-700'
                    }`}
                  />
                ))}
              </div>
              {product.numReviews !== undefined && product.numReviews > 0 && (
                <span className="text-[11px] text-gray-500">
                  ({product.numReviews})
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-lg font-bold text-cyan-400">
              {(hasDiscount ? product.discountPrice! : product.price).toLocaleString(
                'vi-VN'
              )}{' '}
              đ
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-600 line-through">
                {product.price.toLocaleString('vi-VN')} đ
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
