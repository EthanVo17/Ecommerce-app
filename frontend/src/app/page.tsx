import { Banner, Category, Product } from '@/src/components';

export default function Home() {
  return (
    <div className="text-gray-100 font-sans">
      {/* HERO BANNER */}
      <Banner />

      {/* CATEGORY GRID */}
      <Category />

      {/* PRODUCT GRID */}
      <Product />
    </div>
  );
}
