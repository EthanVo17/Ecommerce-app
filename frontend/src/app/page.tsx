import { Banner, Category, Product } from '@/src/components';
import Header from '../components/ui/Header/Header';
import { ProductGrid } from 'components/Product/*';
import { productService } from 'services/';
import { ProductType } from '../types';

export default async function Home() {
  const products: ProductType[] = await productService.getProducts();
  return (
    <div className="text-gray-100 font-sans">
      <Header />

      {/* HERO BANNER */}
      <Banner />

      {/* CATEGORY GRID */}
      <Category />

      {/* PRODUCT GRID */}
      <ProductGrid products={products} />
    </div>
  );
}
