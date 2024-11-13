import React from 'react';

const ContributorsSection = () => {
  const contributors = [
    {
      name: 'Kate Maruyama',
      description: "Kate Maruyama's novel Harrowgate was published by 47North, and her novella Family Solstice, named Best Fiction Book of 2021 by Rue Morgue Magazine was published by Omnium Gatherum. Her short work has appeared in Asimov's Magazine, Analog Science Fiction & Fact, Entropy, Duende, Cultural Weekly, and in numerous anthologies including December Tales, Halloween Carnival Three, and Gathering: A Women Who Submit Anthology.",
      link: '/author/kate-maruyama',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Christina Kann',
      description: 'Christina Kann is a lifelong writer and reader, podcaster, traveler, gardener, hiker, cat mom, and generally okay human being. She is also the co-founder and communications director of Wildling Press. She lives and thrives in Richmond, Virginia, with her husband, their two cats, and their several foster kittens.',
      link: '/author/christina-kann',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Alejandro Gutierrez',
      description: "Alejandro is a writer and storyteller from the Seattle area. He self-published his first book, The Rat Tunnels of Isfahan, in 2017. Then, in 2021, he won second place in Vocal Media’s Summer Fiction Series challenge for his story ‘Grandmother’s Hands.’",
      link: '/author/alejandro-gutierrez',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',
    },
    {
      name: 'Linda H. Codega',
      description: 'Linda H. Codega (they/them) is a queer, nonbinary Southerner living in Yankeeland. They write about pop culture for io9, and their writing appears on Polygon, Observer, Tor.com, and Dicebreaker, among others.',
      link: '/author/linda-h-codega',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Patrick Hurley',
      description: "Patrick Hurley is a 2017 graduate of the Taos Toolbox Writer's Workshop and a member of SFWA, Codex, and the Dreamcrashers.",
      link: '/author/patrick-hurley',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Francis Bass',
      description: "Francis Bass is a writer living in Philadelphia. His writing has appeared in Reckoning, Electric Literature, and others, and he has self-published many other works.",
      link: '/author/francis-bass',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Anja Hendrikse Liu',
      description: 'Anja Hendrikse Liu (she/they) is a creator and devourer of fantasy and sci-fi who wishes she had time and words for all of her dreams.',
      link: '/author/anja-hendrikse-liu',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
    {
      name: 'Nina Simon',
      description: 'Nina Simon writes crime stories about strong women. Her first novel, MOTHER-DAUGHTER MURDER NIGHT, will be published by William Morrow in September 2023.',
      link: '/author/nina-simon',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',

    },
  ];

  const newsItems = [
    {
      title: 'AI Challenge Winner',
      description: 'The winner is “More Than Electric Sheep” by Paul Martz! Congrats to all of the writers that made this shortlist!',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/08/AI_WINNERS-300x300.jpg',
      link: 'https://www.unchartedmag.com/ai-challenge-winner/',
    },
    {
      title: 'Young Adults Write YA Contest',
      description: 'This contest is now closed. Thank you for your submissions! Young Adult literature is a cutting-edge and captivating genre.',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/12/VY_YoungAdultsWriteYAContest-300x300.png',
      link: 'https://www.unchartedmag.com/young-adults-write-ya-contest/',
    },
    {
      title: 'Uncharted Magazine Short Story Award',
      description: 'For this contest, we’ve got 15 stories we loved! We’ve handed over the hard decisions to find the winners to our judge, A. C. Wise!',
      imageUrl: 'https://www.unchartedmag.com/wp-content/uploads/2023/10/UC_SSAAftermath_SHORTLIST-1-300x300.jpg',
      link: 'https://www.unchartedmag.com/uncharted-magazine-short-story-award-the-aftermath-judged-by-a-c-wise-shortlist/',
    },
  ];

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2 mx-8">
      {/* Contributors */}

      {contributors.length > 0 && ( 
        <div className="bg-orange-500 text-white">
          <div className="block bg-primary p-4 font-proximanova w-full text-3xl">Featured Contributors</div>
            <div className="striped">
              {contributors.map((contributor, index) => (
                <article key={index} className="flex p-4 relative">
                <img
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto md:mr-6 md:ml-0 mb-2"
                  />
                  <div>
                    <h2 className="text-xl font-proximanova">{contributor.name}</h2>
                    <p>{contributor.description}</p>
                    <a className="inline-block font-proximanova text-white uppercase pt-2 border-b-2 border-white" href={contributor.link}>
                      See Their Work
                    </a>
                  </div>
                  <a className="absolute inset-0 block opacity-0 bg-white hover:opacity-20" href={contributor.link}>
                    {/* {contributor.name} */}
                  </a>
                </article>
              ))}
            </div>
       </div>
      )}

      {/* Latest News */}
      <div className="bg-gray-500">
        <div className="block p-4">
          <h3 className="font-proximanova text-3xl">Latest News</h3>
        </div>
        <div className="striped">
          {newsItems.map((newsItem, index) => (
            <article key={index} className="sm:flex p-4 relative">
              <img
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto md:mr-6 md:ml-0 mb-2"
              />
              <div>
                <h2 className="text-xl font-proximanova">{newsItem.title}</h2>
                <p>{newsItem.description}</p>
                <div className="inline-block uppercase font-proximanova border-b-2 border-white">Read now</div>
              </div>
              <a className="absolute inset-0 block opacity-0 bg-white hover:opacity-20" href={newsItem.link}>
                {/* {newsItem.title} */}
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
