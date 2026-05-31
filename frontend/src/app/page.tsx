import { Banner, Category, Product } from '@/src/components';
import Header from '../Header/Header';
export default function Home() {
  return (
    <div className="text-gray-100 font-sans">
      <Header />

      {/* HERO BANNER */}
      <Banner />

      {/* CATEGORY GRID */}
      <Category />

      {/* PRODUCT GRID */}
      <Product />
    </div>
  );
}
