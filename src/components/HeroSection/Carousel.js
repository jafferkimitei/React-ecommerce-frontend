import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'path-to-image1.jpg',
    title: 'PlayStation 5',
    description: 'Experience next-gen gaming!',
    link: '/product/ps5',
  },
  {
    id: 2,
    image: 'path-to-image2.jpg',
    title: 'Xbox Series X',
    description: 'Power your dreams!',
    link: '/product/xbox-series-x',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Slide */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-2xl md:text-4xl font-bold">{slides[currentIndex].title}</h2>
          <p className="text-lg md:text-xl mt-2">{slides[currentIndex].description}</p>
          <a
            href={slides[currentIndex].link}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
