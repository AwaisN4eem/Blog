import React from 'react';
import LoggedInBar from '../components/LoggedInBar';
import coverimage from '../assets/27 (981).png';
import BlogItemDescription from '../components/BlogItemDescreption';
import AuthButtonContainer from '../components/AuthButtonContainer';
import SubmittaleCoverImage from '../components/SubmittaleCoverImage';
import SubmissionForm from '../components/SubmissionForm';
import Nav from '../components/Nav'
import Footer from '../components/P_Footer';
const Submittable = () => {
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
          title: "Voyage YA Three-Sentence Stories",
          sections: [
            {
              heading: "Introduction",
              content: "Introducing Voyage’s newest publication opportunity: Three-Sentence Stories..."
            },
            {
              heading: "Guidelines",
              content: "Stories must be fiction, and exactly three sentences..."
            },
            {
              heading: "Submission Limit",
              content: "Submissions may include up to five three-sentence stories in one document..."
            },
            {
              heading: "Payment",
              content: "We do not pay for Three-Sentence Stories, but we do promote authors on Instagram!"
            },
            {
              heading: "Editorial Feedback",
              content: "Editorial Feedback Letters are not available for Three-Sentence Story submitters."
            },
            {
              heading: "Content Warning",
              content: "To ensure the protection of our volunteer readers, and to keep Voyage a safe space..."
            }
          ]
        }}

      />

      {/* If user is logged in */}
      <SubmissionForm category={"Science"}/>
      {/* if user is not loggedin */}
      <AuthButtonContainer/>
      </div>
      <Footer/>
    </>
  );
};

export default Submittable;
