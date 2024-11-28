import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Recalculate total price whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/" className="text-orange-500">Start shopping</Link></p>
        ) : (
          <div>
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      <h2 className="text-lg text-gray-200 font-medium">{item.name}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Total */}
            <div className="mt-8 flex justify-between items-center text-xl font-semibold">
              <p>Total:</p>
              <p className="text-orange-600">${totalPrice.toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <div className="flex">
            <div className="mt-6">
              <Link to="/checkout" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                Proceed to Checkout
              </Link>
            </div>
            <div className="mt-6">
              <Link to="/products" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
                Continue Shopping
              </Link>
            </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
