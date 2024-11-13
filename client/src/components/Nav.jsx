import React, { useState } from 'react'; 
import { MdArrowDropDown } from "react-icons/md";

const Navbar = ({ ItemsColor }) => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu); // Open dropdown when hovering over the link or arrow
  };

  const handleMouseLeave = () => {
    setDropdown(null); // Close dropdown when not hovering over
  };

  return (
    <nav className={`h-60 text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section (Nav Links) */}
        <div className="flex space-x-4 whitespace-nowrap">
          
          {/* STORIES Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter('stories')} 
            onMouseLeave={handleMouseLeave}
          >
            <a href="/stories" className="hover:underline flex items-center"
            style={{ color: ItemsColor || 'inherit' }}
            >
              STORIES
              <MdArrowDropDown size={25} />
            </a>
            {dropdown === 'stories' && (
              <div className="absolute pt-2 bg-white text-black p-4 rounded shadow-lg space-y-2"
                   onMouseEnter={() => setDropdown('stories')} // Keep dropdown open
                   onMouseLeave={handleMouseLeave} // Close when leaving dropdown
              >
                <a href="#" className="block text-orange-500 hover:underline">SCI-FI + FANTASY</a>
                <a href="#" className="block text-teal-500 hover:underline">THRILLER + MYSTERY</a>
                <a href="#" className="block text-yellow-500 hover:underline">HISTORICAL FICTION</a>
                <a href="#" className="block text-purple-500 hover:underline">YOUNG ADULT</a>
              </div>
            )}
          </div>

          {/* CONTESTS Dropdown */}
          <div 
            className="relative group" 
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
              <div className="absolute pt-2 bg-white text-black p-4 rounded shadow-lg"
                   onMouseEnter={() => setDropdown('contests')}
                   onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="block hover:underline">Contest 1</a>
                <a href="#" className="block hover:underline">Contest 2</a>
              </div>
            )}
          </div>

          {/* MORE Dropdown */}
          <div 
            className="relative group" 
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
              <div className="absolute pt-2 bg-white text-black p-4 rounded shadow-lg"
                   onMouseEnter={() => setDropdown('more')}
                   onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="block hover:underline">More Option 1</a>
                <a href="#" className="block hover:underline">More Option 2</a>
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
          <button className="bg-[#BF0000] hover:bg-[#BF0000] text-white rounded-full px-6 py-2">
            SUBMIT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
