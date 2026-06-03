'use client';

import { ProductType } from 'types/';
import Product from './Product';

interface ProductGridProps {
  products: ProductType[];
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          Sản phẩm mới nhất
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
