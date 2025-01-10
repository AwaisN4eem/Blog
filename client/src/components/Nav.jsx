import React, { useState, useContext } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import {Link} from "react-router-dom";
import { UserContext } from "../context/UserContext"
import Submittable from '../pages/Submittabel';

const Navbar = ({ ItemsColor, bgColor }) => {
  const [dropdown, setDropdown] = useState(null);
  const {user}=useContext(UserContext)

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className={`p-4 ${bgColor || 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section (Nav Links) */}
        <div className="flex space-x-4 whitespace-nowrap"
        style={{ color: ItemsColor || 'white' }}
        >

          {/* STORIES Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('stories')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/stories" className="hover:underline flex items-center"
              
            >
              STORIES
              <MdArrowDropDown size={25} />
            </a>
            {dropdown === 'stories' && (
              <div className="absolute z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-orange-500 hover:underline">SCI-FI + FANTASY</a>
                  <a href="#" className="block px-4 py-2 text-sm text-teal-500 hover:underline">THRILLER + MYSTERY</a>
                  <a href="#" className="block px-4 py-2 text-sm text-yellow-500 hover:underline">HISTORICAL FICTION</a>
                  <a href="#" className="block px-4 py-2 text-sm text-purple-500 hover:underline">YOUNG ADULT</a>
                </div>
              </div>
            )}
          </div>

          {/* CONTESTS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('contests')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/contests" className="hover:underline flex items-center"
              style={{ color: ItemsColor || 'inherit' }}
            >
              CONTESTS
              <MdArrowDropDown size={25} />
            </a>
            {dropdown === 'contests' && (
              <div className="absolute z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline">Contest 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline">Contest 2</a>
                </div>
              </div>
            )}
          </div>

          {/* MORE Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('more')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/more" className="hover:underline flex items-center"
              style={{ color: ItemsColor || 'inherit' }}
            >
              MORE
              <MdArrowDropDown size={25} />
            </a>
            {dropdown === 'more' && (
              <div className="absolute z-10 pt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline">More Option 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:underline">More Option 2</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex-grow flex justify-center">
          <img src="path_to_logo_image" alt="Logo" className="h-12" />
        </div>

        {/* Right Section (Submit Button) */}
        <div className="flex">
        <Link to= '/guidelines'>
          <button className="bg-[#BF0000] hover:bg-[#BF0000] text-sm text-white rounded-[50%] px-2 py-5">
            SUBMIT
          </button>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
