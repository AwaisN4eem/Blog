import React from 'react';

const ContestCard = ({ title, subtitle, dateRange, description, prize, judge, image, bgColor }) => {
  return (
    <div className={`flex flex-col md:flex-row items-stretch bg-${bgColor} p-6 mb-8 rounded-lg shadow-md`}>
      {/* Image Section */}
      <div className="md:w-1/2 w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${image})` }}>
        <div className="h-64 md:h-auto"></div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full p-4 text-white">
        <h2 className="text-2xl font-bold uppercase">{title}</h2>
        <h3 className="mt-2 uppercase">{subtitle}</h3>
        <p className="mt-2 text-sm">{dateRange}</p>
        <p className="mt-4 text-md leading-relaxed">{description}</p>
        <p className="mt-4 text-sm font-bold">{prize}</p>
        <p className="mt-2 text-sm">{judge}</p>

        {/* Buttons */}
        <div className="mt-6">
          <button className="mr-4 px-4 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-200">Learn More</button>
          <button className="px-4 py-2 bg-{transparent} border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
