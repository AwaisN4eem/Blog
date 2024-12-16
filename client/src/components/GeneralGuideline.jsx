
const sections = [
  {
    title: "OPTIONAL EDITORIAL FEEDBACK",
    content: `You may choose to receive editorial feedback on your piece in any category. We will provide a global letter discussing the strengths of the writing and the recommended focus for revision. We aim to make our comments actionable and encouraging. These letters are written by editors and staff readers of Uncharted Magazine.`,
  },
  {
    title: "GENERAL GUIDELINES",
    content: [
      "All fiction categories are open year-round, and we do not charge any submission fees. We accept simultaneous submissions but ask that you inform us immediately and withdraw your work if your story is accepted elsewhere.",
      "Payment: We pay our authors $200 for original fiction! We pay by check or PayPal, according to the author’s preference.",
      "Word Count: Submitted stories should be between 1,000-5,000 words.",
      "We will also consider previously published fiction, as long as the writer retains the rights or second-publication rights can be obtained. We do not pay for reprints.",
      "Writers may submit one story per submission. Please wait one month after our initial reply before submitting again.",
      "Cover letters: Cover letters are optional, but it’s nice to know who is submitting to us. We do not need your mailing address. Please refrain from describing your stories. The work needs to speak for itself. Including each story’s title and word count is helpful for more efficient consideration of your work. Please include a brief third-person biography statement. If necessary, please include a content warning to help protect our readers.",
      "Format: Double-space your submission and use Times New Roman 12 pt font. Word docs work best!",
      "Response Times: Please allow us up to three months to inform you if we have accepted your work for publication. You will usually hear from us much sooner. We cannot offer personalized feedback on each story. If we say, “Send more,” however, it does mean that we hope to see something else from you.",
      "We consider submissions sent via Submittable. We are not open to email submissions and are not open to submissions sent via post.",
      "Diversity Statement: We do not discriminate on the basis of age, ancestry, disability, family status, gender identity or expression, national origin, race, religion, sex or sexual orientation, or for any other reason. We reserve the right not to publish works that dwell unnecessarily in or that are unchallenging of the discrimination categories listed above. We reserve the right to send back work unread and unevaluated if we find the work violates our vision of inclusivity and non-discrimination. This may result in banning individual works or writers from our submission queue.",
      "Rights: Uncharted Magazine holds the first serial publication rights for three months after publication. Authors agree not to publish, nor authorize or permit the publication of, any part of the material for three months following Uncharted Magazine’s first publication. For reprints, we ask for acknowledgment of its publication in Uncharted Magazine first.",
      "Courtesy: Please refrain from withdrawing your submission to fix a typo or misspelling. These minor issues will not result in an automatic decline. We read submissions based on the value of the story, not the typing."
    ]
  }
];


export default function Guidelines() {
  return (
    <div className="entry-content mx-auto w-[80%] items-center  p-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, i) => (
              <p key={i} className="mb-6">{paragraph}</p>
            ))
          ) : (
            <p className="mb-6">{section.content}</p>
          )}
          {index === 0 && <hr className="my-8 border-gray-400 opacity-50" />}
        </div>
      ))}
    </div>
  );
}
