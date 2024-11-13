import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#E5E4E2] text-black py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        <div className="md:w-[50%] ">
          <div className="flex items-center">
            <div className="bg-orange-600 px-2 py-1 mr-2">
              <span className="text-black font-bold">UN</span>
            </div>
            <div>
              <span className="text-black font-bold text-xl">CHARTED</span>
            </div>
          </div>
          <p className="mt-4">
            Uncharted is a space for outstanding stories. We publish new work every week from emerging and established authors through our always free / always open / always paid category, and we run prestigious contests with great judges to offer significant awards and attention for our authors.
          </p>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-2">Subscribe to our newsletter and stay updated.</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="w-full mt-4 px-4 py-2 bg-gray-700 hover:bg-orange-600 rounded-md text-white font-semibold">
              SUBSCRIBE
            </button>
            <p className="text-gray-500 text-sm mt-2">
              Provide your email address to subscribe. For e.g abc@xyz.com
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-6 md:px-12 border-t border-gray-700 pt-6 flex justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter">
            <FaTwitter/>
            </i> TWITTER
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram">
            <BsInstagram/>
            </i> INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
