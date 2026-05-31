'use client';
import React from 'react';

import { ProductActionsType } from 'types/';
import { useCartStore } from 'stores/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ProductActions({
  productId,
  name,
  countInStock,
  price,
  images,
}: ProductActionsType) {
  const [quantity, setQuantity] = React.useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec' && quantity > 1) {
      return setQuantity(quantity - 1);
    }

    if (type === 'inc' && quantity < countInStock) {
      return setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      productId,
      name,
      countInStock,
      price,
      images,
      quantity,
    });
    alert(`Đã thêm ${quantity} sản phẩm ${name} ${productId} vào giỏ hàng`);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-center">
        <div className="flex items-center border border-gray-600 rounded-lg bg-gray-900 h-12">
          <button
            onClick={() => handleQuantity('dec')}
            className="px-4 text-gray-400 hover:text-white transition h-full flex items-center justify-center text-xl font-bold"
          >
            -
          </button>
          <span className="w-12 text-center font-semibold text-lg text-white">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantity('inc')}
            className="px-4 text-gray-400 hover:text-white transition h-full flex items-center justify-center text-xl font-bold"
          >
            +
          </button>
        </div>

        <div className="text-sm">
          {countInStock > 0 ? (
            <span className="text-green-400 font-medium">
              Còn {countInStock} sản phẩm
            </span>
          ) : (
            <span className="text-red-400 font-medium">Hết hàng</span>
          )}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={countInStock === 0}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-[0.98] ${
          countInStock > 0
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        {countInStock > 0
          ? `Thêm vào giỏ hàng ${(<FontAwesomeIcon icon={faCartShopping} />)}`
          : 'Sản phẩm đã hết hàng'}
      </button>
    </>
  );
}

export default ProductActions;
