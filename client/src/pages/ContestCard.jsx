import React from 'react';
import ContestCard from '../components/ContestCard'; // Assuming it's in the same folder
import FeaturedWriting from '../components/FeaturedWriting';
import Nav from '../components/Nav'
import GeneralGuidelines from '../components/GeneralGuideline';
import Footer from '../components/P_Footer';

const ContestSection = () => {
  return (
    <>
    <Nav bgColor='bg-[#E5E4E2]' ItemsColor='black' />
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">Current Contests</h1>

      {/* Horror Challenge Card */}
      <ContestCard
        title="Horror Challenge"
        subtitle="Judged by Uncharted Editors"
        dateRange="October 03 – October 16, 2024"
        description="It's time for our horror writers to send us something that has us reaching for the light switch, making our hearts race, and scaring us so much that we see the world in a new and creepy way. And to make things extra spooky, we’re only giving you 13 (un)lucky days to submit for this [...]"
        prize="Awarding $500 + Publication"
        judge="Judged by Uncharted Editors"
        image="https://www.unchartedmag.com/wp-content/uploads/2024/10/UC_HorrorChallenge24-1.jpg" // Replace with actual image URL
        bgColor="orange-500"
      />

      {/* Novel Excerpt Contest Card */}
      <ContestCard
        title="Novel Excerpt Contest"
        subtitle="Judged by Laird Barron"
        dateRange="October 17 – December 15, 2024"
        description="We invite writers to submit to the Uncharted Magazine Novel Excerpt Prize from October 17 to December 15, 2024. Whether your manuscript is complete or not, we want to read the best writing from your work in progress. We love the rush of reading a writer's best scenes, their intriguing plots and turns of [...]"
        prize="Awarding $3,000"
        judge="Guest Judge: Laird Barron"
        image="https://www.unchartedmag.com/wp-content/uploads/2024/10/5_720.jpg" // Replace with actual image URL
        bgColor="orange-500"
      />
    </div>
    <FeaturedWriting/>
    <GeneralGuidelines/>
    <Footer/>

    </>
  );
};

export default ContestSection;
