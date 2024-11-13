import { useState } from 'react';
import Nav from "../components/Nav";
import CoverPage from '../components/CoverContent';
import Footer from '../components/P_Footer';
import FloatingMask from '../components/MaskOverFlow';
import AwardWinner from '../components/AwardWinner';
import LatestContests from '../components/LatestContest';
import ContributionsNews from '../components/ContributionsNews';
import Stories from '../components/Stories';
import '../App.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Latest');

  const categories = [
    { name: 'All Latest', color: 'text-black', borderColor: 'border-white-500' },
    { name: 'Sci-Fi + Fantasy', color: 'text-orange-500', borderColor: 'border-blue-500' },
    { name: 'Horror + Thriller', color: 'text-teal-500', borderColor: 'border-red-500' },
    { name: 'Historical Fiction', color: 'text-yellow-500', borderColor: 'border-yellow-500' },
    { name: 'Young Adult', color: 'text-purple-500', borderColor: 'border-purple-500' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="App Coverbackground">
        <Nav />
        <CoverPage />
      </div>
      {/* Category Text Toggle */}
      <div id="storiestoggle" className="storiestoggle hidden md:block uppercase font-proximanova text-center py-4 bg-[#E5E4E2] text-black">
        {categories.map(category => (
          <span
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`cursor-pointer px-4 ${selectedCategory === category.name ? 'underline underline-offset-4 ' : ''} ${category.color} `}
          >
            {category.name}
          </span>
        ))}
      </div>

      {/* Stories component */}
      <Stories selectedCategory={selectedCategory} categories={categories} />



      <FloatingMask />
      {/* Award Winners */}
      <AwardWinner />

      {/* Latest Contest */}
      <LatestContests />
      {/* Contributions */}
      <ContributionsNews />

      <Footer />

    </>
  );
};

export default App;
