import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

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

  useEffect(() => {
    // Extract the category from query params
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setFilteredProducts(products.filter((product) => product.category.toLowerCase() === category));
    } else {
      setFilteredProducts(products);
    }
  }, [products, location.search]);

  return (
    <Layout>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default ProductsPage;
