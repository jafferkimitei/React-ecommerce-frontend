import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'; // Cart icon
import { HiUser } from 'react-icons/hi'; // Account icon
import { useCart } from '../context/CartContext'; // Assuming you have a cart context
import { AiOutlineMenu } from 'react-icons/ai'; // Hamburger menu for mobile

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const { cartItems } = useCart(); // Use cart context to get current cart items
  const dropdownRef = useRef(null); // Ref for dropdown to detect outside click
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check for token
    setIsLoggedIn(!!token); // Set login status
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    setIsLoggedIn(false); // Update login state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Play<span className="text-[#ff9900]">Central</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <AiOutlineMenu />
        </button>

        {/* Desktop Navigation */}
        <div className={`md:flex ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center md:space-x-6`}>
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Search for products..."
              aria-label="Search products"
            />
          </div>

          {/* Account Section */}
          <div className="relative flex items-center space-x-4">
            <button
              className="flex items-center space-x-2 text-gray-800"
              onClick={toggleDropdown}
              aria-label="Toggle account menu"
            >
              <HiUser className="text-2xl" />
              <span className="hidden sm:block">
                {isLoggedIn ? 'Account' : 'Login'}
              </span>
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
                style={{ top: '100%', left: '0' }}
              >
                <ul className="text-gray-800">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-gray-100">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist" className="block px-4 py-2 text-sm hover:bg-gray-100">
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Cart Section */}
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-800" />
              {Array.isArray(cartItems) && cartItems.length > 0 && (
                <span
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                  aria-label={`${cartItems.length} items in cart`}
                >
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
