import React from 'react';
import Carousel from './Carousel';
import CategoryList from './CategoryList';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full h-auto bg-[#121212]">
      {/* Left: Categories */}
      <div className="hidden md:block w-1/5 bg-[#1F1F1F] text-white p-4">
        <CategoryList />
      </div>

      {/* Center: Carousel */}
      <div className="w-full md:w-3/5 p-4">
        <Carousel />
      </div>

      {/* Right: Highlights */}
      <div className="md:block w-1/5 bg-[#1F1F1F] text-white p-4 flex flex-col justify-start items-center">
        {/* CTA Block */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#00A9FF]">Exclusive Deals</h3>
          <p className="text-[#D3D3D3]">Sign up and get 10% off your first purchase!</p>
          <button className="bg-[#00A9FF] text-white px-4 py-2 rounded hover:bg-[#00FF00] transition-all duration-300">
            Sign Up Now
          </button>
        </div>

        {/* Featured Video */}
        <div className="w-full mb-4">
          <h3 className="text-lg font-bold text-[#00A9FF] mb-2">Featured Video</h3>
          <div className="w-full aspect-w-16 aspect-h-9 relative mb-4">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your desired video URL
              title="Featured Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Offer/Deals Widget */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#00A9FF] mb-2">Ongoing Deals</h3>
          <p className="text-[#D3D3D3]">Check out our ongoing offers and discounts on top products!</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="mr-2 text-[#FF5733]">🔥</span>
              <p className="text-[#D3D3D3]">Up to 30% off on selected PS5 games</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-[#FF5733]">⚡</span>
              <p className="text-[#D3D3D3]">Special bundle offers on Xbox Series X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
