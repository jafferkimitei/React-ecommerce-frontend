// A sidebar that allows users to filter products by categories, price range, brand, etc.

import React from 'react';

const FilterSidebar = () => (
  <div className="p-4 w-64 bg-gray-800 text-white space-y-4">
    <h3 className="text-lg font-semibold">Filters</h3>
    {/* Price Range Filter */}
    <div>
      <h4 className="font-semibold">Price Range</h4>
      <input type="range" min="0" max="1000" step="10" />
      <div className="flex justify-between">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>

    {/* Categories Filter */}
    <div>
      <h4 className="font-semibold">Categories</h4>
      <ul>
        <li><input type="checkbox" /> PS5</li>
        <li><input type="checkbox" /> Xbox</li>
        <li><input type="checkbox" /> PC</li>
      </ul>
    </div>

    {/* Ratings Filter */}
    <div>
      <h4 className="font-semibold">Ratings</h4>
      <div>
        <input type="radio" id="4stars" name="rating" />
        <label htmlFor="4stars">4 stars & above</label>
      </div>
    </div>

    {/* Availability Filter */}
    <div>
      <h4 className="font-semibold">Availability</h4>
      <input type="checkbox" /> In Stock
    </div>
  </div>
);

export default FilterSidebar;
