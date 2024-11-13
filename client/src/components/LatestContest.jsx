import React from 'react';

const LatestContests = () => {
  return (
    <div className='bg-white pt-16 pb-16'>
    <div className="md:grid md:grid-cols-2 mx-auto max-w-6xl bg-[rgb(29,31,35)] text-white">
      {/* Text Section */}
      <div className="flex">
        <div className="m-auto p-4 sm:p-8 md:p-16 text-xl">
          {/* Heading */}
          <h2 className="font-proximanova text-4xl pb-2">Latest Contests</h2>
          {/* Description */}
          <p>
            Get the guidelines on our current contests, where we offer writers
            premier opportunities for publication and payment. All winners
            selected by noted guest judges.
          </p>
          {/* Button */}
          <div className="mt-4">
            <a href="/category/contests/" className="bg-[#BF0000] text-white py-2 px-4 rounded">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-first md:order-last">
        <div className="relative inline-block">
          {/* Border Background */}
          <div className="absolute block bg-[#BF0000] top-2 left-3 -right-3 -bottom-2"></div>
          {/* Image */}
          <img
            src="	https://www.unchartedmag.com/wp-content/uploads/2021/08/contests.jpg"
            alt="Contest Image"
            className="relative"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default LatestContests;
