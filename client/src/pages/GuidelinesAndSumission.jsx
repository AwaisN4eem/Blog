// import React from "react";
// import Guidelines from "../components/Guidelines";
// import SubmissioBottonGuideline from "../components/SubmissionBottonGuideline"
// import SubmittableFooter from "../components/SubmittableFooter";
// import LoggedInBar from "../components/LoggedInBar";
// import SubmittableCoverImage from "../components/SubmittaleCoverImage";
// import { RiGhost2Fill } from "react-icons/ri";
// import categories from "../data/categoriesData" 
 

// // const categories = [

// //     {
// //       title: "YA Short Prose",
// //       guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="YA-Short-Prose"><p><strong>Submission Guidelines</strong><br>
// //  **Yes, you have indeed been redirected, correctly, to <em>Uncharted</em>, our new home on Submittable!**<br>
// //  Please read our submission guidelines carefully.&nbsp;</p>
// // <p><em>Voyage</em> simply aims to publish good work and provide a space for new and established voices. To get an idea of what we publish, please read our archives. General submissions are open year-round with no fee to submit.</p>
// // <p>We only accept submissions via our online submission managing system, Submittable. We DO NOT accept submissions via email. Submissions sent via email will be automatically discarded without a response. We accept simultaneous submissions, but please withdraw your work via Submittable if it is accepted elsewhere.</p>
// // <p>Though we consider reprints, please be advised that <em>Voyage </em>doesn't offer payment for work that has been published before. If you are submitting a piece that has been published, please notify us in your submission.&nbsp;</p>
// // <p><em>Voyage</em> pays $200 per accepted, previously unpublished piece of short prose.</p>
// // <p><strong>Fiction:</strong> We are looking for short stories that surprise, inspire, entertain, or enlighten.</p>
// // <p><strong>Creative Nonfiction: </strong>We’re on the hunt for personal essays and other creative nonfiction that specifically relates to the teen experience. Submit your creative nonfiction via our submission manager here. &nbsp;</p>
// // <p><strong>Manuscript Preparation:</strong> Please make sure your manuscript is double-spaced with Times New Roman 12. Submissions should be no more than 6,000 words. Please include the author's name and page number in the top right-hand corner of every page. &nbsp;</p>
// // <p><strong>Note:</strong> To ensure the protection of our volunteer readers, and to keep <em>Voyage</em> a safe space, please let us know in your cover letter if your work can be triggering in any way. This information will have no bearing on your submission or our decision—we just want to ensure the best possible environment for our readers. Thank you for your understanding.&nbsp;</p>
// // <p><strong>Editorial Feedback Options</strong><br>
// // The single feedback letter option costs $69 and will provide you with two pages of detailed and actionable feedback on your submission. The three-letter option will provide three separate letters (two pages each) from three different editors at $179. Our guest editors are paid a significant portion of the fee and all are incredibly astute professionals.</p>
// // <p><em><strong>Voyage</strong></em><strong> Values</strong><br>
// // <em>Voyage YA</em> is committed to diversity and inclusivity. We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation. <em>Voyage</em> has a zero-tolerance policy for any work that is discriminatory or harmful in any way, whether intentional or unintentional. Hate speech of any kind will not be tolerated and any work that violates our values will be immediately declined. <em>Voyage</em> maintains the right to further ban authors if problematic behavior persists and/or deplatform authors should there be problematic behavior via other platforms.</p>
// // <p>As the landscape of publishing changes, <em>Voyage</em> acknowledges that there is still much work to be done. Systemic racism and structural inequality have been problems for a long time, and <em>Voyage</em> will actively work to dismantle them. We have joined the global movement to fight for equality and will consciously work to amplify marginalized voices of authors who have been historically underrepresented in publishing.</p>
// // <p>We urge authors and readers alike to visit some of the resources we have found helpful—and seek out others:<br>
// // &nbsp;</p>
// // <ul>
// //   <li><a href="https://diversebooks.org/" target="_blank" class="link-color sbm-text link accessible-link">We Need Diverse Books</a> and their <a href="https://diversebooks.org/resources/resources-for-writers/" target="_blank" class="link-color sbm-text link accessible-link">resources page for writers</a></li>
// //   <li><a href="https://writingwithcolor.tumblr.com/" target="_blank" class="link-color sbm-text link accessible-link">Writing with Color</a></li>
// //   <li><a href="https://blog.leeandlow.com/2020/01/28/2019diversitybaselinesurvey/" target="_blank" class="link-color sbm-text link accessible-link">Lee &amp; Low 2019 Diversity Survey</a></li>
// //   <li><a href="https://editorsofcolor.com/database/" target="_blank" class="link-color sbm-text link accessible-link">Editors of Color Database &amp; Database of Diverse Databases</a></li>
// //   <li><a href="https://consciousstyleguide.com/" target="_blank" class="link-color sbm-text link accessible-link">Conscious Style Guide</a></li>
// //   <li><a href="https://www.dvpit.com/" target="_blank" class="link-color sbm-text link accessible-link">#DVpit</a></li>
// //   <li><a href="https://blacklivesmatter.com/" target="_blank" class="link-color sbm-text link accessible-link">Black Lives Matter</a></li>
// // </ul>
// // <p><br>
// // </p></div>`
// //     },
// //     {
// //       title: "Voyage YA Three-Sentence Stories",
// //       guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Voyage-YA-Three-Sentence-Stories"><p>Introducing <em>Voyage</em>’s newest publication opportunity: Three-Sentence Stories. Can you write a compelling story in just three sentences? Give it a try for the chance to be featured on our Instagram, @VoyageYA. Have fun and challenge yourself with this unique opportunity!</p>
// // <p>Guidelines:</p>
// // <ul>
// //   <li>Stories must be fiction, and exactly three sentences.</li>
// //   <li>Stories must be written for a young adult audience.</li>
// //   <li>Stories must not be previously published, including on personal blogs and websites.</li>
// //   <li>Submissions may include up to five three-sentence stories in one document.</li>
// //   <li>Submitters may submit once per month.</li>
// //   <li>We do not pay for Three-Sentence Stories, but we do promote authors on Instagram!</li>
// //   <li>Editorial Feedback Letters are not available for Three-Sentence Story submitters.</li>
// // </ul>
// // <p><br>
// // </p>
// // <p><strong>Note:</strong> To ensure the protection of our volunteer readers, and to keep <em>Voyage</em> a safe space, please let us know in your cover letter if your work can be triggering in any way. This information will have no bearing on your submission or our decision—we just want to ensure the best possible environment for our readers. Thank you for your understanding.&nbsp;</p></div>`
// //     },
// //     {
// //       title: "Uncharted Call for Readers",
// //       guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Uncharted-Call-for-Readers"><p>Uncharted is looking to add some talented new readers to our team! If you love the following genres: &nbsp;Science Fiction/Fantasy, Thriller/Mystery, and Historical Fiction or experience across a wide spectrum of these genres., and three to four hours of reading submissions a week sounds like fun, we encourage you to apply. Our readers work remotely and can set their own schedules. BIPOC, marginalized or underrepresented writers are strongly encouraged to apply!</p>
// // <p>This position begins when accepted and involves a commitment for 6 months, though we are flexible. PLEASE NOTE: readerships are unpaid and on a strictly volunteer basis. If interested, please <strong>send a cover letter, resume, and at least one writing sample. </strong>We look forward to hearing from you! <br>
// // </p>
// // <p>*Cover letters should address your interest in the above genres, including favorite stories and/or writers. Please include any memberships.&nbsp;</p></div>`
// //     },
// //     {
// //       title: "Voyage YA Reading Team Application",
// //       guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Voyage-YA-Reading-Team-Application"><p>This volunteer position begins as soon as selected and involves a commitment of at least <strong>six</strong> months. Readers should have a keen eye for quality young adult fiction, creative nonfiction, and poetry. If at any point you'd like to end your reader position with <em>Voyage YA</em>, we ask that you kindly give us at least two weeks' notice. Readerships are unpaid and fulfilled on a strictly volunteer basis. Applications will be open until the submission cap of fifteen is reached.</p>
// // <p>We'll conduct this process in two rounds. Our process involves answering a few specific questions and a reader assessment.</p>
// // <p><strong>Please send a cover letter, résumé, and at least one writing sample in a single file. </strong>We look forward to hearing from you!</p>
// // <p><br>
// //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for supporting <em>Voyage YA by Uncharted</em>!<br>
// //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best,<br>
// //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The <em>Voyage YA</em> Team <br>
// //  <br>
// //  <br>
// //  <em><strong>Voyage YA</strong></em><strong> Values</strong><br>
// //  <em>Voyage YA</em> <em>by Uncharted</em> is committed to diversity and inclusivity. We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation. <em>Voyage</em> <em>YA</em> has a zero-tolerance policy for any work that is discriminatory or harmful in any way, whether intentional or unintentional. Hate speech of any kind will not be tolerated and any work that violates our values will be immediately declined. <em>Voyage YA</em> maintains the right to further ban authors if problematic behavior persists and/or deplatform authors should there be problematic behavior via other platforms. &nbsp;&nbsp;<br>
// //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the landscape of publishing changes, <em>Voyage</em> acknowledges that there is still much work to be done. Systemic racism and structural inequality have been problems for a long time, and <em>Voyage</em> <em>YA</em> will actively work to dismantle them. We have joined the global movement to fight for equality and will consciously work to amplify marginalized voices of authors who have been historically underrepresented in publishing.<br>
// //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We urge authors and readers alike to visit some of the resources we have found helpful—and seek out others.<br>
// // &nbsp;</p>
// // <ul>
// //   <li><a href="https://diversebooks.org/" target="_blank" class="link-color sbm-text link accessible-link">We Need Diverse Books</a> and their <a href="https://diversebooks.org/resources/resources-for-writers/" target="_blank" class="link-color sbm-text link accessible-link">resources page for writers</a></li>
// //   <li><a href="https://writingwithcolor.tumblr.com/" target="_blank" class="link-color sbm-text link accessible-link">Writing with Color</a></li>
// //   <li><a href="https://blog.leeandlow.com/2020/01/28/2019diversitybaselinesurvey/" target="_blank" class="link-color sbm-text link accessible-link">Lee &amp; Low 2019 Diversity Survey</a></li>
// //   <li><a href="https://editorsofcolor.com/database/" target="_blank" class="link-color sbm-text link accessible-link">Editors of Color Database &amp; Database of Diverse Databases</a></li>
// //   <li><a href="https://consciousstyleguide.com/" target="_blank" class="link-color sbm-text link accessible-link">Conscious Style Guide</a></li>
// //   <li><a href="https://www.dvpit.com/" target="_blank" class="link-color sbm-text link accessible-link">#DVpit</a></li>
// //   <li><a href="https://blacklivesmatter.com/" target="_blank" class="link-color sbm-text link accessible-link">Black Lives Matter</a></li>
// // </ul>
// // <p><br>
// // &nbsp;</p></div>`
// //     },
// //   ];

