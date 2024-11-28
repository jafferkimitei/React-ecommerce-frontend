import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedProducts from '../components/HeroSection/FeaturedProducts';
import ProductList from '../components/ProductList';
import FilterSidebar from '../components/FilterSidebar';
import RecentlyViewed from '../components/HeroSection/RecentlyViewed';

const Home = () => {
  return (
    <Layout>
      {/* Main Wrapper with Dark Background */}
      <div className="bg-[#121212] text-[#D3D3D3] min-h-screen">
        {/* Hero Section with Bold Colors */}
        <div className="mx-4 md:mx-8 py-8">
          <HeroSection />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Content */}
          <div className="col-span-1 space-y-8">
            {/* Filter Sidebar with Dark Background */}
            <div className="bg-[#1F1F1F] p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-[#00A9FF]">Filter Products</h3>
              <FilterSidebar />
            </div>

            {/* Recently Viewed with Dark Background */}
            <div className="bg-[#1F1F1F] p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-[#00FF00]">Recently Viewed</h3>
              <RecentlyViewed />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3 space-y-8">
            {/* Featured Products Section */}
            <div>
              <FeaturedProducts />
            </div>

            {/* Product List */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#FFFFFF]">Explore All Products</h2>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
