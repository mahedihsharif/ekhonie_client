// src/components/Navbar.js
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavbarC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          {/* Search input for small screens */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
              Search
            </button>
          </div>
          <FiShoppingCart className="text-2xl ml-4" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarC;
