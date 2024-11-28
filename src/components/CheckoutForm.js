// Form for users to enter shipping address, payment method, etc.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartItems, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card',
  });
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to a backend or handle payment processing.
    console.log('Order placed:', formData);
    // Redirect to confirmation page or payment page
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-form bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          ></textarea>
        </div>

        {/* Payment Method Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
