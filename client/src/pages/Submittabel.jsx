import React from 'react';
import LoggedInBar from '../components/LoggedInBar';
import coverimage from '../assets/27 (981).png';
import MagSumbitttable from '../components/Unchartedmag';
import AuthButtonContainer from '../components/AuthButtonContainer';
import SubmittaleCoverImage from '../components/SubmittaleCoverImage'
const Submittable = () => {
  return (
    <>
    <LoggedInBar/>
    <SubmittaleCoverImage/>
    <MagSumbitttable/>
    <AuthButtonContainer/>

    </>
  );
};

export default Submittable;
