import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';  // Use a toast library for better notifications

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();  // Prevent navigating to product page
    addToCart(product, 1);  // Add product to cart with quantity 1
    toast.success(`${product.name} added to cart!`);  // Display success toast
  };

  return (
    <div
      className="bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold truncate">{product.name}</h2>
        <p className="text-lg font-semibold text-orange-400 mt-2">${product.price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-orange-500 text-white font-semibold py-2 transition-all duration-300 w-full rounded-b-lg opacity-0 group-hover:opacity-100"
        onClick={handleAddToCart}
        aria-label={`Add ${product.name} to cart`}  // Accessibility enhancement
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
