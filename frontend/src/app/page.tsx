import { Banner, Category } from '@/src/components';
import { ProductGrid } from '@/src/components/Product';
import { productService } from '@/src/services';
import { ProductType } from '@/src/types';

export default async function Home() {
  let products: ProductType[] = [];

  try {
    products = await productService.getProducts();
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }

  return (
    <div className="text-gray-100">
      {/* HERO BANNER */}
      <Banner />

      {/* CATEGORY GRID */}
      <Category />

      {/* PRODUCT GRID */}
      <ProductGrid products={products} />
    </div>
  );
}
