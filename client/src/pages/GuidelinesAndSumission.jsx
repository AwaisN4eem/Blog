import React from "react";
import Guidelines from "../components/Guidelines";
import SubmissioBottonGuideline from "../components/SubmissionBottonGuideline";
import SubmittableFooter from "../components/SubmittableFooter";
import LoggedInBar from "../components/LoggedInBar";
// import SubmittableCoverImage from "../components/SubmittaleCoverImage";
import categories from "../data/categoriesData";
import { useNavigate } from 'react-router-dom';

const GuidelineAndSubmission = () => {
  const navigate = useNavigate();

  const handleSubmissionClick = (category) => {
    navigate('/submittable', { state: category });
  };

  return (
    <>
      <LoggedInBar />
      {/* <SubmittableCoverImage /> */}
      <Guidelines />
      <div>
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleSubmissionClick(category)}>
            <SubmissioBottonGuideline
              title={category.title}
              sections={category.sections}
            />
          </div>
        ))}
      </div>
      <SubmittableFooter />
    </>
  );
};

export default GuidelineAndSubmission;
