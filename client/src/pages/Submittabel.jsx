import React, { useContext } from 'react';
import LoggedInBar from '../components/LoggedInBar';
import coverimage from '../assets/27 (981).png';
import BlogItemDescription from '../components/BlogItemDescreption';
import AuthButtonContainer from '../components/AuthButtonContainer';
import SubmittaleCoverImage from '../components/SubmittaleCoverImage';
import SubmissionForm from '../components/SubmissionForm';
import Nav from '../components/Nav'
import Footer from '../components/P_Footer';
import { UserContext } from '../context/UserContext';
import { useLocation } from 'react-router-dom';

const Submittable = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const { name, sections } = location.state || {};
  const validCategories = ["Sci-Fi + Fantasy", "Horror + Thriller", "Historical Fiction", "Young Adult"];

  return (
    <>
      {/* <LoggedInBar/> */}
      <Nav  bgColor='bg-[#E5E4E2]' ItemsColor='black'/>
      {/* <SubmittaleCoverImage/> */}
      <div className="App Coverbackground">
    </div>
      <div className='m-14' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Get the data of gener from the file/database and send it in the data */}
      <BlogItemDescription
      data={{
          isContest: false,
          name: name || "Default Title",
          sections: sections || []
        }}
      />

      {/* Conditionally render based on user login status and valid category */}
      {user && validCategories.includes(name) ? (
        <SubmissionForm category={name} />
      ) : (
        <AuthButtonContainer />
      )}
      </div>
      <Footer/>
    </>
  );
};

export default Submittable;
