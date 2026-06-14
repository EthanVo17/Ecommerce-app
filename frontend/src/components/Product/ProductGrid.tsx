'use client';

import { ProductType } from 'types/';
import Product from './Product';

interface ProductGridProps {
  products: ProductType[];
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            {/* Gradient accent bar */}
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-indigo-500" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Sản phẩm mới nhất
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">
                Khám phá những sản phẩm công nghệ mới nhất
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {products.map((product, index) => (
              <div
                key={product._id}
                style={{
                  animation: `fade-in-up 0.5s ease-out ${0.08 * (index + 1)}s forwards`,
                  opacity: 0,
                }}
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Chưa có sản phẩm nào. Hãy quay lại sau nhé!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;
