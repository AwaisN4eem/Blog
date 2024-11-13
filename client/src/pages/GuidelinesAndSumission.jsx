import React from "react";
import Guidelines from "../components/Guidelines";
import SubmissioBottonGuideline from "../components/SubmissionBottonGuideline"
import SubmittableFooter from "../components/SubmittableFooter";
import LoggedInBar from "../components/LoggedInBar";
import SubmittableCoverImage from "../components/SubmittaleCoverImage";
const categories = [
    {
      title: "Science Fiction/Fantasy Short Story",
      guideline: `<p>Uncharted Magazine publishes Science Fiction/Fantasy Short Stories from fiction writers of any background or experience. We want stories that richly imagine the future of technology and science, that explore our world through a speculative lens. We want stories of fantasy that make us hunger for new worlds, new biomes, new places we can explore through thrilling sensual details and human empathy. We want stories that thrill us, that make us feel alive, that awaken our desires to explore and go on adventures.<br>
<strong>Guidelines:</strong><br>
All fiction categories are open year round and we do not charge any submission fees. We accept simultaneous submissions but ask that you inform us immediately and withdraw your work if your story is accepted elsewhere.<br>
<strong>Payment:</strong> We pay our authors $200 for original fiction! We pay by check or PayPal, according to the author's preference.<br>
<strong>Word Count:</strong> Submitted stories should be between 1,000-5,000 words.<br>
We will also consider previously published fiction, as long as the writer retains the rights or second-publication rights can be obtained. We do not pay for reprints.<br>
Writers may submit one story per submission. Please wait one month after our initial reply before submitting again.<br>
<strong>Cover letters:</strong> Cover letters are optional, but it's nice to know who is submitting to us. We <strong>do not</strong> need your mailing address. Please refrain from describing your stories. The work needs to speak for itself. Including each story's title and word count is helpful for more efficient consideration of your work. Please include a brief third-person biography statement. If necessary, please include a content warning to help protect our readers.<br>
<strong>Format:</strong> double-space your submission and use Times New Roman 12 pt font. Word docs work best!<br>
<strong>Response Times:</strong> Please allow us up to three months to inform you if we have accepted your work for publication. You will usually hear from us much sooner. We cannot offer personalized feedback on each story. If we say, “send more,” however, it does mean that we hope to see something else from you.<br>
We consider submissions sent via Submittable. We are not open to email submissions and are not open to submissions sent via post.<br>
<strong>Diversity Statement:</strong> We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation, or for any other reason. We reserve the right not to publish works that dwell unnecessarily in or that are unchallenging of the discrimination categories listed above. We reserve the right to send back work unread and unevaluated if we find the work violates our vision of inclusivity and non-discrimination. This may result in banning individual works or writers from our submission queue.<br>
<strong>Rights:</strong> Uncharted Magazine holds first serial publication rights for three months after publication. Authors agree not to publish, nor authorize or permit the publication of, any part of the material for three months following Uncharted Magazine's first publication. For reprints, we ask for acknowledgment of its publication in Uncharted Magazine first.<br>
<strong>Courtesy:</strong> Please refrain from withdrawing your submission to fix a typo or misspelling. These minor issues will not result in an automatic decline. We read submissions based on the value of the story, not the typing.<br>
<strong>OPTIONAL EDITORIAL FEEDBACK:</strong><br>
You may choose to receive editorial feedback on your piece. We will provide a global letter discussing the strengths of the writing and the recommended focus for revision. Our aim is to make our comments actionable and encouraging. These letters are written by editors and staff readers of <em>Uncharted Magazine</em>.</p>
`},
    {
      title: "Thriller/Mystery Short Story",
      guideline: `<p>Uncharted Magazine publishes Thriller/Mystery Short Stories from fiction writers of any background or experience. We are rolling <strong>horror stories</strong> into this category! We want stories that keep us up at night, afraid to turn the corner. Stories that take us into the resonant fear of looming monsters and haunting ghosts. We want stories that thrill us by keeping us on the edges of our seats, hearts pounding, wondering how it will end! Stories with characters who refuse to stay in the shadows! We want stories of mystery that make us search for answers, for reasons, for the things that happen in the shadows.<br>
 <strong>Guidelines: </strong><br>
 All fiction categories are open year round and we do not charge any submission fees. We accept simultaneous submissions but ask that you inform us immediately and withdraw your work if your story is accepted elsewhere. <br>
 <strong>Payment:</strong> We pay our authors $200 for original fiction! We pay by check or PayPal, according to the author's preference.<br>
 <strong>Word Count</strong>: Submitted stories should be between 1,000-5,000 words. <br>
 We will also consider previously published fiction, as long as the writer retains the rights or second-publication rights can be obtained. We do not pay for reprints.<br>
 Writers may submit one story per submission. Please wait one month after our initial reply before submitting again.<br>
 <strong>Cover letters</strong>: Cover letters are optional, but it's nice to know who is submitting to us. We <strong>do not </strong>need your mailing address. &nbsp;Please refrain from describing your stories. The work needs to speak for itself. Including each story's title and word count is helpful for more efficient consideration of your work. Please include a brief third-person biography statement. If necessary, please include a content warning to help protect our readers. <br>
 <strong>Format: </strong>double-space your submission and use Times New Roman 12 pt font. Word docs work best!<br>
 <strong>Response Times</strong>: Please allow us up to three months to inform you if we have accepted your work for publication. You will usually hear from us much sooner. We cannot offer personalized feedback on each story. If we say, “Send more,” however, it does mean that we hope to see something else from you.<br>
 We consider submissions sent via Submittable. We are not open to email submissions and are not open to submissions sent via post.<br>
 <strong>Diversity Statement: </strong>We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation, or for any other reason. We reserve the right not to publish works that dwell unnecessarily in or that are unchallenging of the discrimination categories listed above. We reserve the right to send back work unread and unevaluated if we find the work violates our vision of inclusivity and non-discrimination. This may result in banning individual works or writers from our submission queue.<br>
 <strong>Rights:</strong> Uncharted Magazine holds the first serial publication rights for three months after publication. Authors agree not to publish, nor authorize or permit the publication of, any part of the material for three months following Uncharted Magazine's first publication. For reprints, we ask for acknowledgment of its publication in Uncharted Magazine first.<br>
 <strong>Courtesy:</strong> Please refrain from withdrawing your submission to fix a typo or misspelling. These minor issues will not result in an automatic decline. We read submissions based on the value of the story, not the typing. <br>
 <strong>OPTIONAL EDITORIAL FEEDBACK:</strong><br>
 You may choose to receive editorial feedback on your piece. We will provide a global letter discussing the strengths of the writing and the recommended focus for revision. We aim to make our comments actionable and encouraging. These letters are written by editors and staff readers of <em>Uncharted Magazine</em>.</p>`
    },
    {
      title: "Historical Fiction Short Story",
      guideline: `<p><em>Uncharted Magazine</em> is excited to introduce a new submission category for publication in our magazine. We’re looking for stories that engage deeply with history. We want your characters to interact with infamous people of history, dwell deeply in past eras, and show us how the world used to operate and what lessons we can learn. We want history brought to life on our pages.<br>
        </p>
        <p><strong>Guidelines: </strong><br>
All fiction categories are open year-round, and we do not charge any submission fees. We accept simultaneous submissions but ask that you inform us immediately and withdraw your work if your story is accepted elsewhere. <br>
<strong>Payment:</strong> We pay our authors $200 for original fiction! We pay by check or PayPal, according to the author's preference.<br>
<strong>Word Count</strong>: Submitted stories should be between 1,000-5,000 words. <br>
We will also consider previously published fiction, as long as the writer retains the rights or second-publication rights can be obtained. We do not pay for reprints.<br>
Writers may submit one story per submission. Please wait one month after our initial reply before submitting again.<br>
<strong>Cover letters</strong>: Cover letters are optional, but it's nice to know who is submitting to us. We <strong>do not </strong>need your mailing address. &nbsp;Please refrain from describing your stories. The work needs to speak for itself. Including each story's title and word count is helpful for more efficient consideration of your work. Please include a brief third-person biography statement. If necessary, please include a content warning to help protect our readers. <br>
<strong>Format: </strong>double-space your submission and use Times New Roman 12 pt font. Word docs work best!<br>
<strong>Response Times</strong>: Please allow us up to three months to inform you if we have accepted your work for publication. You will usually hear from us much sooner. We cannot offer personalized feedback on each story. If we say, “Send more,” however, it does mean that we hope to see something else from you.<br>
We consider submissions sent via Submittable. We are not open to email submissions and are not open to submissions sent via post.<br>
<strong>Diversity Statement: </strong>We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation, or for any other reason. We reserve the right not to publish works that dwell unnecessarily in or that are unchallenging of the discrimination categories listed above. We reserve the right to send back work unread and unevaluated if we find the work violates our vision of inclusivity and non-discrimination. This may result in banning individual works or writers from our submission queue.<br>
<strong>Rights:</strong> Uncharted Magazine holds the first serial publication rights for three months after publication. Authors agree not to publish, nor authorize or permit the publication of, any part of the material for three months following Uncharted Magazine's first publication. For reprints, we ask for acknowledgment of its publication in Uncharted Magazine first.<br>
<strong>Courtesy:</strong> Please refrain from withdrawing your submission to fix a typo or misspelling. These minor issues will not result in an automatic decline. We read submissions based on the value of the story, not the typing. <br>
<strong>OPTIONAL EDITORIAL FEEDBACK:</strong><br>
You may choose to receive editorial feedback on your piece. We will provide a global letter discussing the strengths of the writing and the recommended focus for revision. We aim to make our comments actionable and encouraging. These letters are written by editors and staff readers of <em>Uncharted Magazine</em>.</p>
        `
    },
    {
      title: "YA Short Prose",
      guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="YA-Short-Prose"><p><strong>Submission Guidelines</strong><br>
 **Yes, you have indeed been redirected, correctly, to <em>Uncharted</em>, our new home on Submittable!**<br>
 Please read our submission guidelines carefully.&nbsp;</p>
<p><em>Voyage</em> simply aims to publish good work and provide a space for new and established voices. To get an idea of what we publish, please read our archives. General submissions are open year-round with no fee to submit.</p>
<p>We only accept submissions via our online submission managing system, Submittable. We DO NOT accept submissions via email. Submissions sent via email will be automatically discarded without a response. We accept simultaneous submissions, but please withdraw your work via Submittable if it is accepted elsewhere.</p>
<p>Though we consider reprints, please be advised that <em>Voyage </em>doesn't offer payment for work that has been published before. If you are submitting a piece that has been published, please notify us in your submission.&nbsp;</p>
<p><em>Voyage</em> pays $200 per accepted, previously unpublished piece of short prose.</p>
<p><strong>Fiction:</strong> We are looking for short stories that surprise, inspire, entertain, or enlighten.</p>
<p><strong>Creative Nonfiction: </strong>We’re on the hunt for personal essays and other creative nonfiction that specifically relates to the teen experience. Submit your creative nonfiction via our submission manager here. &nbsp;</p>
<p><strong>Manuscript Preparation:</strong> Please make sure your manuscript is double-spaced with Times New Roman 12. Submissions should be no more than 6,000 words. Please include the author's name and page number in the top right-hand corner of every page. &nbsp;</p>
<p><strong>Note:</strong> To ensure the protection of our volunteer readers, and to keep <em>Voyage</em> a safe space, please let us know in your cover letter if your work can be triggering in any way. This information will have no bearing on your submission or our decision—we just want to ensure the best possible environment for our readers. Thank you for your understanding.&nbsp;</p>
<p><strong>Editorial Feedback Options</strong><br>
The single feedback letter option costs $69 and will provide you with two pages of detailed and actionable feedback on your submission. The three-letter option will provide three separate letters (two pages each) from three different editors at $179. Our guest editors are paid a significant portion of the fee and all are incredibly astute professionals.</p>
<p><em><strong>Voyage</strong></em><strong> Values</strong><br>
<em>Voyage YA</em> is committed to diversity and inclusivity. We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation. <em>Voyage</em> has a zero-tolerance policy for any work that is discriminatory or harmful in any way, whether intentional or unintentional. Hate speech of any kind will not be tolerated and any work that violates our values will be immediately declined. <em>Voyage</em> maintains the right to further ban authors if problematic behavior persists and/or deplatform authors should there be problematic behavior via other platforms.</p>
<p>As the landscape of publishing changes, <em>Voyage</em> acknowledges that there is still much work to be done. Systemic racism and structural inequality have been problems for a long time, and <em>Voyage</em> will actively work to dismantle them. We have joined the global movement to fight for equality and will consciously work to amplify marginalized voices of authors who have been historically underrepresented in publishing.</p>
<p>We urge authors and readers alike to visit some of the resources we have found helpful—and seek out others:<br>
&nbsp;</p>
<ul>
  <li><a href="https://diversebooks.org/" target="_blank" class="link-color sbm-text link accessible-link">We Need Diverse Books</a> and their <a href="https://diversebooks.org/resources/resources-for-writers/" target="_blank" class="link-color sbm-text link accessible-link">resources page for writers</a></li>
  <li><a href="https://writingwithcolor.tumblr.com/" target="_blank" class="link-color sbm-text link accessible-link">Writing with Color</a></li>
  <li><a href="https://blog.leeandlow.com/2020/01/28/2019diversitybaselinesurvey/" target="_blank" class="link-color sbm-text link accessible-link">Lee &amp; Low 2019 Diversity Survey</a></li>
  <li><a href="https://editorsofcolor.com/database/" target="_blank" class="link-color sbm-text link accessible-link">Editors of Color Database &amp; Database of Diverse Databases</a></li>
  <li><a href="https://consciousstyleguide.com/" target="_blank" class="link-color sbm-text link accessible-link">Conscious Style Guide</a></li>
  <li><a href="https://www.dvpit.com/" target="_blank" class="link-color sbm-text link accessible-link">#DVpit</a></li>
  <li><a href="https://blacklivesmatter.com/" target="_blank" class="link-color sbm-text link accessible-link">Black Lives Matter</a></li>
</ul>
<p><br>
</p></div>`
    },
    {
      title: "Voyage YA Three-Sentence Stories",
      guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Voyage-YA-Three-Sentence-Stories"><p>Introducing <em>Voyage</em>’s newest publication opportunity: Three-Sentence Stories. Can you write a compelling story in just three sentences? Give it a try for the chance to be featured on our Instagram, @VoyageYA. Have fun and challenge yourself with this unique opportunity!</p>
<p>Guidelines:</p>
<ul>
  <li>Stories must be fiction, and exactly three sentences.</li>
  <li>Stories must be written for a young adult audience.</li>
  <li>Stories must not be previously published, including on personal blogs and websites.</li>
  <li>Submissions may include up to five three-sentence stories in one document.</li>
  <li>Submitters may submit once per month.</li>
  <li>We do not pay for Three-Sentence Stories, but we do promote authors on Instagram!</li>
  <li>Editorial Feedback Letters are not available for Three-Sentence Story submitters.</li>
</ul>
<p><br>
</p>
<p><strong>Note:</strong> To ensure the protection of our volunteer readers, and to keep <em>Voyage</em> a safe space, please let us know in your cover letter if your work can be triggering in any way. This information will have no bearing on your submission or our decision—we just want to ensure the best possible environment for our readers. Thank you for your understanding.&nbsp;</p></div>`
    },
    {
      title: "Uncharted Call for Readers",
      guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Uncharted-Call-for-Readers"><p>Uncharted is looking to add some talented new readers to our team! If you love the following genres: &nbsp;Science Fiction/Fantasy, Thriller/Mystery, and Historical Fiction or experience across a wide spectrum of these genres., and three to four hours of reading submissions a week sounds like fun, we encourage you to apply. Our readers work remotely and can set their own schedules. BIPOC, marginalized or underrepresented writers are strongly encouraged to apply!</p>
<p>This position begins when accepted and involves a commitment for 6 months, though we are flexible. PLEASE NOTE: readerships are unpaid and on a strictly volunteer basis. If interested, please <strong>send a cover letter, resume, and at least one writing sample. </strong>We look forward to hearing from you! <br>
</p>
<p>*Cover letters should address your interest in the above genres, including favorite stories and/or writers. Please include any memberships.&nbsp;</p></div>`
    },
    {
      title: "Voyage YA Reading Team Application",
      guideline: `<div data-notranslate="" data-linkify="" class="category-description" tabindex="0" aria-labelledby="Voyage-YA-Reading-Team-Application"><p>This volunteer position begins as soon as selected and involves a commitment of at least <strong>six</strong> months. Readers should have a keen eye for quality young adult fiction, creative nonfiction, and poetry. If at any point you'd like to end your reader position with <em>Voyage YA</em>, we ask that you kindly give us at least two weeks' notice. Readerships are unpaid and fulfilled on a strictly volunteer basis. Applications will be open until the submission cap of fifteen is reached.</p>
<p>We'll conduct this process in two rounds. Our process involves answering a few specific questions and a reader assessment.</p>
<p><strong>Please send a cover letter, résumé, and at least one writing sample in a single file. </strong>We look forward to hearing from you!</p>
<p><br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for supporting <em>Voyage YA by Uncharted</em>!<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best,<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The <em>Voyage YA</em> Team <br>
 <br>
 <br>
 <em><strong>Voyage YA</strong></em><strong> Values</strong><br>
 <em>Voyage YA</em> <em>by Uncharted</em> is committed to diversity and inclusivity. We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation. <em>Voyage</em> <em>YA</em> has a zero-tolerance policy for any work that is discriminatory or harmful in any way, whether intentional or unintentional. Hate speech of any kind will not be tolerated and any work that violates our values will be immediately declined. <em>Voyage YA</em> maintains the right to further ban authors if problematic behavior persists and/or deplatform authors should there be problematic behavior via other platforms. &nbsp;&nbsp;<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the landscape of publishing changes, <em>Voyage</em> acknowledges that there is still much work to be done. Systemic racism and structural inequality have been problems for a long time, and <em>Voyage</em> <em>YA</em> will actively work to dismantle them. We have joined the global movement to fight for equality and will consciously work to amplify marginalized voices of authors who have been historically underrepresented in publishing.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We urge authors and readers alike to visit some of the resources we have found helpful—and seek out others.<br>
&nbsp;</p>
<ul>
  <li><a href="https://diversebooks.org/" target="_blank" class="link-color sbm-text link accessible-link">We Need Diverse Books</a> and their <a href="https://diversebooks.org/resources/resources-for-writers/" target="_blank" class="link-color sbm-text link accessible-link">resources page for writers</a></li>
  <li><a href="https://writingwithcolor.tumblr.com/" target="_blank" class="link-color sbm-text link accessible-link">Writing with Color</a></li>
  <li><a href="https://blog.leeandlow.com/2020/01/28/2019diversitybaselinesurvey/" target="_blank" class="link-color sbm-text link accessible-link">Lee &amp; Low 2019 Diversity Survey</a></li>
  <li><a href="https://editorsofcolor.com/database/" target="_blank" class="link-color sbm-text link accessible-link">Editors of Color Database &amp; Database of Diverse Databases</a></li>
  <li><a href="https://consciousstyleguide.com/" target="_blank" class="link-color sbm-text link accessible-link">Conscious Style Guide</a></li>
  <li><a href="https://www.dvpit.com/" target="_blank" class="link-color sbm-text link accessible-link">#DVpit</a></li>
  <li><a href="https://blacklivesmatter.com/" target="_blank" class="link-color sbm-text link accessible-link">Black Lives Matter</a></li>
</ul>
<p><br>
&nbsp;</p></div>`
    },
  ];

const GuidelineAndSubmission = ()=>{

return (
    <>
    <LoggedInBar/>
    <SubmittableCoverImage/>
    <Guidelines />
    <div>
      {categories.map((item, index) => (
        <SubmissioBottonGuideline
          key={index}
          title={item.title}
          guidelines={item.guideline}
        />
      ))}
    </div>
    <SubmittableFooter/>
    </>
);

}

export default GuidelineAndSubmission;