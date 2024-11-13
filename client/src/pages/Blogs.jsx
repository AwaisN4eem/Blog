import React from "react";
import CardGrid from "../components/CardGrid";
import Nav from "../components/Nav"
import FloatingMask from "../components/MaskOverFlow";
import LatestContests from "../components/LatestContest";
import Footer from "../components/P_Footer";
import ArticleList from "../components/ArticlesList";
import ContributorsSection from "../components/ContributionsNews";

const Blogs = () => {
  const categories = [
    { name: 'Sci-Fi + Fantasy', color: 'text-orange-500', borderColor: 'border-blue-500' }
  ];

  // Define your blog post data here
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
    ]
  };

  return (
    <>
    <Nav bgColor='black'/>
    <h1 className='pl-10 pt-10 text-2xl text-white font-bold bg-gray-800'>
    Sci-Fi + Fantasy
    </h1>
    <CardGrid 
      selectedCategory="Sci-Fi + Fantasy" 
      categories={categories} 
      data={data} // Pass the blog data prop
      enforceFourCardsPerRow={true} 
      showSeeAllButton={false} // Don't show the See All button in Blogs
    />
    <FloatingMask/>

    <ContributorsSection/>
    <LatestContests/>
    <Footer/>
    </>
  );
};

export default Blogs;
