import React from "react";
import CardGrid from "./CardGrid";
import image1 from '../assets/A TALE OF HUMAN EXISTENCE.jpg'
import image2 from '../assets/Fatal FAtes.jpg'
import img from '../assets/Letter to the unknown.jpg'
import img1 from '../assets/Forever in My Heart.jpg'
import img2 from '../assets/Letter to the unknown.jpg'
const Stories = ({ selectedCategory, categories }) => {
  // Define your card data here
  const data = {
        'Sci-Fi + Fantasy': [
      {
        title: "Journey to the Stars",
        author: "John Doe",
        image: img,
        content: "An epic adventure that takes a crew on a dangerous mission to explore uncharted territories of the galaxy. Will they survive the perils?"
      },
      {
        title: "The Galactic War",
        author: "Jane Doe",
        image: image2,
        content: "In the distant future, two factions wage war for control of the universe. Amidst the chaos, one hero rises to change the fate of billions."
      },
      // Add more cards as needed...
    ],
    'All Latest': [
      {
        title: "Three Tickets to Telluride",
        author: "Nikki Lynn Blakely",
        image: image2,
        content: "This is a riveting historical fiction about three women who board a train to Telluride, unaware of the journey that will change their lives forever."
      },
      {
        title: "To Join a Brotherhood",
        author: "MM Schreier",
        image: img1,
        content: "A story of loyalty, betrayal, and courage in the face of adversity. Set in medieval Europe, this tale explores the journey of a young knight."
      },
    ],
    'Young Adult': [
      {
        title: "ypung and ad",
        author: "John Doe",
        image: img2,
        content: "An epic adventure that takes a crew on a dangerous mission to explore uncharted territories of the galaxy. Will they survive the perils?"
      },
      {
        title: "The Galactic War",
        author: "Jane Doe",
        image: "https://your-image-url.com/scifi2.jpg",
        content: "In the distant future, two factions wage war for control of the universe. Amidst the chaos, one hero rises to change the fate of billions."
      },
    ],
    // Other categories...
  };

  return (
    <CardGrid 
      selectedCategory={selectedCategory} 
      categories={categories} 
      data={data} // Pass data prop
      enforceFourCardsPerRow={true} 
      showSeeAllButton={true}
    />
  );
};

export default Stories;


// const data = {
//     'All Latest': [
//       {
//         title: "Three Tickets to Telluride",
//         author: "Nikki Lynn Blakely",
//         image: "https://your-image-url.com/all-latest1.jpg",
//         content: "This is a riveting historical fiction about three women who board a train to Telluride, unaware of the journey that will change their lives forever."
//       },
//       {
//         title: "To Join a Brotherhood",
//         author: "MM Schreier",
//         image: "https://your-image-url.com/all-latest2.jpg",
//         content: "A story of loyalty, betrayal, and courage in the face of adversity. Set in medieval Europe, this tale explores the journey of a young knight."
//       },
//       // Add more cards as needed...
//     ],
//     'Sci-Fi + Fantasy': [
//       {
//         title: "Journey to the Stars",
//         author: "John Doe",
//         image: "https://your-image-url.com/scifi1.jpg",
//         content: "An epic adventure that takes a crew on a dangerous mission to explore uncharted territories of the galaxy. Will they survive the perils?"
//       },
//       {
//         title: "The Galactic War",
//         author: "Jane Doe",
//         image: "https://your-image-url.com/scifi2.jpg",
//         content: "In the distant future, two factions wage war for control of the universe. Amidst the chaos, one hero rises to change the fate of billions."
//       },
//       // Add more cards as needed...
//     ],
//     'Sci-Fi + Fantasy': [
//       {
//         title: "Journey to the Stars",
//         author: "John Doe",
//         image: "https://your-image-url.com/scifi1.jpg",
//         content: "An epic adventure that takes a crew on a dangerous mission to explore uncharted territories of the galaxy. Will they survive the perils?"
//       },
//       {
//         title: "The Galactic War",
//         author: "Jane Doe",
//         image: "https://your-image-url.com/scifi2.jpg",
//         content: "In the distant future, two factions wage war for control of the universe. Amidst the chaos, one hero rises to change the fate of billions."
//       },
//       // Add more cards as needed...
//     ],
//     'Young Adult': [
//       {
//         title: "ypung and ad",
//         author: "John Doe",
//         image: "https://your-image-url.com/scifi1.jpg",
//         content: "An epic adventure that takes a crew on a dangerous mission to explore uncharted territories of the galaxy. Will they survive the perils?"
//       },
//       {
//         title: "The Galactic War",
//         author: "Jane Doe",
//         image: "https://your-image-url.com/scifi2.jpg",
//         content: "In the distant future, two factions wage war for control of the universe. Amidst the chaos, one hero rises to change the fate of billions."
//       },
//       // Add more cards as needed...
//     ],
//     'Award Winners': [
//       {
//         title: "The Blades of Ana Velasquez",
//         author: "Alexa T. Dodd",
//         image: "https://your-image-url.com/award-winner1.jpg",
//         content: "Winner of the Short Story Award: The Aftermath"
//       },
//       {
//         title: "A Seamstress Joins a Bodice to a Skirt",
//         author: "Amelia M. Burton",
//         image: "https://your-image-url.com/award-winner2.jpg",
//         content: "Winner of the Romance Challenge"
//       },
//       {
//         title: "#83: Kimberly Frank Is a Skank",
//         author: "Sharon Inkpen",
//         image: "https://your-image-url.com/award-winner3.jpg",
//         content: "Winner of the Through the Looking Glass Challenge"
//       },
//       {
//         title: "The Bird Bag",
//         author: "Karen Elizabeth",
//         image: "https://your-image-url.com/award-winner4.jpg",
//         content: "Winner of the Young Adults Write YA Contest"
//       },
//       {
//         title: "All Mad Here",
//         author: "Emi Davis",
//         image: "https://your-image-url.com/award-winner5.jpg",
//         content: "Winner of the Young Adults Write YA Contest"
//       },
//       {
//         title: "Tears Like Summer Rain",
//         author: "Rose Rasor",
//         image: "https://your-image-url.com/award-winner6.jpg",
//         content: "Winner of the Young Adults Write YA Contest"
//       },
//       {
//         title: "What The Living Carry",
//         author: "Andy Boyle",
//         image: "https://your-image-url.com/award-winner7.jpg",
//         content: "Winner of the Novel Excerpt Contest"
//       },
//       {
//         title: "Chapter 1: Ahalya: A Novel Excerpt from Untouchable",
//         author: "Jordan Legg",
//         image: "https://your-image-url.com/award-winner8.jpg",
//         content: "Winner of the Novel Excerpt Contest"
//       }
//     ]
//   };