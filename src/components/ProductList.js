import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    getProducts();
  }, []);

  const getTopProductsByCategory = (category) => {
    return products
      .filter((product) => product.category === category)
      .sort((a, b) => b.price - a.price)
      .slice(0, 4);
  };

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2> */}

      <div className="space-y-6">
        {['Accessories', 'Xbox', 'PC', 'Games'].map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-800">{category} Best Sellers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {getTopProductsByCategory(category).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate(`/products?category=${category.toLowerCase()}`)}
                className="text-orange-500 font-semibold hover:underline"
              >
                View All Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
