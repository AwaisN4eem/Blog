import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const NovelExcerptPrize = () => {
  return (
    <div className='m-14' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div className='flex content-center'>
          <div>
          <h1 className='text-orange-500 text-2xl'>Uncharted Magazine Novel Excerpt Prize | Judged by Laird Barron | $3000 Awarded!</h1>
          <p className=' ml-4 text-[#bf0000]'>Ends on Mon, Dec 16, 2024 1:00 PM</p>
          </div>
          <div className=' w-60 mr-10' style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <p>Share:</p>
            <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
              <button style={socialButtonStyle}><TiSocialFacebook size={30} /></button>
              <button style={socialButtonStyle}><FaTwitter size={30}/></button>
              <button style={socialButtonStyle}><FaLinkedinIn size={30} /></button>
            </div>
            <button style={followButtonStyle}>Follow</button>
          </div>
        </div>
        <div className='m-11'>
          <p>We invite writers to submit to the Uncharted Magazine Novel Excerpt Prize from October 17 to December 15, 2024.</p>
          <p>Whether your manuscript is complete or not, we want to read the best writing from your work in progress. We love the rush of dipping into a writer’s best scenes, their intriguing plots and turns of phrase, and their elegant and deep world-building. We all have that piece of writing from our current projects that we can’t wait to send out into the world, so let us help you find the perfect home for that particular excerpt of your novel that makes us want to keep reading!</p>
          <p>We’re looking for the best 5,000 words or fewer of your novel in progress! We love to read opening chapters, climaxes, and anything in-between. Give us those scenes full of tension, crackling dialogue, and worlds we’ve never even imagined. Give us a chance to read the most captivating section of your novel—and make us want to read more!</p>
          <p>We’re thrilled to partner with <strong>Laird Barron</strong>, who will choose three prize winners from a shortlist. The three winners of this prize will each receive $1,000 and publication. All entries will be considered for publication.</p>

          <div>
          <p><strong>Laird Barron</strong> spent his early years in Alaska. He is the author of several books, including <em>The Beautiful Thing That Awaits Us All</em>, <em>The Wind Began to Howl</em>, and <em>Not a Speck of Light</em> (Stories). His work has also appeared in many magazines and anthologies. Barron currently resides in the Rondout Valley of New York State writing stories about the evil that men do.</p>
        </div>

        <blockquote style={{ fontStyle: 'italic', margin: '20px 0' }}>
          Submitting tips from Guest Judge Laird Barron: <br />
          “I was raised in rural Alaska. My family didn’t have much except for a library of mismatched paperbacks. Those sacred books ran the gamut from category romance to esoteric philosophy...”
        </blockquote>
      </div>

      <h2>GUIDELINES</h2>
      <ul>
        <li>The deadline for entry is December 15, 2024...</li>
        <li>We will announce the winner and finalists within fourteen weeks...</li>
        <li>For the $20 reading fee...</li>
        {/* Add all other guidelines similarly */}
      </ul>

      
    </div>
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

export default NovelExcerptPrize;
