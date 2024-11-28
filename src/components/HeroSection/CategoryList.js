import React from 'react';

const categories = [
  'Accessories',
  'Games',
  'Merchandise',
  'PC Gaming',
  'Subscriptions',
  'Streaming Equipment',
  'Sales & Bundles',
  'Playstation Consoles',
  'Xbox Consoles',
];

const CategoryList = () => {
  return (
    <ul className="space-y-1 h-64 overflow-y-auto">
      {categories.map((category) => (
        <li key={category} className="hover:bg-gray-700 p-2 rounded transition-all duration-300">
          <a
            href={`/${category.toLowerCase()}`}
            className="text-xs text-white font-medium hover:text-orange-500"
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
