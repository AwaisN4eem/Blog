import React from 'react';

const StripedArticles = () => {
  const articles = [
    {
      title: "Horror Challenge",
      image: "https://www.unchartedmag.com/wp-content/uploads/2024/10/UC_HorrorChallenge24-1-300x300.jpg",
      content: "This challenge is now closed. Thank you to everyone who submitted. We will have the results in the next 10-14 weeks. It’s time for our horror writers to send us something that has us reaching for the light switch, making our hearts race, and scaring us so much that we see the world in a […]",
      link: "https://www.unchartedmag.com/horror-challenge/"
    },
    {
      title: "A Conversation with Jenny Torres-Sanchez",
      image: "https://via.placeholder.com/300",  // Placeholder image (replace with an actual image)
      content: "Originally published in Fantastic Floridas by Burrow Press When I saw the premise for Jenny Torres Sanchez’s latest novel, Because of the Sun, I knew I had to read it. The novel features a complicated protagonist, captivating language and, best of all, a bear attack that takes place in Orlando. When I visited ALA over […]",
      link: "https://www.unchartedmag.com/a-conversation-with-jenny-torres-sanchez/"
    },
    {
      title: "Another Interesting Article",
      image: "https://via.placeholder.com/300",  // Placeholder image (replace with an actual image)
      content: "This article discusses fascinating topics that captivate the reader's attention. It's a must-read for anyone interested in the subject matter.",
      link: "https://www.example.com/another-article/"
    },
    // Add more articles as needed
  ];
  return (
    <div className='bg-gray-700'>
    <h1 className='ml-10 pt-10 text-2xl text-white font-bold'>
      Latest News
    </h1>
      <div className="striped m-10 bg-gray-500">
        {articles.map((article, index) => (
          <article key={index} className="sm:flex p-4 relative border-b last:border-b-0">
            {article.image && (
              <img
                width="300"
                height="300"
                src={article.image}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto md:mr-6 md:ml-0 mb-2"
                alt={article.title}
                decoding="async"
                loading="lazy"
              />
            )}
            <div>
              <h2 className="text-xl font-proximanova">{article.title}</h2>
              <p>{article.content}</p>
              <div className="inline-block uppercase font-proximanova border-b-2 border-white">
                Read now
              </div>
            </div>
            <a
              className="absolute inset-0 block opacity-0 bg-white hover:opacity-20"
              href={article.link}
            >
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default StripedArticles;
