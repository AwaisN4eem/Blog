import React from 'react';

const FloatingMask = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('../src/assets/Black\ and\ Silver\ Star\ Dust\ Love\ Facebook\ Cover.png')` }}
    >
      {/* Top Mask Image */}

      {/* Transparent Middle Section with Content */}
      <div className="z-10 text-center text-white p-6 rounded-lg mt-60">
        <h1 className="text-4xl font-extrabold">Submit Your Story</h1>
        <p className="mt-4 text-lg font-semibold">
          Share your writing with us! We want stories from the three genre categories: sci-fi/fantasy, horror/thriller, historical fiction, young adult.
        </p>
        <button className="mt-6 bg-[#BF0000] text-white px-4 py-2 rounded-full">SUBMIT</button>
      </div>

      {/* Bottom Mask */}
      <img
        src="https://www.unchartedmag.com/wp-content/themes/uncharted/images/uncharted-bottom-mask-home.png"
        alt="Bottom Mask"
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '70px' }} // Ensure the height is proportional
      />
    </div>
  );
};

export default FloatingMask;
