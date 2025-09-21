import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = ({ product }) => {
  return (
    <div className="flex items-center text-gray-600 text-sm space-x-2 mb-4">
      <span className="hover:text-blue-500 cursor-pointer">Home</span>
      <FaChevronRight className="text-gray-400" />
      
      <span className="hover:text-blue-500 cursor-pointer">SHOP</span>
      <FaChevronRight className="text-gray-400" />
      
      
      <span className="hover:text-blue-500 cursor-pointer">{product.category}</span>
      <FaChevronRight className="text-gray-400" />
      
      <span className="font-semibold text-gray-800">{product.name}</span>
    </div>
  );
};

export default Breadcrumbs;
