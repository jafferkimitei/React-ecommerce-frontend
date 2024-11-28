import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { fetchFeaturedProducts } from '../../services/productService';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const featuredProducts = await fetchFeaturedProducts();
        setProducts(featuredProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load featured products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="/products" className="text-orange-500 font-semibold hover:underline">
          View All
        </a>
      </div>
    </div>
  );
};

export default FeaturedProducts;
