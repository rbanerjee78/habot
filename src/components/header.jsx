import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="logo.png" alt="Logo" />
          </div>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-gray-600 focus:outline-none sm:hidden"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
          {/* Mobile Menu Layer */}
          <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="#link" className="text-gray-800 hover:text-gray-600">
                  Find Suppliers
                </a>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
                  >
                    Find Service Tags
                    <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                      <a href="#option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Option 1
                      </a>
                      <a href="#option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Option 2
                      </a>
                      <a href="#option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Option 3
                      </a>
                    </div>
                  )}
                </div>
                <a href="#login" className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">
                  Login / Sign Up
                </a>
              </div>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className={`flex items-center space-x-4 hidden sm:flex sm:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
            <a href="#link" className="text-gray-800 hover:text-gray-600">
              Find Suppliers
            </a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                Find Service Tags
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                  <a href="#option1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Option 1
                  </a>
                  <a href="#option2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Option 2
                  </a>
                  <a href="#option3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Option 3
                  </a>
                </div>
              )}
            </div>
            <a href="#login" className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">
              Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
