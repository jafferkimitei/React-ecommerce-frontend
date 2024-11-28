import React, { useState } from "react";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext"; // Using CartContext to manage the cart state

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Get cart state and actions from context
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Handle item removal from cart
  const handleRemoveItem = (productId) => {
    removeFromCart(productId); // Remove item using context
  };

  // Handle quantity update for cart items
  const handleUpdateQuantity = (productId, quantity) => {
    // Ensure quantity is greater than 0
    if (quantity < 1) {
      alert("Quantity must be at least 1.");
      return;
    }
    updateQuantity(productId, quantity); // Update quantity using context
  };

  // Handle checkout process
  const handleCheckout = async () => {
    if (!shippingAddress || !paymentMethod) {
      alert("Please provide a shipping address and payment method.");
      return;
    }
    // Proceed with checkout logic here
    alert("Order placed successfully!");
    // Optionally, clear cart or redirect
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cartItems && cartItems.length > 0 ? (
          <div className="space-y-6">
            {/* Cart Items */}
            <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => {
  return (
    <li key={`${item.id}-${item.name}`} className="py-4 flex items-center space-x-4">
      <img
        src={item.imageUrl || "https://via.placeholder.com/100"}
        alt={item.name}
        className="w-16 h-16 rounded-md border"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center space-x-2">
          <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600">
            Qty:
          </label>
          <input
  type="number"
  id={`quantity-${item.id}`}
  value={item.quantity || 1}  // Fallback to 1 if item.quantity is undefined
  onChange={(e) =>
    handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
  }
  className="w-16 px-2 py-1 border rounded-md text-center"
  min="1"
/>
        </div>
      </div>
      <button
        onClick={() => handleRemoveItem(item.id)}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Remove
      </button>
    </li>
  );
})}

            </ul>

            {/* Checkout Section */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
              <p className="text-gray-700">
                Total:{" "}
                <span className="font-bold">
                  ${cartItems
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <div className="space-y-2">
                <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-600">
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="shippingAddress"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your shipping address"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-600">
                  Payment Method
                </label>
                <input
  type="text"
  id="paymentMethod"
  value={paymentMethod || ""}  // Fallback to empty string if paymentMethod is undefined
  onChange={(e) => setPaymentMethod(e.target.value)}
  className="w-full px-4 py-2 border rounded-md"
  placeholder="Enter your payment method"
/>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-lg">Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
