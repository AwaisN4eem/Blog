import React, { useState } from "react";

const CardGrid = ({ selectedCategory, categories, enforceFourCardsPerRow }) => {
  const data = {
    'Sci-Fi + Fantasy': [
      {
        title: "Be The Optimal You",
        author: "Irene Jiang",
        image: "https://your-image-url.com/scifi1.jpg",
        content: "Explore the consequences of optimization in a dystopian future."
      },
      {
        title: "Mercy Kill",
        author: "Kristina Atkins",
        image: "https://your-image-url.com/scifi2.jpg",
        content: "A difficult choice in a war-torn world."
      },
      {
        title: "Safe Harbor",
        author: "Amy L. Bernstein",
        image: "https://your-image-url.com/scifi3.jpg",
        content: "Finding safety in an unforgiving galaxy."
      },
      {
        title: "We All Become the Bedrock",
        author: "Akis Linardos",
        image: "https://your-image-url.com/scifi4.jpg",
        content: "A tale of survival in harsh conditions."
      },
      {
        title: "So Many Seasons",
        author: "Heather Kamins",
        image: "https://your-image-url.com/scifi5.jpg",
        content: "A story of life's fleeting moments."
      },
      {
        title: "Crass",
        author: "Hiria Dunning",
        image: "https://your-image-url.com/scifi6.jpg",
        content: "An exploration of identity and transformation."
      },
      {
        title: "Mother Mollusk",
        author: "Marisca Pichette",
        image: "https://your-image-url.com/scifi7.jpg",
        content: "Deep-sea creatures rise to reclaim their world."
      },
      {
        title: "Remembering Day",
        author: "Vanessa Fogg",
        image: "https://your-image-url.com/scifi8.jpg",
        content: "Memories of a lost civilization come to life."
      },
      {
        title: "Chapter 1: Ahalya",
        author: "Jordan Legg",
        image: "https://your-image-url.com/scifi9.jpg",
        content: "An excerpt from a powerful novel."
      },
      {
        title: "P011Y: A Novel Excerpt",
        author: "Mathew Lebowitz",
        image: "https://your-image-url.com/scifi10.jpg",
        content: "A glimpse into a technologically advanced future."
      },
      {
        title: "They Will Outlast Everything",
        author: "Matt Hornsby",
        image: "https://your-image-url.com/scifi11.jpg",
        content: "Endurance in the face of overwhelming odds."
      },
      {
        title: "Four Souls on a Broken Sea",
        author: "Andrew Knighton",
        image: "https://your-image-url.com/scifi12.jpg",
        content: "A story of survival on a shattered planet."
      }
    ],
    // Add other categories as needed...
  };

  const categoryData = data[selectedCategory] || data['Sci-Fi + Fantasy'];
  const selectedCategoryInfo = categories.find(cat => cat.name === selectedCategory);
  const borderColor = selectedCategoryInfo ? selectedCategoryInfo.borderColor : 'border-gray-500';

  // State to control how many cards are displayed initially
  const [visibleCards, setVisibleCards] = useState(12); // Show 12 cards initially

  // Function to load more cards
  const loadMoreCards = () => {
    setVisibleCards(prevVisible => prevVisible + 12); // Load 12 more cards on click
  };

  // Truncate content for hover
  const truncateContent = (content) => {
    return content.split(" ").slice(0, 20).join(" ") + "...";
  };

  return (
    <div className="bg-gray-800 w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 w-full">
        {categoryData.slice(0, visibleCards).map((card, index) => (
          <div
            key={index}
            className={`relative w-60 h-60 flex-shrink-0 rounded-md overflow-hidden border-4 ${borderColor} transition-all duration-300 transform hover:scale-105 group cursor-default`}
          >
            {/* Card image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
            />

            {/* Author and title (default) + content on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white text-center p-4 transition-opacity duration-300">
              {/* Default display of title and author */}
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
          className="mt-4 px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CardGrid;
