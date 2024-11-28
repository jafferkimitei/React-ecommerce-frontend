// ForgotPasswordPage.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from '../services/authService'; // Add this function to authService

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to process your request.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email address to receive a password reset link.
        </p>

        {error && <div className="text-red-600 bg-red-100 p-3 rounded mb-4">{error}</div>}
        {message && <div className="text-green-600 bg-green-100 p-3 rounded mb-4">{message}</div>}

        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