// const GuidelineAndSubmission = ()=>{

// return (
//     <>
//     <LoggedInBar/>
//     <SubmittableCoverImage/>
//     <Guidelines />
//     <div>
//       {categories.map((category, index) => (
//         <SubmissioBottonGuideline
//           key={index}
//           title={category.title}
//           sections={category.sections}
//         />
//       ))}
//     </div>
//     <SubmittableFooter/>
//     </>
// );

// }

// export default GuidelineAndSubmission;









import React, { useEffect, useState } from "react";
import Guidelines from "../components/Guidelines";
import SubmissioBottonGuideline from "../components/SubmissionBottonGuideline";
import SubmittableFooter from "../components/SubmittableFooter";
import LoggedInBar from "../components/LoggedInBar";
// import SubmittableCoverImage from "../components/SubmittableCoverImage";
import { RiGhost2Fill } from "react-icons/ri";
import categories from "../data/categoriesData";

const GuidelineAndSubmission = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example effect to check login status (replace with real auth check)
  useEffect(() => {
    // Simulate a login check; replace with real authentication check logic
    const userToken = localStorage.getItem("userToken"); // example storage key
    setIsLoggedIn(!!userToken); // Set to true if token exists, false otherwise
  }, []);

  // Render a login prompt if not logged in
  if (!isLoggedIn) {
    return (
      <div>
        <p>You must be logged in to access this page.</p>
        <button onClick={() => window.location.href = "/login"}>Login</button>
        <button onClick={() => window.location.href = "/register"}>Register</button>
      </div>
    );
  }

  // Render main content if logged in
  return (
    <>
      <LoggedInBar />
      {/* <SubmittableCoverImage /> */}
      <Guidelines />
      <div>
        {categories.map((category, index) => (
          <SubmissioBottonGuideline
            key={index}
            title={category.title}
            sections={category.sections}
          />
        ))}
      </div>
      <SubmittableFooter />
    </>
  );
};

export default GuidelineAndSubmission;
