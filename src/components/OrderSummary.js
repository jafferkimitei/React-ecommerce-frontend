import React from 'react';

const OrderSummary = ({ cartItems, totalPrice }) => {
  const shippingCost = 5.0; // Example shipping cost

  const calculateTotal = () => {
    return totalPrice + shippingCost;
  };

  return (
    <div className="order-summary bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

      {/* Order Items */}
      <div className="order-items space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <p className="text-gray-700">{item.name} x{item.quantity}</p>
            <p className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Shipping Cost */}
      <div className="flex justify-between mb-4">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">${shippingCost.toFixed(2)}</p>
      </div>

      {/* Total */}
      <div className="flex justify-between mb-6 text-xl font-semibold">
        <p>Total</p>
        <p className="text-orange-600">${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
