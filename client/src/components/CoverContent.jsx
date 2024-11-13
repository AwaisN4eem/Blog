import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import the arrow icons
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";


const CoverPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown open/close
  };

  return (
    <div
      className="relative flex items-center justify-left pl-10 h-screen bg-cover bg-center pt-16"
    >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 text-left text-white w-[70%] ">
        <h1 className="text-6xl font-medium">A Premier Publisher of Genre Fiction</h1>
        <p className="mt-4 text-lg">The place for a thrilling escape into new worlds, chilling fears, and urgent mysteries.</p>

        {/* Genre Button with Dropdown */}
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="mt-6 px-6 py-3 bg-[#bf0000] text-white font-semibold rounded shadow flex items-center"
          >
            Select Your Genre
            {isDropdownOpen ? (
              <MdArrowDropDown className="ml-2" /> // Up arrow when dropdown is open
            ) : (
              <IoMdArrowDropright className="ml-2" /> // Down arrow when dropdown is closed
            )}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-20">
              <a href="#" className="block px-4 py-2 text-orange-500 hover:bg-gray-100">SCI-FI + FANTASY</a>
              <a href="#" className="block px-4 py-2 text-teal-500 hover:bg-gray-100">HORROR + THRILLER</a>
              <a href="#" className="block px-4 py-2 text-yellow-500 hover:bg-gray-100">HISTORICAL FICTION</a>
              <a href="#" className="block px-4 py-2 text-purple-500 hover:bg-gray-100">YOUNG ADULT</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
