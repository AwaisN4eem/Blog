import React from "react";
import CardGrid from "./CardGrid";

const AwardWinner = () => {
  const categories = [
    { name: 'Award Winners', color: 'text-black', borderColor: 'border-orange-500' }
  ];

  // Define your award winner card data here
  const data = {
    'Award Winners': [
      {
        title: "The Blades of Ana Velasquez",
        author: "Alexa T. Dodd",
        image: "https://your-image-url.com/award-winner1.jpg",
        content: "Winner of the Short Story Award: The Aftermath"
      },
      {
        title: "A Seamstress Joins a Bodice to a Skirt",
        author: "Amelia M. Burton",
        image: "https://your-image-url.com/award-winner2.jpg",
        content: "Winner of the Romance Challenge"
      },
      {
        title: "#83: Kimberly Frank Is a Skank",
        author: "Sharon Inkpen",
        image: "https://your-image-url.com/award-winner3.jpg",
        content: "Winner of the Through the Looking Glass Challenge"
      },
      {
        title: "The Bird Bag",
        author: "Karen Elizabeth",
        image: "https://your-image-url.com/award-winner4.jpg",
        content: "Winner of the Young Adults Write YA Contest"
      },
      {
        title: "All Mad Here",
        author: "Emi Davis",
        image: "https://your-image-url.com/award-winner5.jpg",
        content: "Winner of the Young Adults Write YA Contest"
      },
      {
        title: "Tears Like Summer Rain",
        author: "Rose Rasor",
        image: "https://your-image-url.com/award-winner6.jpg",
        content: "Winner of the Young Adults Write YA Contest"
      },
      {
        title: "What The Living Carry",
        author: "Andy Boyle",
        image: "https://your-image-url.com/award-winner7.jpg",
        content: "Winner of the Novel Excerpt Contest"
      },
      {
        title: "Chapter 1: Ahalya: A Novel Excerpt from Untouchable",
        author: "Jordan Legg",
        image: "https://your-image-url.com/award-winner8.jpg",
        content: "Winner of the Novel Excerpt Contest"
      },
      {
        title: "All Mad Here",
        author: "Emi Davis",
        image: "https://your-image-url.com/award-winner5.jpg",
        content: "Winner of the Young Adults Write YA Contest"
      },
      {
        title: "Tears Like Summer Rain",
        author: "Rose Rasor",
        image: "https://your-image-url.com/award-winner6.jpg",
        content: "Winner of the Young Adults Write YA Contest"
      },
      {
        title: "What The Living Carry",
        author: "Andy Boyle",
        image: "https://your-image-url.com/award-winner7.jpg",
        content: "Winner of the Novel Excerpt Contest"
      },
      {
        title: "Chapter 1: Ahalya: A Novel Excerpt from Untouchable",
        author: "Jordan Legg",
        image: "https://your-image-url.com/award-winner8.jpg",
        content: "Winner of the Novel Excerpt Contest"
      }
    ]
  };

  return (
    <CardGrid 
      selectedCategory="Award Winners" 
      categories={categories} 
      data={data} // Pass data prop
      enforceFourCardsPerRow={true} 
      showSeeAllButton={true}
    />
  );
};

export default AwardWinner;
