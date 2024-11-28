import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password);
      if (userData.token) {
        // Determine where to redirect the user
        const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
        const hasCartItems = localStorage.getItem('hasCartItems') === 'true';

        // Clear temporary redirection data
        localStorage.removeItem('redirectAfterLogin');
        localStorage.removeItem('hasCartItems');

        // Redirect to the appropriate path
        navigate(hasCartItems ? redirectPath : '/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section with Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwZWNvbW1lcmNlfGVufDB8fDB8fHww')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-12 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 w-full max-w-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-gray-600">
          New user?{' '}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
