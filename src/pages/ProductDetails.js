import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { fetchProductById, fetchProducts } from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);

        // Fetch similar products based on category
        const allProducts = await fetchProducts();
        const filteredSimilar = allProducts.filter(
          (item) => item.category === fetchedProduct.category && item._id !== fetchedProduct._id
        );
        setSimilarProducts(filteredSimilar);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Error fetching product details.');
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });  // Pass both product info and quantity to cart
    alert(`${product.name} added to cart with quantity: ${quantity}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center text-xl text-gray-600">Loading product details...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center text-xl text-red-600">{error}</div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="text-center text-xl text-gray-600">Product not found.</div>
      </Layout>
    );
  }

  const totalPrice = product.price * quantity;

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <nav className="ml-12 text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:underline">Home</Link> &gt; 
        <Link to="/products" className="hover:underline"> Products</Link> &gt; 
        <span className="text-gray-800">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-1/4 mb-4 md:mb-0 rounded-lg shadow-lg"
          />
          {/* Product Info */}
          <div className="md:ml-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
            <div className="text-xl font-semibold text-gray-800 mb-4">
              ${totalPrice.toFixed(2)} {/* Display updated price */}
              {product.discount && (
                <span className="ml-4 text-sm font-medium text-green-500">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <p className="text-md text-gray-700 mb-4">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full"
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
              >
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <ProductCard key={similarProduct._id} product={similarProduct} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
