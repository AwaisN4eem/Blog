import { useState } from 'react';

const CategoryPanel = ({ title, guidelines }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='m-10'>
      <div className="category panel-btn relative p-4 border-b border-gray-300 flex justify-between items-center">
        {/* Title on the left */}
        <div className="inline-block middle title-column text-left">
          <div className="header-3 word-wrap text-lg font-bold text-[#BF0000]" id={title.replace(/\s/g, '-')}>
            <a target="_top" href="#" className="text-lg font-bold text-[#BF0000]">
              {title}
            </a>
          </div>
        </div>

        {/* Right side: Guidelines button and Submit button */}
        <div className="inline-block middle flex items-center space-x-4">
          {/* Dropdown Button */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={toggleDropdown}
            >
              Guidelines
              <svg
                className={`-mr-1 h-5 w-5 text-gray-400 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Submit Button */}
          <div className="inline-block middle submit-column">
            <a
              className="btn org-primary link-color-inverted bg-[#BF0000] text-white py-2 px-4 rounded hover:bg-opacity-30"
              target="_top"
              href="#"
            >
              <span>Submit</span>
            </a>
          </div>
        </div>
      </div>
      {/* Dropdown content */}
      {isDropdownOpen && (
              <div
                className="left-0 right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                    <div dangerouslySetInnerHTML={{ __html: guidelines }} />
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default CategoryPanel;
