import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">
              PlayCentral is your go-to destination for all things gaming—consoles, games, accessories, and more!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-orange-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">&copy; 2024 PlayCentral. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Designed and developed by{' '}
            <a
              href="https://www.linkedin.com/in/jafferkimitei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Jaffer Kimitei
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
