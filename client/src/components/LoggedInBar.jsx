import React from 'react';
import logo from '../assets/alike.jpg'

const LoggedInBar = () => {
  return (
    <div className="w-full bg-gray-100 py-2 px-4 flex justify-between items-center">
      {/* Left content */}
      <div id="left-content" className="flex items-center">
        <a href="#" className="text-blue-600 hover:underline mr-4">
          Home
        </a>
        <span className="inline-block h-6 border-r border-gray-300"></span>
      </div>

      {/* Right content */}
      <div id="right-content" className="flex items-center">
        {/* Placeholder for localization widget */}
        <div className="mr-4">
          {/* Localization widget would go here */}
        </div>

        <div id="dashboard" className="flex items-center space-x-2">
          {/* Submittable logo placeholder */}
          <span className="inline-block pr-2">
            <img
              src={logo} // Replace with actual logo path
              alt="Submittable logo"
              className="w-5 h-5"
              aria-hidden="true"
            />
          </span>

          <span className="text-gray-600">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800"
            >
              View Your Submissions
            </a>
          </span>

          <span className="inline-block h-6 border-l border-gray-300 ml-2"></span>
        </div>
      </div>
    </div>
  );
};

export default LoggedInBar;
