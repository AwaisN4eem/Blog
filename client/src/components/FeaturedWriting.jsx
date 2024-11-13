import React from 'react';

const FeaturedWriting = () => {
  const sections = [
    {
      title: "SCI-FI & FANTASY",
      description: `Uncharted Magazine publishes Science Fiction/Fantasy Short Stories from fiction writers of any background or experience. We want stories that richly imagine the future of technology and science that explore our world through a speculative lens. We want stories of fantasy that make us hunger for new worlds, new biomes, and new places we can explore through thrilling sensory details and human empathy. We want stories that thrill us, make us feel alive, and awaken our desire to explore and go on adventures.`,
    },
    {
      title: "THRILLER & MYSTERY",
      description: `Uncharted Magazine publishes Thriller/Mystery Short Stories from fiction writers of any background or experience. We are rolling Horror stories into this category! We want stories that keep us up at night, afraid to turn the corner. Stories that take us into the resonant fear of looming monsters and haunting ghosts. We want stories that thrill us by keeping us on the edges of our seats, hearts pounding, wondering how it will end! Stories with characters who refuse to stay in the shadows! We want stories that thrill us, make us feel alive, and awaken our desire to explore and go on adventures. We want stories of mystery that make us search for answers, for reasons, for the things that happen in the shadows.`,
    },
    {
      title: "HISTORICAL FICTION",
      description: `Uncharted Magazine is excited to introduce a new submission category for publication in our magazine. We’re looking for stories that engage deeply with history. We want your characters to interact with infamous people of history, dwell deeply in past eras, and show us how the world used to operate and what lessons we can learn. We want history brought to life on our pages.`,
    },
    {
      title: "YOUNG ADULT",
      description: `Voyage YA by Uncharted

      Fiction: We are looking for short stories that surprise, inspire, entertain, or enlighten. 
      Creative Nonfiction: We are looking for personal stories that capture the nature of the teen experience. True stories that read like fiction are preferred. We read widely in YA, and we’re simply looking for a well-told personal story.

      Three-Sentence Stories: Submit your three-sentence YA story for a chance to be featured on our Instagram page, @VoyageYA.`,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">Featured Writing: Always Free, Always Paid</h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-8 border-b border-gray-600 pb-4 text-center w-[40%] mx-auto">
          <h2 className="text-xl font-bold text-black">{section.title}</h2>
          <p className="text-black mt-2">{section.description}</p>
          <a href='#' className='text-[#BF0000] hover:underline'>
            Submit
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWriting;
