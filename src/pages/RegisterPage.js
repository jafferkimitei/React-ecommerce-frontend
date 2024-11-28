import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userData = await registerUser(name, email, password);
      if (userData.token) {
        navigate('/cart'); // Redirect to cart after successful registration
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
          backgroundImage: "url('https://images.unsplash.com/photo-1659535907680-0e219b46c01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZXJzfGVufDB8fDB8fHww')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Right Section with Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-12 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 w-full max-w-md">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>
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
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
