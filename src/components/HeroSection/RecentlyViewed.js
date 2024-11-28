import React, { useState, useEffect } from 'react';

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    setRecentlyViewed(viewed);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Recently Viewed</h2>
      <div className="space-y-4">
        {recentlyViewed.length === 0 ? (
          <p className="text-gray-600">No products viewed yet</p>
        ) : (
          recentlyViewed.map((product) => (
            <div
              key={product.id}
              className="flex items-center hover:bg-gray-700 p-2 rounded transition ease-in-out duration-300"
            >
              <img
                src={product.imageUrl || '/default-image.jpg'} // Use a default image if no imageUrl exists
                alt={product.name}
                className="w-16 h-16 rounded mr-4"
              />
              <p className="text-white">{product.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentlyViewed;
