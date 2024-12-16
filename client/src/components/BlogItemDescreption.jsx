import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogItemDescription = ({ data }) => {
  const { isContest = false, title, sections } = data;

  return (
    <>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-orange-500 text-2xl'>{title}</h1>
            {isContest && (
              <p className='ml-4 text-[#bf0000]'>
                {sections.find(sec => sec.heading === 'Deadline')?.content}
              </p>
            )}
          </div>
          <div className='flex items-center space-x-4 w-60 mr-20'>
            <p>Share:</p>
            <div className='flex gap-3'>
              <button style={socialButtonStyle}><TiSocialFacebook size={30} /></button>
              <button style={socialButtonStyle}><FaTwitter size={30} /></button>
              <button style={socialButtonStyle}><FaLinkedinIn size={30} /></button>
            </div>
            <button style={followButtonStyle}>Follow</button>
          </div>
        </div>
          
          <div className='m-11'>
          {sections
        .filter(section => section.heading !== 'Deadline') // Filter out the Deadline section
        .map((section, index) => (
          <div key={index}>
            <h3 className='font-semibold text-black mb-1'>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        ))}
          </div>
        </>
  );
};

// Styling for social buttons
const socialButtonStyle = {
  backgroundColor: '#f0f0f0',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

// Styling for the Follow button
const followButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  marginLeft: '20px',
  cursor: 'pointer'
};

export default BlogItemDescription;
