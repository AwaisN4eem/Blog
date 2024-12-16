// import { useState } from 'react';
// import Nav from "../components/Nav";
// import CoverPage from '../components/CoverContent';
// import Footer from '../components/P_Footer';
// import FloatingMask from '../components/MaskOverFlow';
// import AwardWinner from '../components/AwardWinner';
// import LatestContests from '../components/LatestContest';
// import ContributionsNews from '../components/ContributionsNews';
// import Stories from '../components/Stories';
// import '../App.css'

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Latest');

  
//   const categories = [
//     { name: 'All Latest', color: 'text-black', borderColor: 'border-white-500' },
//     { name: 'Sci-Fi + Fantasy', color: 'text-orange-500', borderColor: 'border-blue-500' },
//     { name: 'Horror + Thriller', color: 'text-teal-500', borderColor: 'border-red-500' },
//     { name: 'Historical Fiction', color: 'text-yellow-500', borderColor: 'border-yellow-500' },
//     { name: 'Young Adult', color: 'text-purple-500', borderColor: 'border-purple-500' },
//   ];
  
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <>
//       <div className="App Coverbackground">
//         <Nav/>
//         <CoverPage />
//       </div>
//       {/* Category Text Toggle */}
//       <div id="storiestoggle" className="storiestoggle hidden md:block uppercase font-proximanova text-center py-4 bg-[#E5E4E2] text-black">
//         {categories.map(category => (
//           <span
//             key={category.name}
//             onClick={() => handleCategoryClick(category.name)}
//             className={`cursor-pointer px-4 ${selectedCategory === category.name ? 'underline underline-offset-4 ' : ''} ${category.color} `}
//           >
//             {category.name}
//           </span>
//         ))}
//       </div>

//       {/* Stories component */}
//       <Stories selectedCategory={selectedCategory} categories={categories} />



//       <FloatingMask />
//       {/* Award Winners */}
//       <AwardWinner />

//       {/* Latest Contest */}
//       <LatestContests />
//       {/* Contributions */}
//       <ContributionsNews />

//       <Footer />

//     </>
//   );
// };

// export default App;


import { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import CoverPage from '../components/CoverContent';
import Footer from '../components/P_Footer';
import FloatingMask from '../components/MaskOverFlow';
import AwardWinner from '../components/AwardWinner';
import LatestContests from '../components/LatestContest';
import ContributionsNews from '../components/ContributionsNews';
import Stories from '../components/Stories';
import axios from "axios"
import {IF,URL} from "../url"
import '../App.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL LATEST');
  const [categories, setCategories] = useState([]); // Initialize categories state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log(URL+'/api/categories/');
        const response = await axios.get(URL+'/api/categories/');
        console.log(response.data);
        setCategories(response.data); // Set fetched data to categories state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories(); // Call fetchCategories function
  }, []);

  console.log(categories);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="App Coverbackground">
        <Nav/>
        <CoverPage />
      </div>
      {/* Category Text Toggle */}
      <div id="storiestoggle" className="storiestoggle hidden md:block uppercase font-proximanova text-center py-4 bg-[#E5E4E2] text-black">
        {categories.map(category => (
          <span
            key={category._id} // Use _id as key
            onClick={() => handleCategoryClick(category.category)}
            className={`cursor-pointer px-4 ${selectedCategory === category.category ? 'underline underline-offset-4 ' : ''} text-red`}
          >
            {category.category}
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
