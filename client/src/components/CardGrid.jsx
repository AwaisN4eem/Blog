import React, { useState } from "react";

const CardGrid = ({ selectedCategory, categories, data, enforceFourCardsPerRow, showSeeAllButton }) => {
  const categoryData = data[selectedCategory] || [];
  const selectedCategoryInfo = categories.find(cat => cat.name === selectedCategory);
  const borderColor = selectedCategoryInfo ? selectedCategoryInfo.borderColor : 'border-orange-500';

  // State to control how many cards are displayed initially
  const [visibleCards, setVisibleCards] = useState(12);

  // Function to load more cards
  const loadMoreCards = () => {
    setVisibleCards(prevVisible => prevVisible + 16);
  };

  // Truncate content for hover
  const truncateContent = (content) => {
    return content.split(" ").slice(0, 20).join(" ") + "...";
  };

  // Conditional grid class based on the enforceFourCardsPerRow flag
  const gridClass = enforceFourCardsPerRow ? "grid-cols-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  // Conditionally add justify-center if there are fewer than 4 cards
  const gridJustifyClass = categoryData.length < 4 ? "justify-center" : "";


  return (
    <div className="bg-white w-full flex flex-col items-center">
      <div className={`grid ${gridClass} ${gridJustifyClass} gap-2 p-8 w-full`}>
        {categoryData.slice(0, visibleCards).map((card, index) => (
          <div
            key={index}
            className={`relative w-72 h-72 flex-shrink-0 rounded-md overflow-hidden border-4 ${borderColor} transition-all duration-300 transform hover:scale-105 group cursor-default`}
          >
            {/* Card image */console.log(card.image)}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
            />

            {/* Author and title (default) + content on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white text-center p-4 transition-opacity duration-300">
              <h2 className="text-lg font-semibold group-hover:hidden">{card.title}</h2>
              <p className="text-sm group-hover:hidden">{card.author}</p>

              {/* Hover display of content */}
              <p className="text-sm hidden group-hover:block">
                {truncateContent(card.content)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCards < categoryData.length && (
        <button
          onClick={loadMoreCards}
          className="mt-4 px-6 py-2 bg-[#BF0000] text-white font-semibold rounded-md hover:bg-orange-700 transition"
        >
          Load More
        </button>
      )}

      {/* See All Button */}
      {showSeeAllButton && (
        <button
          onClick={() => console.log(selectedCategoryInfo.color)} // Add your own action here
          className={`mt-4 px-6 py-2 font-semibold ${selectedCategory === 'Award Winners' ? 'text-orange-500' : selectedCategoryInfo?.color} rounded-md hover:opacity-50 transition`}
        >
          See All {selectedCategory}
        </button>
      )}
    </div>
  );
};

export default CardGrid;
